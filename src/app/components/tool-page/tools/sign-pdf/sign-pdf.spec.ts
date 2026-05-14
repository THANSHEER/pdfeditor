import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignPdfComponent } from './sign-pdf';

describe('SignPdfComponent', () => {
  let component: SignPdfComponent;
  let fixture: ComponentFixture<SignPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignPdfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
