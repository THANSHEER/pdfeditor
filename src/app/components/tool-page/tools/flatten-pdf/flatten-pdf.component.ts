import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolPageComponent, DownloadFile } from '../../tool-page';
import { FlattenPdfService } from '../../../../services/tools/flatten-pdf.service';

@Component({
  selector: 'app-flatten-pdf',
  standalone: true,
  imports: [CommonModule, FormsModule, ToolPageComponent],
  templateUrl: './flatten-pdf.component.html',
  styleUrl: './flatten-pdf.component.scss',
})
export class FlattenPdfComponent {
  files: File[] = [];
  downloads: DownloadFile[] = [];
  isProcessing = false;
  errorMessage = '';
  customFileName = '';
  flattenedFieldCount: number | null = null;

  constructor(private readonly flattenService: FlattenPdfService) {}

  onFilesChanged(files: File[]) {
    this.files = files;
    this.errorMessage = '';
    this.downloads = [];
    this.flattenedFieldCount = null;
  }

  async onProcess() {
    if (this.files.length === 0) {
      this.errorMessage = 'Please select a PDF file to flatten.';
      return;
    }

    this.isProcessing = true;
    this.errorMessage = '';
    this.flattenedFieldCount = null;

    try {
      const { bytes, fieldCount } = await this.flattenService.flatten(this.files[0]);
      const blob = new Blob([bytes as unknown as BlobPart], { type: 'application/pdf' });

      let finalName = this.customFileName.trim() || this.files[0].name.replace(/\.pdf$/i, '') + '-flattened.pdf';
      if (!finalName.toLowerCase().endsWith('.pdf')) {
        finalName += '.pdf';
      }

      this.flattenedFieldCount = fieldCount;
      this.downloads = [{ name: finalName, blob }];
    } catch (error: unknown) {
      this.errorMessage = error instanceof Error ? error.message : 'An error occurred while flattening the PDF.';
      console.error(error);
    } finally {
      this.isProcessing = false;
    }
  }
}
