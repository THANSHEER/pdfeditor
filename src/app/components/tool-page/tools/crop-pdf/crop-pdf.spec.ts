import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CropPdfComponent } from './crop-pdf';

describe('CropPdfComponent', () => {
  let component: CropPdfComponent;
  let fixture: ComponentFixture<CropPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropPdfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CropPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
