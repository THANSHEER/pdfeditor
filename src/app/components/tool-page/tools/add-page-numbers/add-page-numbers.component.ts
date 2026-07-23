import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolPageComponent, DownloadFile } from '../../tool-page.component';
import { AddPageNumbersService, PageNumberOptions, PageNumberPosition } from '../../../../services/tools/add-page-numbers.service';

@Component({
  selector: 'app-add-page-numbers',
  standalone: true,
  imports: [CommonModule, FormsModule, ToolPageComponent],
  templateUrl: './add-page-numbers.component.html',
  styleUrl: './add-page-numbers.component.scss',
})
export class AddPageNumbersComponent {
  files: File[] = [];
  downloads: DownloadFile[] = [];
  isProcessing = false;
  errorMessage = '';

  position: PageNumberPosition = 'bottom-center';
  startNumber = 1;
  prefix = '';
  suffix = '';
  fontSize = 10;
  marginPt = 20;

  readonly positions: { id: PageNumberPosition; label: string }[] = [
    { id: 'top-left',      label: 'Top Left' },
    { id: 'top-center',    label: 'Top Center' },
    { id: 'top-right',     label: 'Top Right' },
    { id: 'bottom-left',   label: 'Bottom Left' },
    { id: 'bottom-center', label: 'Bottom Center' },
    { id: 'bottom-right',  label: 'Bottom Right' },
  ];

  constructor(private readonly service: AddPageNumbersService) {}

  get preview(): string {
    return `${this.prefix}1${this.suffix}`;
  }

  onFilesChanged(files: File[]) {
    this.files = files;
    this.errorMessage = '';
    this.downloads = [];
  }

  async onProcess() {
    if (!this.files.length) {
      this.errorMessage = 'Please select a PDF file.';
      return;
    }

    this.isProcessing = true;
    this.errorMessage = '';

    try {
      const options: PageNumberOptions = {
        position: this.position,
        startNumber: Math.max(1, this.startNumber),
        prefix: this.prefix,
        suffix: this.suffix,
        fontSize: this.fontSize,
        marginPt: this.marginPt,
      };
      const bytes = await this.service.addPageNumbers(this.files[0], options);
      const blob = new Blob([bytes as unknown as BlobPart], { type: 'application/pdf' });
      const name = this.files[0].name.replace(/\.pdf$/i, '') + '-numbered.pdf';
      this.downloads = [{ name, blob }];
    } catch (err: unknown) {
      this.errorMessage = err instanceof Error ? err.message : 'Failed to add page numbers.';
    } finally {
      this.isProcessing = false;
    }
  }
}
