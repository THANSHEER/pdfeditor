import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RotatePdfComponent } from './rotate-pdf.component';
import { PdfService } from '../../../../services/pdf.service';

describe('RotatePdfComponent', () => {
  let component: RotatePdfComponent;
  let fixture: ComponentFixture<RotatePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotatePdfComponent, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: PdfService, useValue: jasmine.createSpyObj('PdfService', ['loadPdf', 'rotatePages', 'downloadBlob']) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RotatePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
