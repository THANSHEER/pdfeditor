# Contributing to PDF Toolkit

Thank you for your interest in contributing! This document explains how to set up a development environment, where everything lives, and how to implement a new tool from start to finish.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [How to Implement a New Tool](#how-to-implement-a-new-tool)
- [Coding Conventions](#coding-conventions)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Reporting Bugs](#reporting-bugs)

---

## Code of Conduct

Be respectful and constructive. This is a community project — harassment, discrimination, or personal attacks of any kind will not be tolerated.

---

## Getting Started

### 1. Fork and clone

```bash
git clone https://github.com/<your-username>/pdfeditor.git
cd pdfeditor
```

### 2. Install dependencies

```bash
npm install
```

Requires **Node.js v20+**. Run `cat .nvmrc` for the exact pinned version. Use [nvm](https://github.com/nvm-sh/nvm) to switch: `nvm use`.

### 3. Start the dev server

```bash
npm start
# → http://localhost:4200
```

Changes hot-reload automatically.

### 4. Create a feature branch

```bash
git checkout -b feat/add-watermark-tool
```

---

## Project Structure

Understanding where things live is key before writing any code.

```
src/app/
├── components/
│   └── tool-page/
│       ├── tool-page.component.ts   ← Shared UI scaffold (upload zone, process button, downloads)
│       └── tools/
│           └── <tool-name>/         ← One folder per tool
│               ├── <tool-name>.component.ts
│               ├── <tool-name>.component.html
│               └── <tool-name>.component.css
├── data/
│   ├── tools.ts       ← Tool registry: single source of truth for all tool metadata
│   └── categories.ts  ← Category definitions
├── services/
│   └── tools/
│       └── <tool-name>.service.ts   ← Pure PDF logic for that tool
└── app.routes.ts      ← Lazy-loaded route for every tool
```

**Hard rule:** PDF processing logic goes in the service, not the component. The component only manages UI state.

---

## How to Implement a New Tool

This section walks through adding a complete new tool. We will use `add-watermark` as the example.

### Step 1 — Register the tool in the data registry

Open `src/app/data/tools.ts` and add an entry to `toolsData`:

```typescript
{
  id: "add-watermark",
  name: "Add Watermark",
  category: "edit",                // must match a category id in categories.ts
  description: "Stamp text or an image over every page of your PDF.",
  icon: "file-badge",              // key from src/app/data/icons.ts
  keywords: ["watermark", "stamp", "overlay", "copyright"],
  tags: ["pdf", "edit", "watermark", ...COMMON_TAGS],
  route: "/tools/add-watermark",
  status: 'ready',                 // 'ready' | 'beta' | 'coming_soon'
  isLocal: true
}
```

> Set `status: 'coming_soon'` during development and flip it to `'ready'` when done.

### Step 2 — Create the service

Create `src/app/services/tools/add-watermark.service.ts`:

```typescript
import { Injectable } from '@angular/core';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

@Injectable({ providedIn: 'root' })
export class AddWatermarkService {
  async addWatermark(file: File, text: string): Promise<Uint8Array> {
    const pdfBytes = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    for (const page of pdfDoc.getPages()) {
      const { width, height } = page.getSize();
      page.drawText(text, {
        x: width / 4,
        y: height / 2,
        size: 48,
        font,
        color: rgb(0.7, 0.7, 0.7),
        opacity: 0.4,
        rotate: { type: 'degrees', angle: 45 },
      });
    }

    return pdfDoc.save();
  }
}
```

**Rules for services:**
- `providedIn: 'root'` — services are singletons.
- Return `Uint8Array` (or `Uint8Array[]` for multi-file output).
- Throw `Error` with a human-readable message on failure — the component will display it.
- No UI concerns (no `document.createElement`, no router, no component state).

### Step 3 — Create the component folder

```bash
mkdir src/app/components/tool-page/tools/add-watermark
```

Create `add-watermark.component.ts`:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolPageComponent, DownloadFile } from '../../tool-page.component';
import { AddWatermarkService } from '../../../../services/tools/add-watermark.service';

@Component({
  selector: 'app-add-watermark',
  standalone: true,
  imports: [CommonModule, FormsModule, ToolPageComponent],
  templateUrl: './add-watermark.component.html',
  styleUrl: './add-watermark.component.css',
})
export class AddWatermarkComponent {
  files: File[] = [];
  downloads: DownloadFile[] = [];
  isProcessing = false;
  errorMessage = '';
  watermarkText = '';

  constructor(private readonly service: AddWatermarkService) {}

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
    if (!this.watermarkText.trim()) {
      this.errorMessage = 'Please enter watermark text.';
      return;
    }

    this.isProcessing = true;
    this.errorMessage = '';

    try {
      const bytes = await this.service.addWatermark(this.files[0], this.watermarkText);
      const blob = new Blob([bytes as unknown as BlobPart], { type: 'application/pdf' });
      const name = this.files[0].name.replace(/\.pdf$/i, '') + '-watermarked.pdf';
      this.downloads = [{ name, blob }];
    } catch (err: unknown) {
      this.errorMessage = err instanceof Error ? err.message : 'Processing failed.';
    } finally {
      this.isProcessing = false;
    }
  }
}
```

Create `add-watermark.component.html`:

```html
<app-tool-page
  title="Add Watermark"
  description="Stamp text over every page of your PDF."
  icon="file-badge"
  iconBg="rgba(99, 102, 241, 0.1)"
  iconColor="#6366f1"
  [allowMultiple]="false"
  actionLabel="Add Watermark"
  actionIcon="file-badge"
  [isProcessing]="isProcessing"
  [errorMessage]="errorMessage"
  [selectedFiles]="files"
  [downloadFiles]="downloads"
  (filesChanged)="onFilesChanged($event)"
  (process)="onProcess()"
>
  <div slot="settings" class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <label class="text-sm font-bold text-slate-900 dark:text-white">Watermark Text</label>
      <input
        type="text"
        [(ngModel)]="watermarkText"
        placeholder="e.g. CONFIDENTIAL"
        class="px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
      />
    </div>
  </div>
</app-tool-page>
```

Create an empty `add-watermark.component.css` (tool-specific styles are rare — use Tailwind utilities instead).

Create `add-watermark.component.spec.ts`:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddWatermarkComponent } from './add-watermark.component';

describe('AddWatermarkComponent', () => {
  let component: AddWatermarkComponent;
  let fixture: ComponentFixture<AddWatermarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWatermarkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddWatermarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### Step 4 — Add the route

Open `src/app/app.routes.ts` and add a lazy-loaded route inside the tool routes block:

```typescript
{
  path: 'tools/add-watermark',
  loadComponent: () =>
    import('./components/tool-page/tools/add-watermark/add-watermark.component')
      .then(m => m.AddWatermarkComponent),
},
```

### Step 5 — Verify

```bash
npm run build   # must complete with 0 errors
npm start       # navigate to http://localhost:4200/tools/add-watermark
```

Test with a real PDF file. Confirm the output is correct and the UI states (loading, error, success) all work.

---

## Coding Conventions

### TypeScript

- **Strict mode is on** (`"strict": true` in `tsconfig.json`). No `any` unless absolutely unavoidable and justified with a comment.
- Use `inject()` for dependency injection in services; constructor injection in components is also fine.
- Mark service dependencies `private readonly`.
- Prefer `const` over `let`; avoid `var`.

### Angular

- All components are **standalone** — always include `standalone: true` and an explicit `imports: []` array.
- Use Angular control flow (`@if`, `@for`) — not `*ngIf` / `*ngFor` directives.
- Use `async/await` rather than Promise chains or RxJS for one-shot operations.
- No `NgModule` anywhere.

### Styling

- Use **Tailwind utility classes** in templates. Avoid writing custom CSS unless the utility approach genuinely cannot cover the use case.
- Dark mode via the `dark:` prefix — always provide dark variants for backgrounds, borders, and text.
- Design tokens (`--bg-main`, `--text-main`, etc.) are in `src/styles.css`.

### Comments

- Write comments to explain **why**, not what. Well-named identifiers already explain what.
- One short line max per comment block — no multi-paragraph docstrings in components.
- Services that implement non-trivial algorithms may have a brief JSDoc on the public method.

### File naming

| Artefact | Convention |
|----------|-----------|
| Component folder | `kebab-case/` |
| Component files | `name.component.ts / .html / .css / .spec.ts` |
| Service file | `name.service.ts` |
| Data file | `name.ts` (no `.data` suffix) |
| Model file | `name.models.ts` |

---

## Submitting a Pull Request

1. Ensure `npm run build` passes with zero errors.
2. Test manually in at least one browser (Chrome recommended).
3. Fill out the PR template — especially the checklist.
4. Keep PRs focused: one tool, one bug fix, or one refactor per PR.
5. A maintainer will review within a few days. Be prepared for feedback.

---

## Reporting Bugs

Use the [bug report form](.github/ISSUE_TEMPLATE/bug_report.yml). Please include:
- Which tool is affected
- Steps to reproduce
- Browser and OS
- Any console errors (open DevTools → Console tab)

---

Thank you for contributing to PDF Toolkit!
