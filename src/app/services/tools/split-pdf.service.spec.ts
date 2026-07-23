import { TestBed } from '@angular/core/testing';
import { SplitPdfService } from './split-pdf.service';
import { PdfService } from '../pdf.service';

describe('SplitPdfService', () => {
  let service: SplitPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SplitPdfService,
        { provide: PdfService, useValue: jasmine.createSpyObj('PdfService', ['splitPdf', 'loadPdf', 'downloadBlob']) },
      ],
    });
    service = TestBed.inject(SplitPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
