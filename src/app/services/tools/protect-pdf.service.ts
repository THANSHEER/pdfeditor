import { Injectable } from '@angular/core';
import { PDFDocument } from 'pdf-lib-plus-encrypt';

@Injectable({
  providedIn: 'root',
})
export class ProtectPdfService {
  async protect(file: File, password: string): Promise<Uint8Array> {
    const pdfBytes = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const ownerPassword = this.createOwnerPassword();

    await pdfDoc.encrypt({
      userPassword: password,
      ownerPassword,
      permissions: {
        printing: 'highResolution',
        modifying: false,
        copying: false,
        annotating: false,
        fillingForms: false,
        contentAccessibility: true,
        documentAssembly: false,
      },
    });

    return pdfDoc.save();
  }

  private createOwnerPassword(): string {
    const entropy = new Uint8Array(16);
    globalThis.crypto.getRandomValues(entropy);

    return Array.from(entropy, (value) => value.toString(16).padStart(2, '0')).join('');
  }
}
