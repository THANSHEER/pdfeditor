declare module 'qpdf-wasm/qpdf.js' {
  export interface QpdfWasmModule {
    FS: {
      writeFile(path: string, data: Uint8Array): void;
      readFile(path: string): Uint8Array;
      unlink?(path: string): void;
    };
    callMain(args: string[]): number;
  }

  export interface QpdfWasmInitOptions {
    locateFile?: (fileName: string) => string;
    print?: (message: string) => void;
    printErr?: (message: string) => void;
  }

  export default function init(
    options?: QpdfWasmInitOptions,
  ): Promise<QpdfWasmModule>;
}