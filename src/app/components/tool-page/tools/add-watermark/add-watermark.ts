import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolPageComponent, DownloadFile } from '../../tool-page';
import {
  AddWatermarkService,
  WatermarkOptions,
  WatermarkCoverage,
} from '../../../../services/tools/add-watermark';

@Component({
  selector: 'app-add-watermark',
  standalone: true,
  imports: [CommonModule, FormsModule, ToolPageComponent],
  templateUrl: './add-watermark.html',
  styleUrl: './add-watermark.css',
})
export class AddWatermarkComponent {
  files: File[] = [];
  downloads: DownloadFile[] = [];
  isProcessing = false;
  errorMessage = '';

  readonly Math = Math;

  // — Type toggle
  watermarkType: 'text' | 'image' = 'text';

  // — Text options
  text = 'CONFIDENTIAL';
  fontSize = 52;
  opacity = 0.25;
  color = '#6b7280';
  rotation = 45;

  // — Image options
  imageFile: File | null = null;
  imageBytes: Uint8Array | null = null;
  imageType: 'png' | 'jpeg' = 'png';
  imagePreviewUrl: string | null = null;
  imageSize = 30;

  // — Coverage (shared)
  coverage: WatermarkCoverage = 'center';

  readonly coverageOptions: { id: WatermarkCoverage; label: string; row: number; col: number }[] = [
    { id: 'top-left',      label: 'TL', row: 0, col: 0 },
    { id: 'top-center',    label: 'TC', row: 0, col: 1 },
    { id: 'top-right',     label: 'TR', row: 0, col: 2 },
    { id: 'center',        label: 'C',  row: 1, col: 1 },
    { id: 'bottom-left',   label: 'BL', row: 2, col: 0 },
    { id: 'bottom-center', label: 'BC', row: 2, col: 1 },
    { id: 'bottom-right',  label: 'BR', row: 2, col: 2 },
  ];

  constructor(
    private readonly service: AddWatermarkService,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  onFilesChanged(files: File[]) {
    this.files = files;
    this.errorMessage = '';
    this.downloads = [];
  }

  async onImagePicked(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (!file.type.match(/image\/(png|jpe?g)/)) {
      this.errorMessage = 'Please pick a PNG or JPEG image for the watermark.';
      return;
    }
    this.imageFile = file;
    this.imageType = file.type === 'image/png' ? 'png' : 'jpeg';
    this.imageBytes = new Uint8Array(await file.arrayBuffer());
    if (this.imagePreviewUrl) URL.revokeObjectURL(this.imagePreviewUrl);
    this.imagePreviewUrl = URL.createObjectURL(file);
    this.cdr.detectChanges();
  }

  async onProcess() {
    if (!this.files.length) {
      this.errorMessage = 'Please select a PDF file.';
      return;
    }
    if (this.watermarkType === 'text' && !this.text.trim()) {
      this.errorMessage = 'Please enter watermark text.';
      return;
    }
    if (this.watermarkType === 'image' && !this.imageBytes) {
      this.errorMessage = 'Please upload an image to use as the watermark.';
      return;
    }

    this.isProcessing = true;
    this.errorMessage = '';

    try {
      let options: WatermarkOptions;
      if (this.watermarkType === 'text') {
        options = {
          type: 'text',
          text: this.text.trim(),
          fontSize: this.fontSize,
          opacity: this.opacity,
          color: this.color,
          rotation: this.rotation,
          coverage: this.coverage,
        };
      } else {
        options = {
          type: 'image',
          imageBytes: this.imageBytes!,
          imageType: this.imageType,
          sizePercent: this.imageSize,
          opacity: this.opacity,
          rotation: this.rotation,
          coverage: this.coverage,
        };
      }

      const bytes = await this.service.addWatermark(this.files[0], options);
      const blob = new Blob([bytes as unknown as BlobPart], { type: 'application/pdf' });
      const name = this.files[0].name.replace(/\.pdf$/i, '') + '-watermarked.pdf';
      this.downloads = [{ name, blob }];
    } catch (err: unknown) {
      this.errorMessage = err instanceof Error ? err.message : 'Failed to add watermark.';
    } finally {
      this.isProcessing = false;
    }
  }
}
