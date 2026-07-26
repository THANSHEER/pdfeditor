# PDF Toolkit

**A free, open-source, privacy-first PDF editor that runs entirely in your browser.**

No uploads. No accounts. No servers. Every file stays on your device.

![PDF Toolkit Banner](resources/banner.png)

[![CI](https://github.com/THANSHEER/pdfeditor/actions/workflows/ci.yml/badge.svg)](https://github.com/THANSHEER/pdfeditor/actions/workflows/ci.yml)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](LICENSE)
[![Angular](https://img.shields.io/badge/Angular-21-red)](https://angular.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com)

---

## Overview

PDF Toolkit is a fully client-side web application built with **Angular 21** and **WebAssembly**. It provides a growing suite of professional PDF tools — merge, split, compress, protect, unlock, convert, and more — all running locally with zero server involvement.

### Why PDF Toolkit?

| Feature | PDF Toolkit | Typical online tools |
|---|---|---|
| Files sent to a server | Never | Always |
| Works offline | Yes (after first load) | No |
| Free forever | Yes | Freemium |
| Open source | Yes (AGPL-3.0) | Rarely |
| No account required | Yes | Often required |

---

## Available Tools

### Basic PDF Tools
| Tool | Status | Description |
|------|--------|-------------|
| Merge PDF | `ready` | Combine multiple PDFs into one |
| Split PDF | `ready` | Split by page ranges or every N pages |
| Remove Pages | `ready` | Delete unwanted pages |
| Extract Pages | `ready` | Pull specific pages into a new file |
| Rotate PDF | `ready` | Rotate individual or all pages |
| Organize PDF | `ready` | Drag-and-drop page reordering |

### Optimize PDF
| Tool | Status | Description |
|------|--------|-------------|
| Compress PDF | `ready` | Lossless, balanced, and aggressive presets |
| Flatten PDF | `ready` | Bake interactive form fields into static content |

### Convert to PDF
| Tool | Status | Description |
|------|--------|-------------|
| Image to PDF | `ready` | JPG / PNG / WebP to PDF |
| HTML to PDF | `beta` | HTML snippet or URL to PDF |

### Convert from PDF
| Tool | Status | Description |
|------|--------|-------------|
| PDF to Image | `ready` | Extract pages as high-quality JPG or PNG |

### Edit PDF
| Tool | Status | Description |
|------|--------|-------------|
| Add Watermark | `coming soon` | Stamp text or image over pages |
| Add Page Numbers | `coming soon` | Insert formatted page numbers |
| Crop PDF | `coming soon` | Trim margins and resize pages |

### PDF Security
| Tool | Status | Description |
|------|--------|-------------|
| Protect PDF | `ready` | AES-256 password encryption |
| Unlock PDF | `ready` | Remove password protection |
| Redact PDF | `coming soon` | Permanently black out sensitive content |
| Sign PDF | `coming soon` | Draw or upload a signature |

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Angular 21](https://angular.dev) — standalone components, lazy-loaded routes |
| Styling | [Tailwind CSS 3.4](https://tailwindcss.com) — utility-first, dark mode support |
| PDF manipulation | [pdf-lib 1.17](https://pdf-lib.js.org) — create, modify, save PDFs |
| PDF encryption | [pdf-lib-plus-encrypt 1.1](https://github.com/metaphox/pdf-lib-plus-encrypt) — AES-256 |
| PDF rendering | [pdf.js 4.10](https://mozilla.github.io/pdf.js/) — thumbnails, decryption, page rendering |
| PDF compression | [qpdf-wasm 0.1](https://github.com/j-f1/qpdf-wasm) — WASM-compiled qpdf (compress only) |
| Deployment | [Cloudflare Pages](https://pages.cloudflare.com/) via [Wrangler](https://developers.cloudflare.com/workers/wrangler/) |

---

## Getting Started

### Prerequisites

- **Node.js** v20 or later (`cat .nvmrc` for the pinned version)
- **npm** v10 or later

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/THANSHEER/pdfeditor.git
cd pdfeditor

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

The app will be available at **http://localhost:4200**.

### Useful scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start the dev server with hot-reload |
| `npm run build` | Production build (output to `dist/`) |
| `npm run deploy` | Build and deploy to Cloudflare Pages |

---

## Project Structure

```
pdfeditor/
├── public/                        # Static assets served as-is
│   ├── favicon.svg
│   ├── icons.svg
│   └── qpdf.wasm                  # qpdf WASM binary
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── homepage/          # Landing page and sub-components
│   │   │   ├── explore-all-tools/ # Tool discovery page and sub-components
│   │   │   ├── layout/            # Header + footer shell
│   │   │   ├── shared/            # Header and footer components
│   │   │   ├── pdf-workspace/     # Multi-page editor workspace
│   │   │   └── tool-page/
│   │   │       ├── tool-page.component.ts   # Reusable tool UI scaffold
│   │   │       └── tools/         # One sub-folder per tool
│   │   │           ├── merge-pdf/
│   │   │           ├── split-pdf/
│   │   │           └── …
│   │   ├── data/
│   │   │   ├── tools.ts           # Tool registry (id, name, route, status…)
│   │   │   ├── categories.ts      # Category definitions
│   │   │   └── icons.ts           # Inline SVG icon library
│   │   ├── models/
│   │   │   └── pdf-editor.models.ts
│   │   ├── pipes/
│   │   │   └── safe-html.pipe.ts
│   │   ├── services/
│   │   │   ├── pdf.service.ts     # Core PDF load + render (pdfjs)
│   │   │   ├── storage.service.ts # IndexedDB workspace persistence
│   │   │   └── tools/             # One service per tool
│   │   │       ├── merge-pdf.service.ts
│   │   │       ├── compress-pdf.service.ts
│   │   │       ├── protect-pdf.service.ts
│   │   │       ├── unlock-pdf.service.ts
│   │   │       ├── flatten-pdf.service.ts
│   │   │       ├── qpdf-pdf.service.ts    # qpdf-wasm wrapper (compress)
│   │   │       └── …
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts          # All lazy-loaded routes
│   ├── styles.css                 # Tailwind directives + CSS design tokens
│   └── index.html
├── .editorconfig                  # Consistent formatting across editors
├── .github/
│   ├── workflows/ci.yml           # Build check on every PR
│   ├── ISSUE_TEMPLATE/            # Bug report + feature request forms
│   └── pull_request_template.md
├── angular.json
├── tailwind.config.js
├── tsconfig.json
└── wrangler.jsonc                 # Cloudflare Pages deployment config
```

---

## Architecture

### Data flow

```
User uploads file
       │
       ▼
ToolComponent       ← manages UI state (files[], isProcessing, errorMessage)
       │
       ▼
ToolService         ← pure PDF logic, returns Uint8Array
       │
   pdf-lib / pdfjs / qpdf-wasm
       │
       ▼
ToolComponent       ← creates Blob, triggers browser download
```

### Key design decisions

**Client-side only** — No backend, no server, no cloud. All PDF processing runs in the browser via WebAssembly and JavaScript. This is a hard constraint: no new feature may require server-side processing.

**Standalone Angular components** — Every component uses `standalone: true` with explicit `imports: []`. No `NgModule` is used anywhere in the project.

**Lazy-loaded routes** — Every tool page is a separate lazy chunk. The initial bundle stays small; tools load on demand.

**Tool registry pattern** — `src/app/data/tools.ts` is the single source of truth for tool metadata (name, route, status, icon, category). The homepage, tool discovery page, and breadcrumbs all derive from this registry.

**`ToolPageComponent` scaffold** — All tool pages embed `<app-tool-page>` which provides the consistent file-upload zone, process button, error display, and download section. Tool-specific options are projected via `<div slot="settings">`.

---

## Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome / Edge (Chromium) | Full |
| Firefox | Full |
| Safari 16+ | Full |
| Safari < 16 | Not supported (missing WASM features) |
| Mobile Chrome / Safari | Functional (optimised for desktop) |

---

## Contributing

Contributions of all kinds are welcome — bug fixes, new tools, documentation improvements, and design feedback.

**Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before opening a pull request.** It covers development setup, how to implement a new tool end-to-end, coding conventions, and the PR review process.

For major changes (new tool category, architectural changes), open an issue first to discuss the approach.

- [Report a bug](.github/ISSUE_TEMPLATE/bug_report.yml)
- [Request a feature](.github/ISSUE_TEMPLATE/feature_request.yml)
- [Open issues](https://github.com/THANSHEER/pdfeditor/issues)

---

## License

PDF Toolkit is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

You are free to use, modify, and distribute this software, but any modified version you deploy publicly must also be released under the same license.

See the [LICENSE](LICENSE) file for the full text.

---

*A project by [geekstash.dev](https://geekstash.dev)*
