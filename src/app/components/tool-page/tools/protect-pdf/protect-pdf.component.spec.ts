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

  it('should require matching passwords before processing', async () => {
    component.files = [new File(['pdf'], 'sample.pdf', { type: 'application/pdf' })];
    component.password = 'secret-123';
    component.confirmPassword = 'different-123';

    await component.onProcess();

    expect(component.errorMessage).toContain('Passwords do not match');
    expect(component.isProcessing).toBeFalse();
    expect(component.downloads).toHaveLength(0);
  });

  it('should toggle password visibility', () => {
    expect(component.showPassword).toBeFalse();
    component.togglePasswordVisibility();
    expect(component.showPassword).toBeTrue();
  });

  it('should toggle confirm password visibility', () => {
    expect(component.showConfirmPassword).toBeFalse();
    component.toggleConfirmPasswordVisibility();
    expect(component.showConfirmPassword).toBeTrue();
  });
});
