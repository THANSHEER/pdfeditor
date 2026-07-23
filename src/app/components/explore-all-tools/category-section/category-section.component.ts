import { Component, Input } from "@angular/core";

import { ToolCardComponent } from "../../explore-all-tools/tool-card/tool-card.component";
import { ICONS } from "../../../data/icons";
import { SafeHtmlPipe } from "../../../pipes/safe-html.pipe";
import { Tool } from "../../../data/tools";
import { Category } from "../../../data/categories";

@Component({
  selector: "app-category-section",
  standalone: true,
  imports: [ToolCardComponent, SafeHtmlPipe],
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.scss',
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
