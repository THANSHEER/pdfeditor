import { TestBed } from '@angular/core/testing';
import { AddPageNumbersService } from './add-page-numbers.service';

describe('AddPageNumbersService', () => {
  let service: AddPageNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPageNumbersService],
    });
    service = TestBed.inject(AddPageNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
