import { Injectable, inject } from '@angular/core';
import { PDFDocument, ParseSpeeds } from 'pdf-lib-plus-encrypt';
import { QpdfPdfService } from './qpdf-pdf';

export type CompressionMode = 'lossless' | 'balanced' | 'aggressive';

@Injectable({ providedIn: 'root' })
export class CompressPdfService {
  private readonly qpdfService = inject(QpdfPdfService);

  async compress(file: File, mode: CompressionMode = 'lossless'): Promise<Uint8Array> {
    if (mode === 'aggressive') {
      try {
        return await this.qpdfService.compressPdf(file);
      } catch (error) {
        console.error('qpdf compression failed, falling back to pdf-lib:', error);
      }
    }

    const pdfBytes = await file.arrayBuffer();
    const sourceDoc = await PDFDocument.load(pdfBytes, {
      ignoreEncryption: true,
      parseSpeed: ParseSpeeds.Fastest,
      throwOnInvalidObject: false,
      updateMetadata: false,
      capNumbers: true,
    });

    if (mode === 'lossless') {
      return sourceDoc.save({
        useObjectStreams: true,
        updateFieldAppearances: false,
      });
    }

    const optimizedDoc = await PDFDocument.create();
    const copiedPages = await optimizedDoc.copyPages(sourceDoc, sourceDoc.getPageIndices());

    copiedPages.forEach((page) => optimizedDoc.addPage(page));

    if (mode === 'balanced') {
      this.copyMetadata(sourceDoc, optimizedDoc);
    }

    return optimizedDoc.save({
      useObjectStreams: true,
      updateFieldAppearances: false,
    });
  }

  private copyMetadata(sourceDoc: PDFDocument, targetDoc: PDFDocument) {
    const title = sourceDoc.getTitle();
    const author = sourceDoc.getAuthor();
    const subject = sourceDoc.getSubject();
    const keywords = sourceDoc.getKeywords();
    const creator = sourceDoc.getCreator();
    const producer = sourceDoc.getProducer();

    if (title) {
      targetDoc.setTitle(title);
    }
    if (author) {
      targetDoc.setAuthor(author);
    }
    if (subject) {
      targetDoc.setSubject(subject);
    }
    if (keywords) {
      targetDoc.setKeywords(keywords.split(',').map((value) => value.trim()).filter(Boolean));
    }
    if (creator) {
      targetDoc.setCreator(creator);
    }
    if (producer) {
      targetDoc.setProducer(producer);
    }
  }
}