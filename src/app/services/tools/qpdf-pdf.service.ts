import { Injectable, NgZone, inject } from '@angular/core';
import qpdfInit, { QpdfWasmModule } from 'qpdf-wasm/qpdf.js';

@Injectable({ providedIn: 'root' })
export class QpdfPdfService {
  private readonly ngZone = inject(NgZone);
  private modulePromise?: Promise<QpdfWasmModule>;

  private loadModule(): Promise<QpdfWasmModule> {
    if (!this.modulePromise) {
      // Run outside Angular zone so Zone.js does not patch the internal
      // Worker/postMessage calls that Emscripten (qpdf-wasm) uses.
      // Without this, ZoneAwarePromise ends up in the postMessage payload
      // causing an uncloneable DataCloneError.
      this.modulePromise = this.ngZone.runOutsideAngular(() =>
        qpdfInit({
          locateFile: (fileName: string) => new URL(`/${fileName}`, document.baseURI).href,
        })
      );
    }
    return this.modulePromise;
  }

  async encryptPdf(file: File, userPassword: string, ownerPassword: string): Promise<Uint8Array> {
    return this.run(file, [
      '--encrypt',
      `--user-password=${userPassword}`,
      `--owner-password=${ownerPassword}`,
      '--bits=256',
      '--',
    ]);
  }

  async decryptPdf(file: File, password: string): Promise<Uint8Array> {
    return this.run(file, [
      '--decrypt',
      `--password=${password}`,
    ]);
  }

  async compressPdf(file: File): Promise<Uint8Array> {
    return this.run(file, [
      '--stream-data=compress',
      '--recompress-flate',
      '--compression-level=9',
      '--object-streams=generate',
    ]);
  }

  private run(file: File, args: string[]): Promise<Uint8Array> {
    // Bridge pattern: qpdf work runs outside Angular zone (avoids Zone.js
    // wrapping qpdf's internal Worker/postMessage → DataCloneError), but
    // resolve/reject are called back inside the zone via ngZone.run() so
    // that Angular change detection fires and the component UI updates
    // (spinner stops, downloads appear, errors show).
    return new Promise<Uint8Array>((resolve, reject) => {
      this.ngZone.runOutsideAngular(() => {
        const execute = async () => {
          const module = await this.loadModule();
          const inputPath = '/tmp/input.pdf';
          const outputPath = '/tmp/output.pdf';

          module.FS.writeFile(inputPath, new Uint8Array(await file.arrayBuffer()));

          try {
            module.callMain([inputPath, ...args, outputPath]);
            return module.FS.readFile(outputPath);
          } finally {
            this.safeUnlink(module, inputPath);
            this.safeUnlink(module, outputPath);
          }
        };

        execute().then(
          (bytes) => this.ngZone.run(() => resolve(bytes)),
          (err)   => this.ngZone.run(() => reject(this.normalizeError(err))),
        );
      });
    });
  }

  private safeUnlink(module: QpdfWasmModule, path: string): void {
    try {
      module.FS.unlink?.(path);
    } catch {
      // Ignore cleanup errors from the in-memory filesystem.
    }
  }

  private normalizeError(error: unknown): Error {
    if (error instanceof Error) {
      const message = error.message.toLowerCase();

      if (message.includes('password') || message.includes('decrypt') || message.includes('encryption')) {
        return new Error('The password is incorrect or the PDF is not accessible with the supplied password.');
      }

      if (message.includes('syntax') || message.includes('damage') || message.includes('invalid')) {
        return new Error('This PDF appears to be damaged or unsupported.');
      }

      return error;
    }

    return new Error('An unexpected PDF processing error occurred.');
  }
}