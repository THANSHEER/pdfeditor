import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedactPdfComponent } from './redact-pdf.component';

describe('RedactPdfComponent', () => {
  let component: RedactPdfComponent;
  let fixture: ComponentFixture<RedactPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedactPdfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RedactPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
