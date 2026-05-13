import { Injectable } from '@angular/core';
import { PDFDocument } from 'pdf-lib';

export interface FlattenResult {
  bytes: Uint8Array;
  fieldCount: number;
}

@Injectable({ providedIn: 'root' })
export class FlattenPdfService {
  async flatten(file: File): Promise<FlattenResult> {
    const pdfBytes = await file.arrayBuffer();

    const pdfDoc = await PDFDocument.load(pdfBytes, {
      ignoreEncryption: true,
      throwOnInvalidObject: false,
      updateMetadata: false,
    });

    const form = pdfDoc.getForm();
    const fields = form.getFields();
    const fieldCount = fields.length;

    if (fieldCount > 0) {
      form.flatten();
    }

    const bytes = await pdfDoc.save({ useObjectStreams: true });

    return { bytes, fieldCount };
  }
}
