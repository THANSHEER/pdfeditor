import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolPageComponent, DownloadFile } from '../../tool-page.component';
import { RedactPdfService, RedactionBox, RedactOptions } from '../../../../services/tools/redact-pdf.service';

interface RedactionRule extends RedactionBox {
  id: number;
}

@Component({
  selector: 'app-redact-pdf',
  standalone: true,
  imports: [CommonModule, FormsModule, ToolPageComponent],
  templateUrl: './redact-pdf.component.html',
  styleUrl: './redact-pdf.component.scss',
})
export class RedactPdfComponent {
  files: File[] = [];
  downloads: DownloadFile[] = [];
  isProcessing = false;
  errorMessage = '';
  outputFileName = '';
  renderScale = 1.6;

  readonly qualityOptions = [
    { value: 1.2, label: 'Fast' },
    { value: 1.6, label: 'Balanced' },
    { value: 2.0, label: 'High' },
  ] as const;

  redactionRules: RedactionRule[] = [
    { id: 0, pageRange: 'all', x: 10, y: 20, width: 40, height: 10 },
  ];

  private nextId = 1;

  constructor(private readonly redactService: RedactPdfService) {}

  onFilesChanged(files: File[]) {
    this.files = files;
    this.errorMessage = '';
    this.downloads = [];
  }

  addRule() {
    this.redactionRules.push({
      id: this.nextId++,
      pageRange: 'all',
      x: 10,
      y: 20,
      width: 40,
      height: 10,
    });
  }

  removeRule(index: number) {
    if (this.redactionRules.length === 1) return;
    this.redactionRules.splice(index, 1);
  }

  async onProcess() {
    if (!this.files.length) {
      this.errorMessage = 'Please select a PDF file to redact.';
      return;
    }

    const normalizedRules = this.redactionRules.map(rule => ({
      pageRange: rule.pageRange.trim() || 'all',
      x: this.clamp(rule.x, 0, 100),
      y: this.clamp(rule.y, 0, 100),
      width: this.clamp(rule.width, 1, 100),
      height: this.clamp(rule.height, 1, 100),
    }));

    if (!normalizedRules.length) {
      this.errorMessage = 'Add at least one redaction area.';
      return;
    }

    this.isProcessing = true;
    this.errorMessage = '';

    try {
      const options: RedactOptions = {
        renderScale: this.renderScale,
        boxes: normalizedRules,
      };
      const bytes = await this.redactService.redact(this.files[0], options);
      const blob = new Blob([bytes as unknown as BlobPart], { type: 'application/pdf' });
      const filename = this.resolveOutputName();
      this.downloads = [{ name: filename, blob }];
    } catch (error: unknown) {
      this.errorMessage = error instanceof Error ? error.message : 'Failed to redact the PDF.';
    } finally {
      this.isProcessing = false;
    }
  }

  private resolveOutputName(): string {
    const base = this.outputFileName.trim() || this.files[0].name.replace(/\.pdf$/i, '') + '-redacted.pdf';
    return base.toLowerCase().endsWith('.pdf') ? base : `${base}.pdf`;
  }

  private clamp(value: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
  }
}
