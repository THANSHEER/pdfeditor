import { Component, Input } from "@angular/core";

import { ToolCardComponent } from "../../explore-all-tools/tool-card/tool-card";
import { ICONS } from "../../../data/icons";
import { SafeHtmlPipe } from "../../../pipes/safe-html";
import { Tool } from "../../../data/tools";
import { Category } from "../../../data/categories";

@Component({
  selector: "app-category-section",
  standalone: true,
  imports: [ToolCardComponent, SafeHtmlPipe],
  template: `
    @if (tools.length > 0) {
      <section [id]="category.id" class="category-section surface-panel">
        <div class="category-header">
          <div class="category-title-row">
            <div
              class="category-icon"
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
              <h2>{{ category.name }}</h2>
              <p>{{ category.description }}</p>
            </div>
          </div>
          <span class="tool-count">{{ tools.length }} tool{{ tools.length !== 1 ? "s" : "" }}</span>
        </div>

        <div class="tools-grid">
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
            ></app-tool-card>
          }
        </div>
      </section>
    }
  `,
  styleUrl: './category-section.css',
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

}
