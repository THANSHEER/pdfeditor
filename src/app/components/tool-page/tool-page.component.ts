import {
  Component, Input, Output, EventEmitter, ElementRef, ViewChild, HostListener
} from '@angular/core';

import { RouterModule } from '@angular/router';
import { ICONS } from '../../data/icons';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

export interface DownloadFile {
  name: string;
  blob: Blob;
}

@Component({
  selector: 'app-tool-page',
  standalone: true,
  imports: [RouterModule, SafeHtmlPipe],
  templateUrl: './tool-page.component.html',
  styleUrls: ['./tool-page.component.scss']
})
export class ToolPageComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = 'file';
  @Input() iconBg: string = 'rgba(99, 102, 241, 0.1)';
  @Input() iconColor: string = 'var(--color-primary)';
  @Input() acceptedTypes: string = '.pdf';
  @Input() allowMultiple: boolean = false;
  @Input() uploadHint: string = 'PDF files supported';
  @Input() actionLabel: string = 'Process';
  @Input() actionIcon: string = 'settings';
  @Input() isProcessing: boolean = false;
  @Input() errorMessage: string = '';
  @Input() downloadFiles: DownloadFile[] = [];
  @Input() selectedFiles: File[] = [];

  getIconData(name: string) {
    return ICONS[name] || ICONS['file'];
  }

  @Output() filesChanged = new EventEmitter<File[]>();
  @Output() process = new EventEmitter<void>();

  isDragging = false;

  onDragOver(e: DragEvent) {
    e.preventDefault();
    this.isDragging = true;
  }
  onDragLeave() { this.isDragging = false; }

  onDrop(e: DragEvent) {
    e.preventDefault();
    this.isDragging = false;
    const files = Array.from(e.dataTransfer?.files ?? []);
    this.addFiles(files);
  }

  onFileSelect(e: Event) {
    const input = e.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    this.addFiles(files);
    input.value = '';
  }

  addFiles(files: File[]) {
    if (this.allowMultiple) {
      this.filesChanged.emit([...this.selectedFiles, ...files]);
    } else {
      this.filesChanged.emit(files.slice(0, 1));
    }
  }

  removeFile(index: number) {
    const updated = [...this.selectedFiles];
    updated.splice(index, 1);
    this.filesChanged.emit(updated);
  }

  moveFileUp(index: number) {
    if (index > 0) {
      const updated = [...this.selectedFiles];
      const temp = updated[index];
      updated[index] = updated[index - 1];
      updated[index - 1] = temp;
      this.filesChanged.emit(updated);
    }
  }

  moveFileDown(index: number) {
    if (index < this.selectedFiles.length - 1) {
      const updated = [...this.selectedFiles];
      const temp = updated[index];
      updated[index] = updated[index + 1];
      updated[index + 1] = temp;
      this.filesChanged.emit(updated);
    }
  }

  onProcess() {
    this.process.emit();
  }

  download(df: DownloadFile) {
    const url = URL.createObjectURL(df.blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = df.name;
    a.click();
    URL.revokeObjectURL(url);
  }

  downloadAll() {
    this.downloadFiles.forEach((df, i) => {
      setTimeout(() => this.download(df), i * 200);
    });
  }

  isZipping = false;
  async downloadAsZip() {
    this.isZipping = true;
    try {
      // Dynamically load JSZip from CDN
      const scriptId = 'jszip-cdn';
      if (!document.getElementById(scriptId)) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.id = scriptId;
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      const JSZip = (window as any).JSZip;
      const zip = new JSZip();
      
      this.downloadFiles.forEach(file => {
        zip.file(file.name, file.blob);
      });

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const zipName = this.title.toLowerCase().replace(/\s+/g, '-') + '-results.zip';
      
      this.download({
        name: zipName,
        blob: zipBlob
      });
    } catch (error) {
      console.error('ZIP generation failed:', error);
      alert('Failed to generate ZIP. Please try individual downloads.');
    } finally {
      this.isZipping = false;
    }
  }

  formatSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  }
}
