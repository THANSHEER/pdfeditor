import { TestBed } from '@angular/core/testing';
import { FlattenPdfService } from './flatten-pdf.service';

describe('FlattenPdfService', () => {
  let service: FlattenPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlattenPdfService],
    });
    service = TestBed.inject(FlattenPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
