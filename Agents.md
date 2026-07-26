# AI Agents Guide — PDF Toolkit

Provide this document to any AI coding assistant before asking it to implement features, fix bugs, or refactor the PDF Toolkit codebase.

---

## Project Overview

PDF Toolkit is a **100 % client-side** Angular 21 web application. No file ever leaves the browser. All PDF manipulation runs via `pdf-lib`, `pdf.js`, and `qpdf-wasm` directly in the user's browser tab.

- **Live URL**: hosted on Cloudflare Pages  
- **Repo**: `github.com/THANSHEER/pdfeditor`  
- **License**: AGPL-3.0

---

## Current Project Structure

```
pdfeditor/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── qpdf.wasm                   # qpdf WASM binary (compress only)
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── homepage/
│   │   │   │   ├── main/           # Hero section with typewriter animation
│   │   │   │   ├── privacy-banner/ # 4-pillar trust cards
│   │   │   │   ├── homepage.component.ts/.html/.css
│   │   │   ├── explore-all-tools/
│   │   │   │   ├── category-nav/   # Horizontal category filter tabs
│   │   │   │   ├── category-section/ # Grid of tool cards per category
│   │   │   │   ├── search-bar/     # Search input
│   │   │   │   ├── tool-card/      # Individual tool card
│   │   │   │   └── explore-all-tools.component.*
│   │   │   ├── layout/             # Shell: wraps pages that need header+footer
│   │   │   ├── shared/
│   │   │   │   ├── header/         # Sticky nav (logo, theme toggle, GitHub)
│   │   │   │   └── footer/         # 4-column footer
│   │   │   ├── pdf-workspace/
│   │   │   │   ├── pdf-page-gallery/ # Drag-drop page thumbnail grid
│   │   │   │   └── pdf-workspace.component.* # Unified multi-page editor
│   │   │   └── tool-page/
│   │   │       ├── tool-page.component.ts  # ← Shared UI scaffold for ALL tools
│   │   │       └── tools/
│   │   │           ├── compress-pdf/
│   │   │           ├── extract-pages/
│   │   │           ├── flatten-pdf/
│   │   │           ├── html-to-pdf/
│   │   │           ├── image-to-pdf/
│   │   │           ├── merge-pdf/
│   │   │           ├── organize-pdf/
│   │   │           ├── pdf-to-image/
│   │   │           ├── protect-pdf/
│   │   │           ├── remove-pages/
│   │   │           ├── rotate-pdf/
│   │   │           ├── split-pdf/
│   │   │           └── unlock-pdf/
│   │   ├── data/
│   │   │   ├── tools.ts        # Tool registry — single source of truth
│   │   │   ├── categories.ts   # Category definitions
│   │   │   └── icons.ts        # Inline SVG icon map
│   │   ├── models/
│   │   │   └── pdf-editor.models.ts
│   │   ├── pipes/
│   │   │   └── safe-html.pipe.ts
│   │   ├── services/
│   │   │   ├── pdf.service.ts        # Core: pdfjs load, render, page ops
│   │   │   ├── storage.service.ts    # IndexedDB workspace persistence
│   │   │   └── tools/               # One service per tool
│   │   │       ├── merge-pdf.service.ts
│   │   │       ├── split-pdf.service.ts
│   │   │       ├── compress-pdf.service.ts
│   │   │       ├── flatten-pdf.service.ts
│   │   │       ├── protect-pdf.service.ts
│   │   │       ├── unlock-pdf.service.ts
│   │   │       ├── qpdf-pdf.service.ts   # qpdf-wasm wrapper (compress only)
│   │   │       ├── extract-pages.service.ts
│   │   │       ├── organize-pdf.service.ts
│   │   │       ├── remove-pages.service.ts
│   │   │       └── rotate-pdf.service.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts        # All routes lazy-loaded
│   ├── styles.css               # Tailwind + CSS design tokens
│   ├── index.html
│   └── main.ts
├── .editorconfig
├── .github/
│   ├── workflows/ci.yml         # Build check on every PR
│   ├── ISSUE_TEMPLATE/
│   └── pull_request_template.md
├── angular.json
├── tailwind.config.js
├── tsconfig.json
├── wrangler.jsonc               # Cloudflare Pages config
├── README.md
├── CONTRIBUTING.md
└── CHANGELOG.md
```

---

## Tool Registry

`src/app/data/tools.ts` is the **single source of truth** for all tools. Every tool has:

