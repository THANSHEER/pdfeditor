import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToolPageComponent, DownloadFile } from '../../tool-page.component';
import { CompressPdfService, CompressionMode } from '../../../../services/tools/compress-pdf.service';

interface CompressionPreset {
  value: CompressionMode;
  label: string;
  description: string;
}

@Component({
  selector: 'app-compress-pdf',
  standalone: true,
  imports: [CommonModule, FormsModule, ToolPageComponent],
  templateUrl: './compress-pdf.component.html',
  styleUrls: ['./compress-pdf.component.css'],
})
export class CompressPdfComponent {
  files: File[] = [];
  downloads: DownloadFile[] = [];
  isProcessing = false;
  errorMessage = '';

  compressionMode: CompressionMode = 'lossless';
  customFileName = '';
  readonly compressionPresets: CompressionPreset[] = [
    {
      value: 'lossless',
      label: 'Lossless',
      description: 'Safest structural reduction with the least change to the original PDF.',
    },
    {
      value: 'balanced',
      label: 'Balanced',
      description: 'Rebuilds the file to remove extra baggage while preserving metadata.',
    },
    {
      value: 'aggressive',
      label: 'Aggressive',
      description: 'Rebuilds the file with a smaller output focus and minimal metadata retention.',
    },
  ];

  constructor(private readonly compressService: CompressPdfService) {}

  onFilesChanged(files: File[]) {
    this.files = files;
    this.errorMessage = '';
    this.downloads = [];
  }

  async onProcess() {
    if (this.files.length === 0) {
      this.errorMessage = 'Please select a PDF file to compress.';
      return;
    }

    this.isProcessing = true;
    this.errorMessage = '';

    try {
      const compressedBytes = await this.compressService.compress(this.files[0], this.compressionMode);
      const blob = new Blob([compressedBytes as unknown as BlobPart], { type: 'application/pdf' });
      const outputName = this.customFileName.trim() || this.files[0].name.replace(/\.pdf$/i, '-compressed.pdf');
      const finalName = outputName.toLowerCase().endsWith('.pdf') ? outputName : `${outputName}.pdf`;

      this.downloads = [{ name: finalName, blob }];
    } catch (error: unknown) {
      this.errorMessage = error instanceof Error ? error.message : 'An error occurred while compressing the PDF.';
      console.error(error);
    } finally {
      this.isProcessing = false;
    }
  }
}