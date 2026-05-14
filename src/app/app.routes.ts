import { Routes } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout";

export const routes: Routes = [
  // ========== Layout Pages (Header + Footer via LayoutComponent) ==========
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadComponent: () =>
          import("./components/homepage/homepage").then(
            (m) => m.HomepageComponent,
          ),
      },
      {
        path: "tools",
        loadComponent: () =>
          import("./components/explore-all-tools/explore-all-tools").then(
            (m) => m.ExploreAllToolsComponent,
          ),
      },
    ],
  },

  // ========== Tool Pages (No Header/Footer — Full-Screen) ==========
  {
    path: "tools/merge-pdf",
    loadComponent: () =>
      import("./components/tool-page/tools/merge-pdf/merge-pdf").then(
        (m) => m.MergePdfComponent,
      ),
  },
  {
    path: "tools/split-pdf",
    loadComponent: () =>
      import("./components/tool-page/tools/split-pdf/split-pdf").then(
        (m) => m.SplitPdfComponent,
      ),
  },
  {
    path: "tools/html-to-pdf",
    loadComponent: () =>
      import("./components/tool-page/tools/html-to-pdf/html-to-pdf").then(
        (m) => m.HtmlToPdfComponent,
      ),
  },
  {
    path: "tools/image-to-pdf",
    loadComponent: () =>
      import("./components/tool-page/tools/image-to-pdf/image-to-pdf").then(
        (m) => m.ImageToPdfComponent,
      ),
  },
  {
    path: "tools/pdf-to-image",
    loadComponent: () =>
      import("./components/tool-page/tools/pdf-to-image/pdf-to-image").then(
        (m) => m.PdfToImageComponent,
      ),
  },
  {
    path: "tools/protect-pdf",
    loadComponent: () =>
      import("./components/tool-page/tools/protect-pdf/protect-pdf").then(
        (m) => m.ProtectPdfComponent,
      ),
  },
  {
    path: "tools/unlock-pdf",
    loadComponent: () =>
      import("./components/tool-page/tools/unlock-pdf/unlock-pdf").then(
        (m) => m.UnlockPdfComponent,
      ),
  },
  {
    path: "tools/compress-pdf",
    loadComponent: () =>
      import("./components/tool-page/tools/compress-pdf/compress-pdf").then(
        (m) => m.CompressPdfComponent,
      ),
  },
  {
    path: "tools/flatten-pdf",
    loadComponent: () =>
      import("./components/tool-page/tools/flatten-pdf/flatten-pdf").then(
        (m) => m.FlattenPdfComponent,
      ),
  },

  {
    path: 'tools/add-watermark',
    loadComponent: () =>
      import('./components/tool-page/tools/add-watermark/add-watermark').then(
        (m) => m.AddWatermarkComponent,
      ),
  },
  {
    path: 'tools/add-page-numbers',
    loadComponent: () =>
      import('./components/tool-page/tools/add-page-numbers/add-page-numbers').then(
        (m) => m.AddPageNumbersComponent,
      ),
  },
  {
    path: 'tools/redact-pdf',
    loadComponent: () =>
      import('./components/tool-page/tools/redact-pdf/redact-pdf').then(
        (m) => m.RedactPdfComponent,
      ),
  },
  {
    path: 'tools/sign-pdf',
    loadComponent: () =>
      import('./components/tool-page/tools/sign-pdf/sign-pdf').then(
        (m) => m.SignPdfComponent,
      ),
  },
  {
    path: 'tools/crop-pdf',
    loadComponent: () =>
      import('./components/tool-page/tools/crop-pdf/crop-pdf').then(
        (m) => m.CropPdfComponent,
      ),
  },

  // ─── Unified PDF Editor Workspace ─────────────────────────────────────────────
  {
    path: "tools/editor/:tool",
    loadComponent: () =>
      import("./components/pdf-workspace/pdf-workspace").then(
        (m) => m.PdfWorkspaceComponent,
      ),
  },

  // ─── Legacy Route Redirects (for existing links) ───────────────────────────
  { path: "tools/remove-pages", redirectTo: "tools/editor/remove" },
  { path: "tools/extract-pages", redirectTo: "tools/editor/extract" },
  { path: "tools/rotate-pdf", redirectTo: "tools/editor/rotate" },
  { path: "tools/organize-pdf", redirectTo: "tools/editor/organize" },

  // ========== Wildcard Redirect ==========
  {
    path: "**",
    redirectTo: "",
  },
];
