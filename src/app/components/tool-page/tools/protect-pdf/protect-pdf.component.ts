import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolPageComponent, DownloadFile } from '../../tool-page';
import { ProtectPdfService } from '../../../../services/tools/protect-pdf.service';

@Component({
  selector: 'app-protect-pdf',
  standalone: true,
  imports: [CommonModule, FormsModule, ToolPageComponent],
  templateUrl: './protect-pdf.component.html',
  styleUrl: './protect-pdf.component.scss',
})
export class ProtectPdfComponent {
  files: File[] = [];
  downloads: DownloadFile[] = [];
  isProcessing = false;
  errorMessage = '';

  password = '';
  confirmPassword = '';
  customFileName = '';
  showPassword = false;
  showConfirmPassword = false;

  constructor(private readonly protectService: ProtectPdfService) {}

  onFilesChanged(files: File[]) {
    this.files = files;
    this.errorMessage = '';
    this.downloads = [];
    this.confirmPassword = '';
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  async onProcess() {
    if (this.files.length === 0) {
      this.errorMessage = 'Please select a PDF file to protect.';
      return;
    }

    if (!this.password) {
      this.errorMessage = 'Please enter a password to protect the PDF.';
      return;
    }

    if (!this.confirmPassword) {
      this.errorMessage = 'Please confirm the password before protecting the PDF.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match. Please enter the same password in both fields.';
      return;
    }

    this.isProcessing = true;
    this.errorMessage = '';

    try {
      const protectedBytes = await this.protectService.protect(this.files[0], this.password);
      const blob = new Blob([new Uint8Array(protectedBytes)], { type: 'application/pdf' });
      
      let finalName = this.customFileName.trim() || this.files[0].name.replace('.pdf', '') + '-protected.pdf';
      if (!finalName.toLowerCase().endsWith('.pdf')) {
        finalName += '.pdf';
      }

      this.downloads = [{
        name: finalName,
        blob: blob
      }];
    } catch (error: unknown) {
      this.errorMessage = error instanceof Error ? error.message : 'An error occurred while protecting the PDF.';
      console.error(error);
    } finally {
      this.isProcessing = false;
    }
  }
}
