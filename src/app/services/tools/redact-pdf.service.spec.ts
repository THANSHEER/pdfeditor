import { TestBed } from '@angular/core/testing';
import { RedactPdfService } from './redact-pdf.service';

describe('RedactPdfService', () => {
  let service: RedactPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedactPdfService],
    });
    service = TestBed.inject(RedactPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
