import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RemovePagesComponent } from './remove-pages.component';
import { PdfService } from '../../../../services/pdf.service';

describe('RemovePagesComponent', () => {
  let component: RemovePagesComponent;
  let fixture: ComponentFixture<RemovePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemovePagesComponent, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: PdfService, useValue: jasmine.createSpyObj('PdfService', ['loadPdf', 'removePages', 'downloadBlob']) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RemovePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