| Field | Type | Purpose |
|-------|------|---------|
| `id` | string | Unique kebab-case identifier |
| `name` | string | Display name |
| `category` | string | Must match a category `id` in `categories.ts` |
| `description` | string | One-line user-facing description |
| `icon` | string | Key in `icons.ts` |
| `route` | string | Angular route path (e.g. `/tools/merge-pdf`) |
| `status` | `'ready' \| 'beta' \| 'coming_soon'` | Controls badge display |
| `isLocal` | boolean | Always `true` — all processing is local |

### Current tool status

| Tool | Status | Route | Service |
|------|--------|-------|---------|
| Merge PDF | ready | `/tools/merge-pdf` | `merge-pdf.service.ts` |
| Split PDF | ready | `/tools/split-pdf` | `pdf.service.ts` |
| Remove Pages | ready | `/tools/editor/remove` | `remove-pages.service.ts` |
| Extract Pages | ready | `/tools/editor/extract` | `extract-pages.service.ts` |
| Rotate PDF | ready | `/tools/editor/rotate` | `rotate-pdf.service.ts` |
| Organize PDF | ready | `/tools/editor/organize` | `organize-pdf.service.ts` |
| Compress PDF | ready | `/tools/compress-pdf` | `compress-pdf.service.ts` |
| Flatten PDF | ready | `/tools/flatten-pdf` | `flatten-pdf.service.ts` |
| Image to PDF | ready | `/tools/image-to-pdf` | *(component-only)* |
| HTML to PDF | beta | `/tools/html-to-pdf` | *(component-only)* |
| PDF to Image | ready | `/tools/pdf-to-image` | *(component-only)* |
| Protect PDF | ready | `/tools/protect-pdf` | `protect-pdf.service.ts` |
| Unlock PDF | ready | `/tools/unlock-pdf` | `unlock-pdf.service.ts` |
| Add Watermark | coming_soon | `/tools/add-watermark` | — |
| Add Page Numbers | coming_soon | `/tools/add-page-numbers` | — |
| Crop PDF | coming_soon | `/tools/crop-pdf` | — |
| Redact PDF | coming_soon | `/tools/redact-pdf` | — |
| Sign PDF | coming_soon | `/tools/sign-pdf` | — |

---

## Architecture & Data Flow

```
User uploads file (drag-drop or click)
         │
         ▼
  ToolComponent              UI state only (files[], isProcessing, errorMessage, downloads[])
         │  injects
         ▼
  ToolService                Pure PDF logic — returns Uint8Array or Uint8Array[]
         │  uses
         ▼
  pdf-lib / pdfjs / qpdf-wasm
         │
         ▼
  ToolComponent              new Blob([bytes]) → browser download
```

### ToolPageComponent scaffold

Every tool page embeds `<app-tool-page>` which provides:
- Drag-and-drop file upload zone
- File list with reorder/remove
- Process button with spinner state
- Error display
- Download section (single file, multi-file, ZIP)

Tool-specific options go in `<div slot="settings">` (content projection).

---

## Key Services

### `PdfService` (`services/pdf.service.ts`)
Core service for loading PDFs and rendering thumbnails via `pdfjs-dist`.
- `loadPdf(file, thumbnailWidth?)` — returns `{ state: PdfState, rawBytes: Uint8Array }`
- `removePages`, `extractPages`, `rotatePages`, `reorderPages`, `splitPdf` — all return `Blob`
- Uses CDN pdfjs worker: `cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.mjs`

### `StorageService` (`services/storage.service.ts`)
IndexedDB wrapper for the PDF workspace. Persists the working PDF across page refreshes.

### `QpdfPdfService` (`services/tools/qpdf-pdf.service.ts`)
Wrapper around `qpdf-wasm`. **Important known constraint:**

> qpdf-wasm uses Emscripten pthreads which require `SharedArrayBuffer`. Without COOP+COEP HTTP headers (not viable on a static Cloudflare Pages host), qpdf throws `DataCloneError` on `postMessage` for decrypt operations. The NgZone bridge pattern (`new Promise + ngZone.run(resolve/reject)`) is used to prevent Angular change detection issues when qpdf *does* work (compress mode). **Do not use qpdf for decrypt — use pdfjs-dist instead.**

Methods: `encryptPdf`, `decryptPdf` (avoid — use pdfjs), `compressPdf`

### `UnlockPdfService` (`services/tools/unlock-pdf.service.ts`)
Uses **pdfjs-dist** (not qpdf) for unlock. Approach:
1. Load encrypted PDF via `pdfjs.getDocument({ data, password })` — pdfjs handles RC4/AES-128/AES-256
2. Render each page to canvas at 144 DPI (scale=2)
3. Embed JPEG images into a new `pdf-lib` document
4. Return the unprotected PDF

