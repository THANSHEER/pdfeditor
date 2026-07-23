# PDF Toolkit — Architecture Guide

## Stack

- **Angular 21**, standalone components, `templateUrl` + `styleUrl` (no inline templates or styles)
- **pdf-lib** for all PDF mutations (rotate, remove, merge, etc.)
- **PDF.js** (`pdfjs-dist`) for rendering page thumbnails
- **Tailwind CSS** for utility classes + custom design tokens in `src/styles/`
- **Karma + Jasmine** for unit tests

## Directory Layout

```
src/
  app/
    app.routes.ts              # All routes
    data/
      tools.ts                 # Master list of all PDF tools (id, label, route, icon, category)
      categories.ts            # Tool category definitions
    models/
      pdf-editor.models.ts     # Shared interfaces
    pipes/
      safe-html.pipe.ts
    services/
      pdf.service.ts           # Core: loadPdf(), rotatePages(), removePages(), etc.
      storage.service.ts       # localStorage helpers
      tools/                   # One service per tool operation
        merge-pdf.service.ts
        split-pdf.service.ts
        compress-pdf.service.ts
        protect-pdf.service.ts
        unlock-pdf.service.ts
        ... (14 tool services total)
    components/
      shared/
        header/                # Site header with dark-mode toggle
        footer/
      layout/                  # App shell (header + router-outlet + footer)
      homepage/
        main/                  # Hero section
        privacy-banner/        # "100% client-side" info banner
      explore-all-tools/       # Tool browser with category nav + search
        category-nav/
        category-section/
        tool-card/
        search-bar/
      pdf-workspace/
        pdf-page-gallery/      # Reusable drag-drop page thumbnail gallery
      tool-page/
        tool-page.component.*  # Shared layout wrapper for all tool pages
        tools/
          organize-pdf/
          remove-pages/
          extract-pages/
          rotate-pdf/
          merge-pdf/
          split-pdf/
          compress-pdf/
          protect-pdf/
          unlock-pdf/
          add-watermark/
          add-page-numbers/
          crop-pdf/
          flatten-pdf/
          html-to-pdf/
          image-to-pdf/
          pdf-to-image/
          redact-pdf/
          sign-pdf/
  styles/
    _tokens.scss               # SCSS variables ($primary, $bg-main, $text-muted, etc.)
    _mixins.scss               # Responsive mixins (breakpoints)
    styles.scss                # Global styles, @use tokens
```

## Every Component Has Exactly 4 Files

```
foo.component.ts      # @Component with templateUrl and styleUrl(s)
foo.component.html    # Template
foo.component.scss    # Component-scoped styles
foo.component.spec.ts # Karma/Jasmine unit tests
```

No inline `template:` or `styles:` allowed. No `style=""` attributes on elements.

## SCSS Conventions

Always use `@use` at the top of every `.scss` file (not `@import`):

```scss
@use '../../../styles/tokens' as *;   // depth depends on file location
@use '../../../styles/mixins' as *;
```

Path depth from `src/`:

| Component location | `@use` path prefix |
|---|---|
| `components/tool-page/` | `../../../styles/` |
| `components/tool-page/tools/X/` | `../../../../../styles/` |
| `components/homepage/main/` | `../../../../styles/` |
| `components/shared/header/` | `../../../../styles/` |

Use BEM with `&` nesting. No duplicate of styles already in `tool-page.component.scss` or `shared-tool.scss`.

`src/app/components/tool-page/tools/shared-tool.scss` — shared layout for all gallery workspace tools (organize, remove, extract, rotate). Import it alongside the component's own SCSS:

```ts
styleUrls: ['../shared-tool.scss', './my-tool.component.scss']
```

## Service Architecture

`PdfService` (`services/pdf.service.ts`) is the core:
- `loadPdf(file)` → `{ state: PdfState, rawBytes: Uint8Array }`
- `rotatePages(rawBytes, rotations)` → `Blob`
- `removePages(rawBytes, indices)` → `Blob`
- `reorderPages(rawBytes, newOrder)` → `Blob`
- `extractPages(rawBytes, indices)` → `Blob`
- `downloadBlob(blob, filename)` — triggers browser download

Tool-specific services in `services/tools/` wrap heavier operations (merge, compress, protect, etc.).

## Tool Component Pattern

Gallery-based tools (organize, remove, extract, rotate) all follow the same pattern:

```ts
pdfState: PdfState | null = null;
rawBytes: Uint8Array | null = null;
pages: PdfPage[] = [];
isLoading = false;
isProcessing = false;
isDragging = false;
errorMessage = '';
downloadBlob: Blob | null = null;
downloadName = '';

async loadFile(file: File) { ... }
onPagesChanged(updated: PdfPage[]) { this.pages = updated; }
async process() { ... }
download() { this.pdf.downloadBlob(this.downloadBlob!, this.downloadName); }
```

## CI / GitHub Actions

`.github/workflows/ci.yml` — runs on every non-main branch push:
- `npm ci` → `ng build --configuration=production` → `ng test --no-watch --browsers=ChromeHeadlessCI`

`.github/workflows/merge.yml` — runs on push/PR to `main`:
- Same steps + `--code-coverage`, uploads `dist/` and `coverage/` as artefacts

`karma.conf.js` already has `ChromeHeadlessCI: { base: 'ChromeHeadless', flags: ['--no-sandbox'] }`.

## Angular Budget

`angular.json` component style budget: warning `10kB`, error `20kB`.

## Running Locally

```bash
npm install
npm start          # dev server at localhost:4200
npm run build      # production build
npm test           # interactive test runner
npx ng test --no-watch --browsers=ChromeHeadlessCI  # CI-style single run
```
