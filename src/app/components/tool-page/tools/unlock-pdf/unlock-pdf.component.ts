import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolPageComponent, DownloadFile } from '../../tool-page.component';
import { UnlockPdfService, PdfLockStatus } from '../../../../services/tools/unlock-pdf.service';

@Component({
  selector: 'app-unlock-pdf',
  standalone: true,
  imports: [CommonModule, FormsModule, ToolPageComponent],
  templateUrl: './unlock-pdf.component.html',
  styleUrl: './unlock-pdf.component.css',
})
export class UnlockPdfComponent {
  files: File[] = [];
  downloads: DownloadFile[] = [];
  isProcessing = false;
  errorMessage = '';

  password = '';
  customFileName = '';
  showPassword = false;
  lockStatus: PdfLockStatus = 'unknown';

  constructor(private readonly unlockService: UnlockPdfService) {}

  async onFilesChanged(files: File[]) {
    this.files = files;
    this.errorMessage = '';
    this.downloads = [];
    this.password = '';
    this.lockStatus = 'unknown';

    if (files.length > 0) {
      this.lockStatus = 'checking';
      this.lockStatus = await this.unlockService.detectLockStatus(files[0]);
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async onProcess() {
    if (this.files.length === 0) {
      this.errorMessage = 'Please select a protected PDF file to unlock.';
      return;
    }

    if (!this.password) {
      this.errorMessage = 'Please enter the password to unlock this PDF.';
      return;
    }

    this.isProcessing = true;
    this.errorMessage = '';

    try {
      const unlockedBytes = await this.unlockService.unlock(this.files[0], this.password);
      const blob = new Blob([unlockedBytes as unknown as BlobPart], { type: 'application/pdf' });

      let finalName = this.customFileName.trim() || this.files[0].name.replace(/\.pdf$/i, '') + '-unlocked.pdf';
      if (!finalName.toLowerCase().endsWith('.pdf')) {
        finalName += '.pdf';
      }

      this.downloads = [{ name: finalName, blob }];
    } catch (error: unknown) {
      this.errorMessage = error instanceof Error
        ? error.message
        : 'An error occurred while unlocking the PDF.';
      console.error(error);
    } finally {
      this.isProcessing = false;
    }
  }
}
