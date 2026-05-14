import { Component } from "@angular/core";

import { RouterModule } from "@angular/router";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer
      class="border-t transition-colors duration-500"
      style="background-color: var(--bg-surface); border-color: var(--border-main);"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14 lg:py-16">

        <!-- Main grid: brand full-width on mobile, 2-col on sm, 4-col on lg -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          <!-- Brand column — spans full row on sm, 1 col on lg -->
          <div class="sm:col-span-2 lg:col-span-1 space-y-5">
            <!-- Logo -->
            <a
              routerLink="/"
              class="flex items-center gap-3 no-underline w-fit group hover:opacity-90 transition-opacity"
            >
              <div class="relative flex items-center justify-center">
                <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-500 via-blue-500 to-violet-600 blur-lg opacity-30 group-hover:opacity-50 transition-opacity animate-pulse"></div>
                <div class="relative p-1.5 rounded-lg bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 shadow-lg border border-white/10">
                  <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M12 17l-1.5-3H9l3-5 1.5 3H15z" />
                  </svg>
                </div>
              </div>
              <div class="flex flex-col leading-none">
                <span class="font-black text-lg tracking-tight" style="color: var(--text-main);">PDF Toolkit</span>
                <span class="text-[10px] font-semibold tracking-widest uppercase opacity-50 mt-0.5" style="color: var(--text-muted);">Free &amp; Open Source</span>
              </div>
            </a>

            <!-- Description -->
            <p class="text-sm leading-relaxed font-medium" style="color: var(--text-muted);">
              Fast, private, and browser-based PDF tools. Every file stays on your device — always.
            </p>

            <!-- geekstash.dev credit -->
            <a
              href="https://geekstash.dev"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold transition-all duration-200 hover:border-indigo-500/50 hover:bg-indigo-500/5 w-fit"
              style="border-color: var(--border-main); color: var(--text-muted);"
            >
              <span class="opacity-60 uppercase tracking-widest">A project by</span>
              <span class="font-black bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">geekstash.dev</span>
            </a>

            <!-- GitHub icon -->
            <div class="flex gap-3">
              <a
                href="https://github.com/geekstashdev/pdfeditor"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repository"
                class="inline-flex items-center justify-center w-9 h-9 rounded-xl border transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
                style="background-color: var(--bg-card); border-color: var(--border-main); color: var(--text-muted);"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="space-y-4">
            <h5 class="text-xs font-black uppercase tracking-[0.2em] border-b-2 border-indigo-500 pb-2 w-fit" style="color: var(--text-main);">
              Quick Links
            </h5>
            <ul class="space-y-3">
              <li>
                <a routerLink="/" class="text-sm font-semibold flex items-center gap-2 transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400" style="color: var(--text-muted);">
                  <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                  Home
                </a>
              </li>
              <li>
                <a routerLink="/tools" class="text-sm font-semibold flex items-center gap-2 transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400" style="color: var(--text-muted);">
                  <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                  Explore Tools
                </a>
              </li>
            </ul>
          </div>

          <!-- Resources -->
          <div class="space-y-4">
            <h5 class="text-xs font-black uppercase tracking-[0.2em] border-b-2 border-violet-500 pb-2 w-fit" style="color: var(--text-main);">
              Resources
            </h5>
            <ul class="space-y-3">
              <li>
                <a href="https://github.com/geekstashdev/pdfeditor" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold flex items-center gap-2 transition-colors duration-200 hover:text-violet-600 dark:hover:text-violet-400" style="color: var(--text-muted);">
                  <span class="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0"></span>
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="https://github.com/geekstashdev/pdfeditor/issues" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold flex items-center gap-2 transition-colors duration-200 hover:text-violet-600 dark:hover:text-violet-400" style="color: var(--text-muted);">
                  <span class="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0"></span>
                  Report Issue
                </a>
              </li>
              <li>
                <a href="https://github.com/geekstashdev/pdfeditor/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold flex items-center gap-2 transition-colors duration-200 hover:text-violet-600 dark:hover:text-violet-400" style="color: var(--text-muted);">
                  <span class="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0"></span>
                  Contributing
                </a>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div class="space-y-4">
            <h5 class="text-xs font-black uppercase tracking-[0.2em] border-b-2 border-amber-500 pb-2 w-fit" style="color: var(--text-main);">
              Legal
            </h5>
            <div class="space-y-3">
              <p class="text-sm font-semibold" style="color: var(--text-muted);">
                Licensed under
                <a
                  href="https://github.com/geekstashdev/pdfeditor/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors font-black underline decoration-amber-500/30 underline-offset-2"
                >AGPL-3.0</a>
              </p>
              <p class="text-xs font-medium opacity-60" style="color: var(--text-muted);">
                Browser-based &nbsp;·&nbsp; Open source
              </p>
              <p class="text-xs font-medium opacity-60" style="color: var(--text-muted);">
                No uploads &nbsp;·&nbsp; No accounts
              </p>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="mt-10 md:mt-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-600"></div>

        <!-- Bottom bar -->
        <div class="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-center sm:text-left">
          <p class="text-xs font-semibold uppercase tracking-widest opacity-50" style="color: var(--text-muted);">
            © {{ currentYear }} PDF Toolkit &nbsp;·&nbsp; All rights reserved.
          </p>
          <p class="text-xs font-semibold uppercase tracking-widest opacity-50" style="color: var(--text-muted);">
            Built for local-first workflows
          </p>
        </div>

      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