`detectLockStatus(file)` probes the file without a password — pdfjs throws `PasswordException` (code 1) if locked.

### `FlattenPdfService` (`services/tools/flatten-pdf.service.ts`)
Uses **`pdf-lib`** (not `pdf-lib-plus-encrypt`) — the standalone fork lacks form API.
- `pdfDoc.getForm().flatten()` bakes form fields into static page content
- Returns `{ bytes: Uint8Array, fieldCount: number }`

### `ProtectPdfService` (`services/tools/protect-pdf.service.ts`)
Uses **`pdf-lib-plus-encrypt`** for AES-256 encryption.
- Random 32-char hex owner password (crypto.getRandomValues)
- User-provided open password
- Permissions: high-res print allowed, all editing disabled

---

## Routing

All tool routes are lazy-loaded. Routes that redirect to the unified workspace:
```
/tools/remove-pages   → /tools/editor/remove
/tools/extract-pages  → /tools/editor/extract
/tools/rotate-pdf     → /tools/editor/rotate
/tools/organize-pdf   → /tools/editor/organize
```

The workspace reads the `:tool` param to decide which operation to perform.

---

## System Prompt for AI Agents

When working on this project, follow these rules absolutely:

### 1. Client-Side Only
**Never** suggest a solution that requires a backend, server API, or external processing. Every feature must run in the browser using `pdf-lib`, `pdfjs-dist`, `qpdf-wasm`, or the Web Crypto API.

### 2. Angular Conventions
- **Standalone components only** — `standalone: true`, explicit `imports: []`
- **Angular control flow** — use `@if`, `@for`, `@switch`, not `*ngIf`/`*ngFor` directives
- **Lazy-loaded routes** — every tool page must use `loadComponent`
- **inject()-based DI** in services; constructor injection acceptable in components
- **No NgModule** anywhere

### 3. Adding a New Tool (mandatory checklist)
1. Add entry to `src/app/data/tools.ts` (set `status: 'coming_soon'` during dev)
2. Create `src/app/services/tools/<name>.service.ts` — pure logic, returns `Uint8Array`
3. Create `src/app/components/tool-page/tools/<name>/` with `.ts`, `.html`, `.css`, `.spec.ts`
4. Embed `<app-tool-page>` in the component template; put options in `<div slot="settings">`
5. Add lazy route to `src/app/app.routes.ts`
6. Set `status: 'ready'` in `tools.ts` when done
7. Build must pass: `npm run build`

### 4. PDF Library Selection
| Need | Library |
|------|---------|
| Create, modify, merge, split PDFs | `pdf-lib` |
| AES-256 password encryption | `pdf-lib-plus-encrypt` |
| Decrypt / unlock password-protected PDFs | `pdfjs-dist` (getDocument + password) |
| Render page thumbnails | `pdfjs-dist` (canvas rendering) |
| Flatten form fields | `pdf-lib` (NOT pdf-lib-plus-encrypt — no form API) |
| Aggressive stream compression | `qpdf-wasm` via `QpdfPdfService.compressPdf()` |

### 5. Styling
- **Tailwind CSS** is primary — use utility classes
- Design tokens in `src/styles.css` (e.g. `var(--bg-main)`, `var(--text-main)`)
- Always provide `dark:` variants for bg/text/border classes
- All UI must be responsive: mobile (375px) → tablet (768px) → desktop (1280px) → wide (1920px+)

### 6. TypeScript
- `strict: true` is enforced — no implicit `any`
- Use `error instanceof Error ? error.message : ''` pattern for catch blocks
- Cast `Uint8Array` to `BlobPart` via `as unknown as BlobPart` (TypeScript strict compat)

### 7. Zone.js / qpdf pattern
When using `QpdfPdfService`, the `run()` method already uses the correct bridge:
```typescript
// Inside QpdfPdfService.run():
return new Promise<Uint8Array>((resolve, reject) => {
  this.ngZone.runOutsideAngular(() => {
    execute().then(
      bytes => this.ngZone.run(() => resolve(bytes)),
      err   => this.ngZone.run(() => reject(err)),
    );
  });
});
```
Do not change this pattern. It prevents both `DataCloneError` and frozen spinners.

---

## Coding Style

- No comments that explain **what** — well-named identifiers do that
- Comments only for **why**: hidden constraints, non-obvious invariants, workarounds
- No console.log in production paths
- Service methods: `async` returning `Promise<Uint8Array>` (or `Blob` / `Blob[]`)
- Component state: `files: File[]`, `downloads: DownloadFile[]`, `isProcessing: boolean`, `errorMessage: string`
