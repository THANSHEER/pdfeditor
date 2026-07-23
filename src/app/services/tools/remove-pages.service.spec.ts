import { TestBed } from '@angular/core/testing';
import { RemovePagesService } from './remove-pages.service';
import { PdfService } from '../pdf.service';

describe('RemovePagesService', () => {
  let service: RemovePagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RemovePagesService,
        { provide: PdfService, useValue: jasmine.createSpyObj('PdfService', ['removePages', 'loadPdf', 'downloadBlob']) },
      ],
    });
    service = TestBed.inject(RemovePagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
