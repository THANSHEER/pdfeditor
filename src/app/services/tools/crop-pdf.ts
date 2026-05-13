import { Injectable } from '@angular/core';
import { PDFDocument, PDFPage } from 'pdf-lib';

export interface CropMargins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface CropRule {
  pageIndices: number[];
  margins: CropMargins;
}

const MM_TO_PT = 2.8346;

@Injectable({ providedIn: 'root' })
export class CropPdfService {
  async crop(file: File, margins: CropMargins): Promise<Uint8Array> {
    const bytes = new Uint8Array(await file.arrayBuffer());
    const pdfDoc = await PDFDocument.load(bytes, { ignoreEncryption: true });
    for (const page of pdfDoc.getPages()) this.applyCrop(page, margins);
    return pdfDoc.save();
  }

  async cropWithRules(file: File, rules: CropRule[]): Promise<Uint8Array> {
    const bytes = new Uint8Array(await file.arrayBuffer());
    const pdfDoc = await PDFDocument.load(bytes, { ignoreEncryption: true });
    const pages = pdfDoc.getPages();
    for (const rule of rules) {
      for (const idx of rule.pageIndices) {
        if (idx >= 0 && idx < pages.length) this.applyCrop(pages[idx], rule.margins);
      }
    }
    return pdfDoc.save();
  }

  async getPageCount(file: File): Promise<number> {
    const bytes = new Uint8Array(await file.arrayBuffer());
    const doc = await PDFDocument.load(bytes, { ignoreEncryption: true });
    return doc.getPageCount();
  }

  parsePageRange(rangeStr: string, totalPages: number): number[] {
    const s = rangeStr.trim().toLowerCase();
    if (!s || s === 'all') return Array.from({ length: totalPages }, (_, i) => i);
    const set = new Set<number>();
    for (const part of s.split(',')) {
      const p = part.trim();
      if (p.includes('-')) {
        const [a, b] = p.split('-').map(x => parseInt(x.trim(), 10));
        if (!isNaN(a) && !isNaN(b)) {
          for (let i = Math.max(1, a); i <= Math.min(b, totalPages); i++) set.add(i - 1);
        }
      } else {
        const n = parseInt(p, 10);
        if (!isNaN(n) && n >= 1 && n <= totalPages) set.add(n - 1);
      }
    }
    return Array.from(set).sort((a, b) => a - b);
  }

  private applyCrop(page: PDFPage, m: CropMargins) {
    const { width, height } = page.getSize();
    const t = m.top * MM_TO_PT, r = m.right * MM_TO_PT;
    const b = m.bottom * MM_TO_PT, l = m.left * MM_TO_PT;
    page.setCropBox(l, b, Math.max(10, width - l - r), Math.max(10, height - t - b));
  }
}
