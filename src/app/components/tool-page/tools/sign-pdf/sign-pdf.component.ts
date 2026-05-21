import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolPageComponent, DownloadFile } from '../../tool-page';
import { SignPdfService, SignaturePosition, SignOptions } from '../../../../services/tools/sign-pdf.service';

type SignatureMode = 'draw' | 'type';

@Component({
  selector: 'app-sign-pdf',
  standalone: true,
  imports: [CommonModule, FormsModule, ToolPageComponent],
  templateUrl: './sign-pdf.component.html',
  styleUrl: './sign-pdf.component.scss',
})
export class SignPdfComponent implements AfterViewInit {
  @ViewChild('signatureCanvas') signatureCanvas?: ElementRef<HTMLCanvasElement>;

  files: File[] = [];
  downloads: DownloadFile[] = [];
  isProcessing = false;
  errorMessage = '';
  outputFileName = '';

  signatureMode: SignatureMode = 'draw';
  typedSignature = 'Alex Morgan';
  signatureLabel = 'Signed by';
  includeDate = true;
  customDate = '';
  pageRange = 'all';
  position: SignaturePosition = 'bottom-right';
  widthPercent = 24;

  drawing = false;
  hasInk = false;
  private lastPoint: { x: number; y: number } | null = null;
  signaturePreviewUrl = '';
  typedPreviewUrl = '';

  readonly positions: { id: SignaturePosition; label: string }[] = [
    { id: 'top-left', label: 'Top Left' },
    { id: 'top-center', label: 'Top Center' },
    { id: 'top-right', label: 'Top Right' },
    { id: 'center', label: 'Center' },
    { id: 'bottom-left', label: 'Bottom Left' },
    { id: 'bottom-center', label: 'Bottom Center' },
    { id: 'bottom-right', label: 'Bottom Right' },
  ];

  constructor(private readonly signService: SignPdfService) {}

  ngAfterViewInit() {
    this.clearSignaturePad(false);
    this.renderTypedPreview();
  }

  onFilesChanged(files: File[]) {
    this.files = files;
    this.errorMessage = '';
    this.downloads = [];
  }

  setMode(mode: SignatureMode) {
    this.signatureMode = mode;
    this.errorMessage = '';
    if (mode === 'draw') {
      setTimeout(() => this.clearSignaturePad(false));
    } else {
      this.renderTypedPreview();
    }
  }

  onSignaturePointerDown(event: PointerEvent) {
    const canvas = this.signatureCanvas?.nativeElement;
    if (!canvas || this.signatureMode !== 'draw') return;
    canvas.setPointerCapture(event.pointerId);
    this.drawing = true;
    this.lastPoint = this.pointerPoint(canvas, event);
  }

  onSignaturePointerMove(event: PointerEvent) {
    if (!this.drawing || this.signatureMode !== 'draw') return;
    const canvas = this.signatureCanvas?.nativeElement;
    if (!canvas) return;

    const current = this.pointerPoint(canvas, event);
    if (!this.lastPoint || !current) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.strokeStyle = '#111827';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(this.lastPoint.x, this.lastPoint.y);
    ctx.lineTo(current.x, current.y);
    ctx.stroke();
    ctx.restore();

    this.lastPoint = current;
    this.hasInk = true;
  }

  onSignaturePointerUp(event: PointerEvent) {
    const canvas = this.signatureCanvas?.nativeElement;
    if (canvas) {
      canvas.releasePointerCapture(event.pointerId);
    }
    this.drawing = false;
    this.lastPoint = null;
  }

  clearSignaturePad(updatePreview = true) {
    const canvas = this.signatureCanvas?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.hasInk = false;
    if (updatePreview) {
      this.signaturePreviewUrl = canvas.toDataURL('image/png');
    }
  }

  onTypedSignatureChange() {
    this.renderTypedPreview();
  }

  async onProcess() {
    if (!this.files.length) {
      this.errorMessage = 'Please select a PDF file to sign.';
      return;
    }

    if (this.signatureMode === 'draw' && !this.hasInk) {
      this.errorMessage = 'Please draw a signature before signing the PDF.';
      return;
    }

    if (this.signatureMode === 'type' && !this.typedSignature.trim()) {
      this.errorMessage = 'Please enter a signature name before signing the PDF.';
      return;
    }

    this.isProcessing = true;
    this.errorMessage = '';

    try {
      const { bytes, type } = await this.buildSignatureAsset();
      const options: SignOptions = {
        signatureBytes: bytes,
        signatureType: type,
        pageRange: this.pageRange,
        position: this.position,
        widthPercent: this.widthPercent,
        label: this.signatureLabel,
        includeDate: this.includeDate,
        dateText: this.customDate.trim() || undefined,
      };

      const signedBytes = await this.signService.sign(this.files[0], options);
      const blob = new Blob([signedBytes as unknown as BlobPart], { type: 'application/pdf' });
      this.downloads = [{ name: this.resolveOutputName(), blob }];
    } catch (error: unknown) {
      this.errorMessage = error instanceof Error ? error.message : 'Failed to sign the PDF.';
    } finally {
      this.isProcessing = false;
    }
  }

  private resolveOutputName(): string {
    const base = this.outputFileName.trim() || this.files[0].name.replace(/\.pdf$/i, '') + '-signed.pdf';
    return base.toLowerCase().endsWith('.pdf') ? base : `${base}.pdf`;
  }

  private pointerPoint(canvas: HTMLCanvasElement, event: PointerEvent): { x: number; y: number } | null {
    const rect = canvas.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((event.clientY - rect.top) / rect.height) * canvas.height;
    return { x, y };
  }

  private async buildSignatureAsset(): Promise<{ bytes: Uint8Array; type: 'png' | 'jpeg' }> {
    if (this.signatureMode === 'draw') {
      return this.canvasToAsset();
    }

    return this.typedSignatureToAsset();
  }

  private async canvasToAsset(): Promise<{ bytes: Uint8Array; type: 'png' }> {
    const canvas = this.signatureCanvas?.nativeElement;
    if (!canvas) {
      throw new Error('Signature pad is not ready.');
    }

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        value => {
          if (value) {
            resolve(value);
          } else {
            reject(new Error('Unable to capture the drawn signature.'));
          }
        },
        'image/png',
      );
    });

    return { bytes: new Uint8Array(await blob.arrayBuffer()), type: 'png' };
  }

  private async typedSignatureToAsset(): Promise<{ bytes: Uint8Array; type: 'png' }> {
    const canvas = document.createElement('canvas');
    canvas.width = 1400;
    canvas.height = 360;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Unable to create signature preview.');
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#111827';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'italic 180px "Brush Script MT", "Segoe Script", "Snell Roundhand", cursive';
    ctx.fillText(this.typedSignature.trim(), canvas.width / 2, canvas.height / 2 - 12);
    ctx.strokeStyle = 'rgba(17,24,39,0.18)';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(180, 266);
    ctx.lineTo(1220, 266);
    ctx.stroke();

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        value => {
          if (value) {
            resolve(value);
          } else {
            reject(new Error('Unable to build the typed signature.'));
          }
        },
        'image/png',
      );
    });

    this.typedPreviewUrl = canvas.toDataURL('image/png');
    this.signaturePreviewUrl = this.typedPreviewUrl;

    return { bytes: new Uint8Array(await blob.arrayBuffer()), type: 'png' };
  }

  private renderTypedPreview() {
    void this.typedSignatureToAsset().catch(() => {
      this.signaturePreviewUrl = '';
    });
  }

  get previewUrl(): string {
    return this.signatureMode === 'type' ? this.typedPreviewUrl : this.signaturePreviewUrl;
  }
}
