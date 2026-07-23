import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PdfPageGalleryComponent } from './pdf-page-gallery.component';

describe('PdfPageGalleryComponent', () => {
  let component: PdfPageGalleryComponent;
  let fixture: ComponentFixture<PdfPageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfPageGalleryComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PdfPageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
