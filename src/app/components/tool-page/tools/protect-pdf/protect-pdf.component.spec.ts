import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectPdfComponent } from './protect-pdf.component';

describe('ProtectPdfComponent', () => {
  let component: ProtectPdfComponent;
  let fixture: ComponentFixture<ProtectPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
