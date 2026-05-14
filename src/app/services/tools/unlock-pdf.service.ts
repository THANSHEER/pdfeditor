import { Injectable } from '@angular/core';
import { PDFDocument } from 'pdf-lib';

export type PdfLockStatus = 'checking' | 'locked' | 'unlocked' | 'unknown';

// pdfjs PasswordException codes
const NEED_PASSWORD = 1;
const INCORRECT_PASSWORD = 2;

@Injectable({ providedIn: 'root' })
export class UnlockPdfService {
  // Lazy singleton — same pattern as PdfService
  private pdfjsCache: any = null;

  private async getPdfjs(): Promise<any> {
    if (this.pdfjsCache) return this.pdfjsCache;
    const pdfjs = await import('pdfjs-dist');
    pdfjs.GlobalWorkerOptions.workerSrc =
      `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;
    this.pdfjsCache = pdfjs;
    return pdfjs;
  }

  /**
   * Uses pdfjs to probe the file before the user clicks Unlock.
   * pdfjs throws PasswordException (code 1) for any encrypted PDF when no
   * password is supplied — reliable for all encryption revisions.
   */
  async detectLockStatus(file: File): Promise<PdfLockStatus> {
    try {
      const pdfjs = await this.getPdfjs();
      const bytes = new Uint8Array(await file.arrayBuffer());
      await pdfjs.getDocument({ data: bytes }).promise;
      return 'unlocked';
    } catch (err: unknown) {
      const name = (err as any)?.name;
      const code = (err as any)?.code;
      if (name === 'PasswordException' && (code === NEED_PASSWORD || code === INCORRECT_PASSWORD)) {
        return 'locked';
      }
      return 'unknown';
    }
  }

  /**
   * Decrypts the PDF using pdfjs (which handles RC4/AES-128/AES-256),
   * renders every page to a high-quality canvas (144 DPI), and produces a
   * new, fully unlocked PDF via pdf-lib.
   *
   * This approach avoids qpdf-wasm entirely — qpdf uses Emscripten pthreads
   * and requires SharedArrayBuffer / COOP+COEP headers which are not viable
   * for a generic static host deployment.
   */
  async unlock(file: File, password: string): Promise<Uint8Array> {
    if (!password.trim()) {
      throw new Error('Please enter the current password to unlock this PDF.');
    }

    const pdfjs = await this.getPdfjs();
    const bytes = new Uint8Array(await file.arrayBuffer());

    let pdfJsDoc: any;
    try {
      pdfJsDoc = await pdfjs.getDocument({ data: bytes, password }).promise;
    } catch (err: unknown) {
      const name = (err as any)?.name;
      if (name === 'PasswordException') {
        throw new Error('Incorrect password. Please check the password and try again.');
      }
      const msg = err instanceof Error ? err.message : '';
      throw new Error(msg || 'Unable to open this PDF. The file may be damaged or unsupported.');
    }

    const outputDoc = await PDFDocument.create();
    const SCALE = 2.0; // 144 DPI — good quality, reasonable file size

    for (let n = 1; n <= pdfJsDoc.numPages; n++) {
      const page = await pdfJsDoc.getPage(n);
      const viewport = page.getViewport({ scale: SCALE });

      const canvas = document.createElement('canvas');
      canvas.width  = Math.round(viewport.width);
      canvas.height = Math.round(viewport.height);
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      await page.render({ canvasContext: ctx, viewport }).promise;
      page.cleanup();

      // JPEG at 92 % quality — good fidelity, significantly smaller than PNG
      const b64 = canvas.toDataURL('image/jpeg', 0.92).split(',')[1];
      const jpegBytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0));

      const img = await outputDoc.embedJpg(jpegBytes);
      // Page size in pt (original resolution, not scaled)
      const ptW = viewport.width  / SCALE;
      const ptH = viewport.height / SCALE;
      const pdfPage = outputDoc.addPage([ptW, ptH]);
      pdfPage.drawImage(img, { x: 0, y: 0, width: ptW, height: ptH });
    }

    await pdfJsDoc.destroy();
    return outputDoc.save();
  }
}
