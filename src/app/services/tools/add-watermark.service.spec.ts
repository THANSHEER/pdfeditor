import { TestBed } from '@angular/core/testing';
import { AddWatermarkService } from './add-watermark.service';

describe('AddWatermarkService', () => {
  let service: AddWatermarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddWatermarkService],
    });
    service = TestBed.inject(AddWatermarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
