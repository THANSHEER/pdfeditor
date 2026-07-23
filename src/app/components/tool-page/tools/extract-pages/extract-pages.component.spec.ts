import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ExtractPagesComponent } from './extract-pages.component';
import { PdfService } from '../../../../services/pdf.service';

describe('ExtractPagesComponent', () => {
  let component: ExtractPagesComponent;
  let fixture: ComponentFixture<ExtractPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtractPagesComponent, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: PdfService, useValue: jasmine.createSpyObj('PdfService', ['loadPdf', 'extractPages', 'downloadBlob']) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ExtractPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
