import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlattenPdfComponent } from './flatten-pdf';

describe('FlattenPdfComponent', () => {
  let component: FlattenPdfComponent;
  let fixture: ComponentFixture<FlattenPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlattenPdfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlattenPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
