import { TestBed } from '@angular/core/testing';

import { UnlockPdfService } from './unlock-pdf';

describe('UnlockPdfService', () => {
  let service: UnlockPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnlockPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
