# Changelog

All notable changes to PDF Toolkit are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versions follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- Add Watermark — stamp text or image over PDF pages
- Add Page Numbers — insert formatted pagination
- Crop PDF — trim margins and resize page canvas
- Redact PDF — permanently black out sensitive content
- Sign PDF — draw or upload a digital signature

---

## [1.1.0] — 2025-05-13

### Added
- **Flatten PDF** — new tool that bakes interactive form fields into static page content using `pdf-lib`'s native `PDFForm.flatten()`. Supports all standard field types; reports the number of fields flattened.
- **Compress PDF** — new tool with three presets: Lossless (structural rewrite), Balanced (metadata-preserving rebuild), and Aggressive (qpdf-wasm stream compression).
- **Protect PDF** — added password confirmation field to prevent accidental lock-out; AES-256 encryption with high-resolution printing permission preserved.
- **Unlock PDF** — auto-detects whether the uploaded PDF is password-protected before the user clicks Unlock; shows a clear status badge (locked / already unlocked / checking).
- **PDF Toolkit branding** — header renamed from "PDF Editor" to "PDF Toolkit"; new document + lightning-bolt logo icon; "Free & Open Source" tagline.
- **Homepage top tools** — replaced the non-functional "Add Watermark" (coming soon) card with the ready "PDF to Image" tool.

### Fixed
- **Unlock PDF `DataCloneError`** — qpdf-wasm uses Emscripten pthreads which require `SharedArrayBuffer` / COOP+COEP headers unavailable on a standard static host. Replaced the qpdf-based decrypt path with a `pdfjs-dist` canvas-rendering approach: pdfjs decrypts all encryption revisions (RC4, AES-128, AES-256) natively; each page is rendered at 144 DPI and reassembled into a new open PDF via `pdf-lib`.
- **Unlock PDF spinner never stops** — `QpdfPdfService.run()` was returning a promise that resolved outside Angular zone (via `runOutsideAngular`), so `isProcessing = false` in the component's `finally` block never triggered change detection. Fixed with an explicit `ngZone.run(() => resolve/reject)` bridge pattern.
- **Duplicate CSS** — `src/styles.css` had a verbatim second copy of the base reset, utility classes, animations, and scrollbar rules (lines 172–291). Removed.
- **`merge-pdf.service.ts` misplaced** — moved from `src/app/services/` root into `src/app/services/tools/` to be consistent with all other tool services.

### Changed
- `topSixTools` array updated to include only tools with `status: 'ready'`.
- `flatten-pdf` status changed from `coming_soon` to `ready`.

---

## [1.0.0] — 2025-01-01

### Added
- Initial public release.
- **11 ready tools**: Merge PDF, Split PDF, Remove Pages, Extract Pages, Rotate PDF, Organize PDF, Image to PDF, PDF to Image, HTML to PDF (beta), Protect PDF, Unlock PDF.
- Unified PDF workspace for multi-page operations (drag-and-drop, thumbnails, IndexedDB session persistence).
- Light / dark mode toggle with `localStorage` persistence.
- Fully client-side architecture — no server, no uploads.
- Cloudflare Pages deployment via Wrangler.
- AGPL-3.0 licence.
