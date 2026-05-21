import { Injectable } from '@angular/core';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export type SignaturePosition =
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center';

export interface SignOptions {
  signatureBytes: Uint8Array;
  signatureType: 'png' | 'jpeg';
  pageRange: string;
  position: SignaturePosition;
  widthPercent: number;
  label?: string;
  includeDate: boolean;
  dateText?: string;
}

@Injectable({ providedIn: 'root' })
export class SignPdfService {
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

  async sign(file: File, options: SignOptions): Promise<Uint8Array> {
    const bytes = new Uint8Array(await file.arrayBuffer());
    const pdfDoc = await PDFDocument.load(bytes, { ignoreEncryption: true });
    const pages = pdfDoc.getPages();
    const indices = this.parsePageRange(options.pageRange, pages.length);

    if (!indices.length) {
      throw new Error('No valid pages matched the selected page range.');
    }

    const signatureImage = options.signatureType === 'png'
      ? await pdfDoc.embedPng(options.signatureBytes)
      : await pdfDoc.embedJpg(options.signatureBytes);

    const labelFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const dateFont = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

    for (const pageIndex of indices) {
      const page = pages[pageIndex];
      const { width, height } = page.getSize();
      const signatureWidth = width * (options.widthPercent / 100);
      const signatureHeight = signatureWidth * (signatureImage.height / signatureImage.width);
      const { x, y } = this.resolvePosition(page.getSize(), signatureWidth, signatureHeight, options.position);

      page.drawImage(signatureImage, {
        x,
        y,
        width: signatureWidth,
        height: signatureHeight,
        opacity: 0.98,
      });

      const caption = options.label?.trim() || 'Signed';
      const textY = Math.max(4, y - 12);
      page.drawText(caption, {
        x,
        y: textY,
        size: 8.5,
        font: labelFont,
        color: rgb(0.25, 0.25, 0.25),
        opacity: 0.9,
      });

      if (options.includeDate) {
        const dateText = options.dateText?.trim() || new Date().toLocaleDateString();
        page.drawText(dateText, {
          x,
          y: Math.max(4, textY - 10),
          size: 7.5,
          font: dateFont,
          color: rgb(0.35, 0.35, 0.35),
          opacity: 0.9,
        });
      }
    }

    return pdfDoc.save();
  }

  private resolvePosition(
    pageSize: { width: number; height: number },
    boxWidth: number,
    boxHeight: number,
    position: SignaturePosition,
  ): { x: number; y: number } {
    const marginX = pageSize.width * 0.06;
    const marginY = pageSize.height * 0.06;
    const centeredX = (pageSize.width - boxWidth) / 2;
    const centeredY = (pageSize.height - boxHeight) / 2;

    switch (position) {
      case 'top-left':
        return { x: marginX, y: pageSize.height - boxHeight - marginY };
      case 'top-center':
        return { x: centeredX, y: pageSize.height - boxHeight - marginY };
      case 'top-right':
        return { x: pageSize.width - boxWidth - marginX, y: pageSize.height - boxHeight - marginY };
      case 'bottom-left':
        return { x: marginX, y: marginY };
      case 'bottom-center':
        return { x: centeredX, y: marginY };
      case 'bottom-right':
        return { x: pageSize.width - boxWidth - marginX, y: marginY };
      case 'center':
      default:
        return { x: centeredX, y: centeredY };
    }
  }
}
