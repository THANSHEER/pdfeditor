import { TestBed } from '@angular/core/testing';
import { CompressPdfService } from './compress-pdf.service';
import { QpdfPdfService } from './qpdf-pdf.service';

describe('CompressPdfService', () => {
  let service: CompressPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CompressPdfService,
        { provide: QpdfPdfService, useValue: jasmine.createSpyObj('QpdfPdfService', ['compressPdf', 'encryptPdf', 'decryptPdf']) },
      ],
    });
    service = TestBed.inject(CompressPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
