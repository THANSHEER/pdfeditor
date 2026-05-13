import { Injectable } from '@angular/core';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export type PageNumberPosition =
  | 'bottom-center' | 'bottom-left' | 'bottom-right'
  | 'top-center'    | 'top-left'    | 'top-right';

export interface PageNumberOptions {
  position: PageNumberPosition;
  startNumber: number;
  prefix: string;
  suffix: string;
  fontSize: number;
  marginPt: number;
}

@Injectable({ providedIn: 'root' })
export class AddPageNumbersService {
  async addPageNumbers(file: File, options: PageNumberOptions): Promise<Uint8Array> {
    const pdfBytes = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const pages = pdfDoc.getPages();

    pages.forEach((page, idx) => {
      const { width, height } = page.getSize();
      const label = `${options.prefix}${idx + options.startNumber}${options.suffix}`;
      const textWidth = font.widthOfTextAtSize(label, options.fontSize);
      const textHeight = font.heightAtSize(options.fontSize);

      const pos = options.position;
      let x: number;
      let y: number;

      if (pos.endsWith('left'))       x = options.marginPt;
      else if (pos.endsWith('right')) x = width - textWidth - options.marginPt;
      else                            x = (width - textWidth) / 2;

      if (pos.startsWith('top'))      y = height - options.marginPt - textHeight;
      else                            y = options.marginPt;

      page.drawText(label, {
        x,
        y,
        size: options.fontSize,
        font,
        color: rgb(0.15, 0.15, 0.15),
        opacity: 0.75,
      });
    });

    return pdfDoc.save();
  }
}
