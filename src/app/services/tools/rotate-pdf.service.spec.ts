import { TestBed } from '@angular/core/testing';
import { RotatePdfService } from './rotate-pdf.service';
import { PdfService } from '../pdf.service';

describe('RotatePdfService', () => {
  let service: RotatePdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RotatePdfService,
        { provide: PdfService, useValue: jasmine.createSpyObj('PdfService', ['rotatePages', 'loadPdf', 'downloadBlob']) },
      ],
    });
    service = TestBed.inject(RotatePdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
