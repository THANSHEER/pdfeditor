import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SplitPdfComponent } from './split-pdf.component';
import { PdfService } from '../../../../services/pdf.service';

describe('SplitPdfComponent', () => {
  let component: SplitPdfComponent;
  let fixture: ComponentFixture<SplitPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitPdfComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: PdfService, useValue: jasmine.createSpyObj('PdfService', ['loadPdf', 'extractPages', 'splitPdf', 'downloadBlob']) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SplitPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
