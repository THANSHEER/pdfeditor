import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { PdfWorkspaceComponent } from './pdf-workspace.component';
import { StorageService } from '../../services/storage.service';
import { PdfService } from '../../services/pdf.service';
import { RemovePagesService } from '../../services/tools/remove-pages.service';
import { OrganizePdfService } from '../../services/tools/organize-pdf.service';
import { RotatePdfService } from '../../services/tools/rotate-pdf.service';
import { ExtractPagesService } from '../../services/tools/extract-pages.service';

describe('PdfWorkspaceComponent', () => {
  let component: PdfWorkspaceComponent;
  let fixture: ComponentFixture<PdfWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfWorkspaceComponent, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: StorageService, useValue: jasmine.createSpyObj('StorageService', ['saveWorkingCopy', 'getWorkingCopy', 'clearWorkingCopy']) },
        { provide: PdfService, useValue: jasmine.createSpyObj('PdfService', ['loadPdf', 'downloadBlob']) },
        { provide: RemovePagesService, useValue: jasmine.createSpyObj('RemovePagesService', ['process']) },
        { provide: OrganizePdfService, useValue: jasmine.createSpyObj('OrganizePdfService', ['process']) },
        { provide: RotatePdfService, useValue: jasmine.createSpyObj('RotatePdfService', ['process']) },
        { provide: ExtractPagesService, useValue: jasmine.createSpyObj('ExtractPagesService', ['process']) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PdfWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
