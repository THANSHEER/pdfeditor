import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolPageComponent, DownloadFile } from '../../tool-page';
import { CropPdfService, CropMargins } from '../../../../services/tools/crop-pdf.service';

export interface CropRuleEntry {
  id: number;
  pageRange: string;
  top: number;
  right: number;
  bottom: number;
  left: number;
  linked: boolean;
}

@Component({
  selector: 'app-crop-pdf',
  standalone: true,
  imports: [CommonModule, FormsModule, ToolPageComponent],
  templateUrl: './crop-pdf.component.html',
  styleUrl: './crop-pdf.component.scss',
})
export class CropPdfComponent {
  files: File[] = [];
  downloads: DownloadFile[] = [];
  isProcessing = false;
  errorMessage = '';

  // — Crop mode
  mode: 'all' | 'rules' = 'all';

  // — All-pages margins
  top = 10; right = 10; bottom = 10; left = 10;
  linked = true;

  // — Custom rules
  rules: CropRuleEntry[] = [
    { id: 0, pageRange: '1', top: 10, right: 10, bottom: 10, left: 10, linked: true },
  ];
  activeRuleIdx = 0;
  private nextId = 1;

  // — Page count
  totalPages = 0;

  // — Preview
  previewSrc: string | null = null;
  previewIsLoading = false;
  readonly previewPixelWidth = 220;
  previewPageWidthPt = 595;
  previewPageHeightPt = 842;

  constructor(
    private readonly cropService: CropPdfService,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  // — Preview geometry getters
  get previewPixelHeight(): number {
    return Math.round(this.previewPixelWidth * this.previewPageHeightPt / this.previewPageWidthPt);
  }

  get activeM(): CropMargins {
    if (this.mode === 'all') return { top: this.top, right: this.right, bottom: this.bottom, left: this.left };
    const r = this.rules[this.activeRuleIdx] ?? this.rules[0];
    return { top: r?.top ?? 0, right: r?.right ?? 0, bottom: r?.bottom ?? 0, left: r?.left ?? 0 };
  }

  get overlayTop(): number    { return this.mmToPx(this.activeM.top); }
  get overlayBottom(): number { return this.mmToPx(this.activeM.bottom); }
  get overlayLeft(): number   { return this.mmToPx(this.activeM.left); }
  get overlayRight(): number  { return this.mmToPx(this.activeM.right); }

  private mmToPx(mm: number): number {
    return Math.round(mm * 2.8346 * (this.previewPixelWidth / this.previewPageWidthPt));
  }

  // — File handling
  async onFilesChanged(files: File[]) {
    this.files = files;
    this.errorMessage = '';
    this.downloads = [];
    this.previewSrc = null;
    this.totalPages = 0;
    if (!files.length) return;

    this.previewIsLoading = true;
    try {
      this.totalPages = await this.cropService.getPageCount(files[0]);
      await this.renderPreview(files[0]);
    } catch {
      // preview is non-critical
    } finally {
      this.previewIsLoading = false;
      this.cdr.detectChanges();
    }
  }

  private async renderPreview(file: File) {
    const pdfjs = await import('pdfjs-dist');
    pdfjs.GlobalWorkerOptions.workerSrc =
      `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;
    const bytes = new Uint8Array(await file.arrayBuffer());
    const pdf = await pdfjs.getDocument({ data: bytes }).promise;
    const page = await pdf.getPage(1);
    const vp = page.getViewport({ scale: 1 });
    this.previewPageWidthPt = vp.width;
    this.previewPageHeightPt = vp.height;
    const scale = this.previewPixelWidth / vp.width;
    const sv = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(sv.width);
    canvas.height = Math.round(sv.height);
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    await page.render({ canvasContext: ctx, viewport: sv }).promise;
    page.cleanup();
    await pdf.destroy();
    this.previewSrc = canvas.toDataURL('image/jpeg', 0.88);
  }

  // — All-pages linked edit
  onAllChange(field: 'top' | 'right' | 'bottom' | 'left') {
    if (this.linked) {
      const v = this[field];
      this.top = this.right = this.bottom = this.left = v;
    }
  }

  // — Rules management
  addRule() {
    this.rules.push({ id: this.nextId++, pageRange: '', top: 10, right: 10, bottom: 10, left: 10, linked: true });
    this.activeRuleIdx = this.rules.length - 1;
  }

  removeRule(idx: number) {
    if (this.rules.length <= 1) return;
    this.rules.splice(idx, 1);
    this.activeRuleIdx = Math.min(this.activeRuleIdx, this.rules.length - 1);
  }

  syncRule(rule: CropRuleEntry, field: 'top' | 'right' | 'bottom' | 'left') {
    if (rule.linked) rule.top = rule.right = rule.bottom = rule.left = rule[field];
    this.activeRuleIdx = this.rules.indexOf(rule);
  }

  activateRule(idx: number) {
    this.activeRuleIdx = idx;
  }

  rangeLabel(rule: CropRuleEntry): string {
    if (!rule.pageRange.trim()) return 'No pages';
    if (rule.pageRange.trim().toLowerCase() === 'all') return 'All pages';
    return `Pages ${rule.pageRange}`;
  }

  // — Process
  async onProcess() {
    if (!this.files.length) {
      this.errorMessage = 'Please select a PDF file.';
      return;
    }
    this.isProcessing = true;
    this.errorMessage = '';

    try {
      let bytes: Uint8Array;

      if (this.mode === 'all') {
        bytes = await this.cropService.crop(this.files[0], {
          top: this.top, right: this.right, bottom: this.bottom, left: this.left,
        });
      } else {
        const resolved = this.rules.map(r => ({
          pageIndices: this.cropService.parsePageRange(r.pageRange, this.totalPages),
          margins: { top: r.top, right: r.right, bottom: r.bottom, left: r.left },
        })).filter(r => r.pageIndices.length > 0);

        if (!resolved.length) {
          this.errorMessage = 'No valid page ranges. Use "all", "1-3", "1,3,5" format.';
          return;
        }
        bytes = await this.cropService.cropWithRules(this.files[0], resolved);
      }

      const blob = new Blob([bytes as unknown as BlobPart], { type: 'application/pdf' });
      const name = this.files[0].name.replace(/\.pdf$/i, '') + '-cropped.pdf';
      this.downloads = [{ name, blob }];
    } catch (err: unknown) {
      this.errorMessage = err instanceof Error ? err.message : 'Failed to crop the PDF.';
    } finally {
      this.isProcessing = false;
    }
  }
}
