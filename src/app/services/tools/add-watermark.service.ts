import { Injectable } from '@angular/core';
import { PDFDocument, PDFPage, StandardFonts, degrees, rgb } from 'pdf-lib';

export type WatermarkType = 'text' | 'image';
export type WatermarkCoverage =
  | 'center' | 'tiled'
  | 'top-left' | 'top-center' | 'top-right'
  | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface TextWatermarkOptions {
  type: 'text';
  text: string;
  fontSize: number;
  opacity: number;
  color: string;
  rotation: number;
  coverage: WatermarkCoverage;
}

export interface ImageWatermarkOptions {
  type: 'image';
  imageBytes: Uint8Array;
  imageType: 'png' | 'jpeg';
  sizePercent: number;
  opacity: number;
  rotation: number;
  coverage: WatermarkCoverage;
}

export type WatermarkOptions = TextWatermarkOptions | ImageWatermarkOptions;

const EDGE_PT = 20;

@Injectable({ providedIn: 'root' })
export class AddWatermarkService {
  async addWatermark(file: File, options: WatermarkOptions): Promise<Uint8Array> {
    const pdfBytes = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });

    if (options.type === 'text') {
      await this.applyText(pdfDoc, options);
    } else {
      await this.applyImage(pdfDoc, options);
    }

    return pdfDoc.save();
  }

  private async applyText(pdfDoc: PDFDocument, opts: TextWatermarkOptions) {
    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const c = this.hexToRgb(opts.color);

    for (const page of pdfDoc.getPages()) {
      const { width, height } = page.getSize();
      const tw = font.widthOfTextAtSize(opts.text, opts.fontSize);
      const th = font.heightAtSize(opts.fontSize);

      for (const p of this.placements(opts.coverage, width, height, tw, th, opts.rotation)) {
        page.drawText(opts.text, {
          x: p.x, y: p.y,
          size: opts.fontSize,
          font,
          color: rgb(c.r, c.g, c.b),
          opacity: opts.opacity,
          rotate: degrees(opts.rotation),
        });
      }
    }
  }

  private async applyImage(pdfDoc: PDFDocument, opts: ImageWatermarkOptions) {
    const img = opts.imageType === 'png'
      ? await pdfDoc.embedPng(opts.imageBytes)
      : await pdfDoc.embedJpg(opts.imageBytes);

    for (const page of pdfDoc.getPages()) {
      const { width, height } = page.getSize();
      const imgW = width * (opts.sizePercent / 100);
      const imgH = imgW * (img.height / img.width);

      for (const p of this.placements(opts.coverage, width, height, imgW, imgH, opts.rotation)) {
        page.drawImage(img, {
          x: p.x, y: p.y,
          width: imgW, height: imgH,
          opacity: opts.opacity,
          rotate: degrees(opts.rotation),
        });
      }
    }
  }

  private placements(
    coverage: WatermarkCoverage,
    pw: number, ph: number,
    iw: number, ih: number,
    rotation: number,
  ): { x: number; y: number }[] {
    if (coverage === 'tiled') {
      const rotRad = (rotation * Math.PI) / 180;
      const stepX = iw + Math.max(60, Math.abs(ih * Math.sin(rotRad)));
      const stepY = ih + Math.max(60, Math.abs(iw * Math.sin(rotRad)));
      const result: { x: number; y: number }[] = [];
      const cols = Math.ceil(pw / stepX) + 2;
      const rows = Math.ceil(ph / stepY) + 2;
      for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
          result.push({ x: c * stepX, y: r * stepY });
        }
      }
      return result;
    }

    const cx = (pw - iw) / 2;
    const cy = (ph - ih) / 2;
    const map: Record<Exclude<WatermarkCoverage, 'tiled'>, { x: number; y: number }> = {
      'center':         { x: cx,                      y: cy },
      'top-left':       { x: EDGE_PT,                  y: ph - ih - EDGE_PT },
      'top-center':     { x: cx,                       y: ph - ih - EDGE_PT },
      'top-right':      { x: pw - iw - EDGE_PT,        y: ph - ih - EDGE_PT },
      'bottom-left':    { x: EDGE_PT,                  y: EDGE_PT },
      'bottom-center':  { x: cx,                       y: EDGE_PT },
      'bottom-right':   { x: pw - iw - EDGE_PT,        y: EDGE_PT },
    };
    return [map[coverage as Exclude<WatermarkCoverage, 'tiled'>]];
  }

  private hexToRgb(hex: string): { r: number; g: number; b: number } {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!m) return { r: 0.6, g: 0.6, b: 0.6 };
    return { r: parseInt(m[1], 16) / 255, g: parseInt(m[2], 16) / 255, b: parseInt(m[3], 16) / 255 };
  }
}
