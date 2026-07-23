import { Component, ElementRef, ViewChild } from "@angular/core";

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PdfPageGalleryComponent } from "../../../pdf-workspace/pdf-page-gallery/pdf-page-gallery.component";
import {
  PdfService,
  PdfPage,
  PdfState,
} from "../../../../services/pdf.service";

@Component({
  selector: "app-rotate-pdf",
  standalone: true,
  imports: [RouterModule, FormsModule, PdfPageGalleryComponent],
  styleUrls: ["../shared-tool.scss", "./rotate-pdf.component.scss"],
  templateUrl: './rotate-pdf.component.html',
})
/**
 * Component providing an interactive gallery to rotate individual or all pages within a PDF.
 */
export class RotatePdfComponent {
  @ViewChild("fileInput") fileInput!: ElementRef<HTMLInputElement>;

  /** The state of the currently loaded PDF document. */
  pdfState: PdfState | null = null;
  /** The raw byte array of the original loaded PDF. */
  rawBytes: Uint8Array | null = null;
  /** Array of pages representing the current state of the document in the UI. */
  pages: PdfPage[] = [];
  /** Indicates whether a PDF file is currently being loaded and parsed. */
  isLoading = false;
  /** Indicates whether the rotate operation is currently being processed. */
  isProcessing = false;
  /** Tracks if a file is being dragged over the upload zone. */
  isDragging = false;
  /** Holds any error messages generated during loading or processing. */
  errorMessage = "";
  /** The resulting rotated PDF Blob ready for download. */
  downloadBlob: Blob | null = null;
  /** The default file name for the downloaded PDF. */
  downloadName = "";

  constructor(private pdf: PdfService) {}

  get hasRotations() {
    return this.pages.some((p) => p.rotation !== 0);
  }

  /** Handles the dragover event on the upload zone. */
  onDragOver(e: DragEvent) {
    e.preventDefault();
    this.isDragging = true;
  }

  /** Handles the drop event on the upload zone, loading the dropped file. */
  onDrop(e: DragEvent) {
    e.preventDefault();
    this.isDragging = false;
    const file = e.dataTransfer?.files?.[0];
    if (file) this.loadFile(file);
  }

  /** Handles the file selection event from the hidden input element. */
  onFileSelect(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      this.loadFile(file);
      (e.target as HTMLInputElement).value = "";
    }
  }

  /**
   * Reads and parses a PDF file using the PdfService, initializing the component state.
   *
   * @param file The browser File object representing the PDF.
   */
  async loadFile(file: File) {
    this.isLoading = true;
    this.errorMessage = "";
    this.downloadBlob = null;
    try {
      const { state, rawBytes } = await this.pdf.loadPdf(file);
      this.pdfState = state;
      this.rawBytes = rawBytes;
      this.pages = state.pages;
    } catch (err: any) {
      this.errorMessage = err.message || "Failed to load PDF.";
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Callback invoked when the user interacts with the gallery to modify pages (e.g., rotating).
   *
   * @param updated The updated array of PdfPage objects from the gallery.
   */
  onPagesChanged(updated: PdfPage[]) {
    this.pages = updated;
    this.downloadBlob = null;
  }

  /**
   * Executes the PDF rotation operation by sending the modified pages to the PdfService.
   */
  async process() {
    if (!this.rawBytes || !this.pdfState) return;
    const rotations = this.pages
      .filter((p) => p.rotation !== 0)
      .map((p) => ({ pageIndex: p.pageIndex, rotation: p.rotation }));
    if (rotations.length === 0) {
      this.errorMessage = "No rotations applied.";
      return;
    }
    this.isProcessing = true;
    this.errorMessage = "";
    try {
      this.downloadBlob = await this.pdf.rotatePages(this.rawBytes, rotations);
      const base = this.pdfState.fileName.replace(/\.pdf$/i, "");
      this.downloadName = `${base}-rotated.pdf`;
    } catch (err: any) {
      this.errorMessage = err.message || "Failed to apply rotations.";
    } finally {
      this.isProcessing = false;
    }
  }

  /**
   * Triggers the browser download of the processed PDF Blob.
   */
  download() {
    if (this.downloadBlob)
      this.pdf.downloadBlob(this.downloadBlob, this.downloadName);
  }
}
