import { TestBed } from '@angular/core/testing';
import { OrganizePdfService } from './organize-pdf.service';
import { PdfService } from '../pdf.service';

describe('OrganizePdfService', () => {
  let service: OrganizePdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrganizePdfService,
        { provide: PdfService, useValue: jasmine.createSpyObj('PdfService', ['reorderPages', 'loadPdf', 'downloadBlob']) },
      ],
    });
    service = TestBed.inject(OrganizePdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
