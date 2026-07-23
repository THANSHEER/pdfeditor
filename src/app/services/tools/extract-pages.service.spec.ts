import { TestBed } from '@angular/core/testing';
import { ExtractPagesService } from './extract-pages.service';
import { PdfService } from '../pdf.service';

describe('ExtractPagesService', () => {
  let service: ExtractPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExtractPagesService,
        { provide: PdfService, useValue: jasmine.createSpyObj('PdfService', ['extractPages', 'loadPdf', 'downloadBlob']) },
      ],
    });
    service = TestBed.inject(ExtractPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
