import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { OrganizePdfComponent } from './organize-pdf.component';
import { PdfService } from '../../../../services/pdf.service';

describe('OrganizePdfComponent', () => {
  let component: OrganizePdfComponent;
  let fixture: ComponentFixture<OrganizePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizePdfComponent, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: PdfService, useValue: jasmine.createSpyObj('PdfService', ['loadPdf', 'reorderPages', 'downloadBlob']) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
