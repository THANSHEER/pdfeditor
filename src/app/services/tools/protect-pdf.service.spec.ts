import { TestBed } from '@angular/core/testing';

import { ProtectPdfService } from './protect-pdf.service';

describe('ProtectPdfService', () => {
  let service: ProtectPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtectPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
