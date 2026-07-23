import { Injectable } from '@angular/core';
import { PDFDocument } from 'pdf-lib';

export interface RedactionBox {
  pageRange: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface RedactOptions {
  renderScale: number;
  boxes: RedactionBox[];
}

interface ResolvedBox extends Omit<RedactionBox, 'pageRange'> {
  pageIndices: number[];
}

@Injectable({ providedIn: 'root' })
export class RedactPdfService {
  private pdfjsCache: any = null;

  async redact(file: File, options: RedactOptions): Promise<Uint8Array> {
    const sourceBytes = new Uint8Array(await file.arrayBuffer());
    const pdfjs = await this.getPdfjs();
    const sourceDoc = await pdfjs.getDocument({ data: sourceBytes.slice(0) }).promise;
    const outputDoc = await PDFDocument.create();
    const pageCount = sourceDoc.numPages;
    const resolvedBoxes = this.resolveBoxes(options.boxes, pageCount);

    if (!resolvedBoxes.length) {
      throw new Error('No valid redaction areas matched the current page ranges.');
    }

    for (let pageNumber = 1; pageNumber <= pageCount; pageNumber++) {
      const page = await sourceDoc.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1 });
      const renderViewport = page.getViewport({ scale: options.renderScale });
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(renderViewport.width));
      canvas.height = Math.max(1, Math.round(renderViewport.height));

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Unable to create a rendering surface.');
      }

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      await page.render({ canvasContext: ctx, viewport: renderViewport }).promise;

      const boxesForPage = resolvedBoxes.filter(box => box.pageIndices.includes(pageNumber - 1));
      for (const box of boxesForPage) {
        this.paintRedactionBox(ctx, canvas, box);
      }

      const jpegBytes = await this.canvasToJpegBytes(canvas);
      const image = await outputDoc.embedJpg(jpegBytes);
      const outPage = outputDoc.addPage([viewport.width, viewport.height]);
      outPage.drawImage(image, {
        x: 0,
        y: 0,
        width: viewport.width,
        height: viewport.height,
      });
    }

    return outputDoc.save({ useObjectStreams: true });
  }

  parsePageRange(rangeStr: string, totalPages: number): number[] {
    const s = rangeStr.trim().toLowerCase();
    if (!s || s === 'all') {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    const set = new Set<number>();
    for (const part of s.split(',')) {
      const token = part.trim();
      if (!token) continue;

      if (token.includes('-')) {
        const [rawStart, rawEnd] = token.split('-');
        const start = parseInt(rawStart.trim(), 10);
        const end = parseInt(rawEnd.trim(), 10);
        if (!Number.isNaN(start) && !Number.isNaN(end)) {
          for (let i = Math.max(1, start); i <= Math.min(end, totalPages); i++) {
            set.add(i - 1);
          }
        }
      } else {
        const page = parseInt(token, 10);
        if (!Number.isNaN(page) && page >= 1 && page <= totalPages) {
          set.add(page - 1);
        }
      }
    }

    return Array.from(set).sort((a, b) => a - b);
  }

  private resolveBoxes(boxes: RedactionBox[], totalPages: number): ResolvedBox[] {
    return boxes
      .map(box => ({
        ...box,
        pageIndices: this.parsePageRange(box.pageRange, totalPages),
      }))
      .filter(box => box.pageIndices.length > 0);
  }

  private paintRedactionBox(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    box: ResolvedBox,
  ) {
    const x = (box.x / 100) * canvas.width;
    const y = (box.y / 100) * canvas.height;
    const width = (box.width / 100) * canvas.width;
    const height = (box.height / 100) * canvas.height;

    ctx.save();
    ctx.fillStyle = '#000000';
    ctx.fillRect(x, y, width, height);

    if (width >= 56 && height >= 20) {
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px system-ui, sans-serif';
      ctx.textBaseline = 'middle';
      ctx.fillText('REDACTED', x + 10, y + height / 2);
    }
    ctx.restore();
  }

  private async canvasToJpegBytes(canvas: HTMLCanvasElement): Promise<Uint8Array> {
    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        value => {
          if (value) {
            resolve(value);
          } else {
            reject(new Error('Failed to render the redacted page.'));
          }
        },
        'image/jpeg',
        0.94,
      );
    });

    return new Uint8Array(await blob.arrayBuffer());
  }

  private async getPdfjs(): Promise<any> {
    if (this.pdfjsCache) return this.pdfjsCache;
    const pdfjs = await import('pdfjs-dist');
    pdfjs.GlobalWorkerOptions.workerSrc =
      `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;
    this.pdfjsCache = pdfjs;
    return pdfjs;
  }
}
