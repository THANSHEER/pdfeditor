import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ICONS } from '../../../data/icons';
import { SafeHtmlPipe } from '../../../pipes/safe-html';
import { Tool } from '../../../data/tools';

@Component({
  selector: 'app-tool-card',
  standalone: true,
  imports: [SafeHtmlPipe],
  template: `
    <button
      type="button"
      class="tool-card focus-ring"
      (click)="navigate()"
      [style.--tool-color]="cardColor"
      [style.--tool-color-rgb]="cardColorRgb"
    >
      <span class="tool-card-top">
        <span class="tool-icon" aria-hidden="true">
          <svg [attr.viewBox]="getIconData(icon).viewBox" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" [innerHTML]="getIconData(icon).path | safeHtml"></svg>
        </span>

        <span class="tool-badges">
          @if (isLocal) {
            <span class="tool-badge local">Local</span>
          }
          @if (status === 'beta') {
            <span class="tool-badge beta">Beta</span>
          }
          @if (status === 'coming_soon') {
            <span class="tool-badge soon">Soon</span>
          }
        </span>
      </span>

      <span class="tool-card-body">
        <span class="tool-title">{{ title }}</span>
        <span class="tool-description">{{ description }}</span>
      </span>
    </button>
  `,
  styleUrl: './tool-card.css'
})
export class ToolCardComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
  @Input() status?: string;
  @Input() isLocal: boolean = true;
  @Input() showLocalBadge: boolean = true;
  @Input() route?: string;
  @Input() category: string = 'basic';

  cardColor = '#6366f1';
  cardColorRgb = '99, 102, 241';

  private readonly colorMap: Record<string, { hex: string; rgb: string }> = {
    'basic': { hex: '#6366f1', rgb: '99, 102, 241' },
    'optimize': { hex: '#f59e0b', rgb: '245, 158, 11' },
    'convert-to': { hex: '#10b981', rgb: '16, 185, 129' },
    'convert-from': { hex: '#06b6d4', rgb: '6, 182, 212' },
    'edit': { hex: '#8b5cf6', rgb: '139, 92, 246' },
    'security': { hex: '#ef4444', rgb: '239, 68, 68' }
  };

  constructor(private readonly router: Router) {}

  getIconData(name: string) {
    return ICONS[name] || ICONS['file'];
  }

  ngOnInit() {
    const color = this.colorMap[this.category] || this.colorMap['basic'];
    this.cardColor = color.hex;
    this.cardColorRgb = color.rgb;
  }

  navigate() {
    if (this.route) {
      void this.router.navigateByUrl(this.route);
    }
  }
}
