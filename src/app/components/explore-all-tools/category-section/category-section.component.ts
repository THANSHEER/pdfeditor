import { Component, Input } from "@angular/core";

import { Router } from "@angular/router";
import { ToolCardComponent } from "../../explore-all-tools/tool-card/tool-card.component";
import { ICONS } from "../../../data/icons";
import { SafeHtmlPipe } from "../../../pipes/safe-html.pipe";
import { Tool } from "../../../data/tools";
import { Category } from "../../../data/categories";

@Component({
  selector: "app-category-section",
  standalone: true,
  imports: [ToolCardComponent, SafeHtmlPipe],
  template: `
    @if (tools.length > 0) {
      <section
        [id]="category.id"
        class="w-full border-b py-6 sm:py-8 md:py-10"
        style="border-color: var(--border-main);"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <!-- Category Header -->
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 sm:mb-6">
            <div class="flex items-center gap-3">
              <div
                class="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex-shrink-0"
                [style.backgroundColor]="iconBg"
                [style.color]="iconColor"
              >
                <svg
                  class="w-5 h-5 sm:w-6 sm:h-6"
                  [attr.viewBox]="getIconData(category.icon).viewBox"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  [innerHTML]="getIconData(category.icon).path | safeHtml"
                ></svg>
              </div>
              <div>
                <h2 class="text-lg sm:text-xl md:text-2xl font-black -tracking-wider" style="color: var(--text-main);">
                  {{ category.name }}
                </h2>
                <p class="text-xs sm:text-sm mt-0.5" style="color: var(--text-muted);">{{ category.description }}</p>
              </div>
            </div>
            <span
              class="self-start sm:self-auto flex-shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border"
              style="background-color: var(--bg-surface); border-color: var(--border-main); color: var(--text-muted);"
            >
              {{ tools.length }}&nbsp;tool{{ tools.length !== 1 ? "s" : "" }}
            </span>
          </div>

          <!-- Tools Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4">
            @for (tool of tools; track tool.id; let i = $index) {
              <app-tool-card
                [style.animation-delay]="i * 40 + 'ms'"
                [title]="tool.name"
                [description]="tool.description"
                [icon]="tool.icon"
                [status]="tool.status"
                [isLocal]="tool.isLocal"
                [route]="tool.route"
                [category]="tool.category"
                (click)="onToolClick(tool)"
              ></app-tool-card>
            }
          </div>
        </div>
      </section>
    }
  `,
  styles: [],
})
export class CategorySectionComponent {
  @Input() category!: Category;
  @Input() tools: Tool[] = [];

  private static readonly colorMap: Record<string, { bg: string; color: string }> = {
    basic:        { bg: 'rgba(99,102,241,0.12)',  color: '#6366f1' },
    optimize:     { bg: 'rgba(245,158,11,0.12)',  color: '#f59e0b' },
    'convert-to': { bg: 'rgba(16,185,129,0.12)',  color: '#10b981' },
    'convert-from':{ bg: 'rgba(6,182,212,0.12)', color: '#06b6d4' },
    edit:         { bg: 'rgba(139,92,246,0.12)',  color: '#8b5cf6' },
    security:     { bg: 'rgba(239,68,68,0.12)',   color: '#ef4444' },
  };

  get iconBg(): string {
    return CategorySectionComponent.colorMap[this.category?.id]?.bg ?? 'rgba(99,102,241,0.12)';
  }

  get iconColor(): string {
    return CategorySectionComponent.colorMap[this.category?.id]?.color ?? '#6366f1';
  }

  getIconData(name: string) {
    return ICONS[name] || ICONS["file"];
  }

  constructor(private router: Router) {}

  onToolClick(tool: Tool) {
    this.router.navigateByUrl(tool.route);
  }
}
