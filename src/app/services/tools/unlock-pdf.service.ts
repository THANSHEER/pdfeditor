import { Injectable } from '@angular/core';
import { PDFDocument } from 'pdf-lib-plus-encrypt';

@Injectable({
  providedIn: 'root',
})
export class UnlockPdfService {
  /**
   * Unlocks a password-protected PDF file.
   * 
   * @param file The PDF File object to unlock.
   * @param password The current password of the PDF.
   * @returns A promise resolving to a Uint8Array containing the decrypted PDF bytes.
   */
  async unlock(file: File, password: string): Promise<Uint8Array> {
    const bytes = await file.arrayBuffer();
    // Load the PDF with the provided password
    const pdfDoc = await (PDFDocument as any).load(bytes, { password });
    
    // Saving without password options removes the protection
    return await pdfDoc.save();
  }
}
