import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolPageComponent, DownloadFile } from '../../tool-page.component';
import { UnlockPdfService } from '../../../../services/tools/unlock-pdf.service';

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

  constructor(private unlockService: UnlockPdfService) {}

  onFilesChanged(files: File[]) {
    this.files = files;
    this.errorMessage = '';
    this.downloads = [];
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
      const blob = new Blob([new Uint8Array(unlockedBytes)], { type: 'application/pdf' });
      
      let finalName = this.customFileName.trim() || this.files[0].name.replace('.pdf', '') + '-unlocked.pdf';
      if (!finalName.toLowerCase().endsWith('.pdf')) {
        finalName += '.pdf';
      }

      this.downloads = [{
        name: finalName,
        blob: blob
      }];
    } catch (error: any) {
      if (error.message.includes('Password') || error.message.includes('password')) {
        this.errorMessage = 'Incorrect password. Please try again.';
      } else {
        this.errorMessage = error.message || 'An error occurred while unlocking the PDF.';
      }
      console.error(error);
    } finally {
      this.isProcessing = false;
    }
  }
}
