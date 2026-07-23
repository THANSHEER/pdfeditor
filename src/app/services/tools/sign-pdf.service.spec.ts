import { TestBed } from '@angular/core/testing';
import { SignPdfService } from './sign-pdf.service';

describe('SignPdfService', () => {
  let service: SignPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignPdfService],
    });
    service = TestBed.inject(SignPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
