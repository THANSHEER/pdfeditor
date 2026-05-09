import { Injectable } from '@angular/core';
import { PDFDocument } from 'pdf-lib-plus-encrypt';

@Injectable({
  providedIn: 'root',
})
export class ProtectPdfService {
  /**
   * Protects a PDF file with a password.
   * 
   * @param file The PDF File object to protect.
   * @param password The password to set.
   * @returns A promise resolving to a Uint8Array containing the encrypted PDF bytes.
   */
  async protect(file: File, password: string): Promise<Uint8Array> {
    const bytes = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(bytes);
    
    const encryptedBytes = await (pdfDoc as any).save({
      userPassword: password,
      ownerPassword: password,
      permissions: {
        printing: 'highResolution',
        modifying: true,
        copying: true,
        annotating: true,
        fillingForms: true,
        contentAccessibility: true,
        documentAssembly: true,
      },
    });

    return encryptedBytes;
  }
}
