import { TestBed } from '@angular/core/testing';
import { NgZone } from '@angular/core';
import { QpdfPdfService } from './qpdf-pdf.service';

describe('QpdfPdfService', () => {
  let service: QpdfPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QpdfPdfService, NgZone],
    });
    service = TestBed.inject(QpdfPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
