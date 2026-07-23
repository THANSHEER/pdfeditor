import { TestBed } from '@angular/core/testing';
import { CropPdfService } from './crop-pdf.service';

describe('CropPdfService', () => {
  let service: CropPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CropPdfService],
    });
    service = TestBed.inject(CropPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
