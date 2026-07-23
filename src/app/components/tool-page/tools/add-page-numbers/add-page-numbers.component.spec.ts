import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPageNumbersComponent } from './add-page-numbers.component';

describe('AddPageNumbersComponent', () => {
  let component: AddPageNumbersComponent;
  let fixture: ComponentFixture<AddPageNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPageNumbersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPageNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
