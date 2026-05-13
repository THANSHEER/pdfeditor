import { AfterViewChecked, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { categoriesData } from '../../../data/categories';
import { ICONS } from '../../../data/icons';
import { SafeHtmlPipe } from '../../../pipes/safe-html';

@Component({
  selector: 'app-category-nav',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './category-nav.html',
  styleUrl: './category-nav.css'
})
export class CategoryNavComponent implements AfterViewChecked {
  @Input() selectedCategoryId: string = 'all';
  @Input() toolCounts: Record<string, number> = {};
  @Input() totalTools = 0;
  @Output() selectCategory = new EventEmitter<string>();
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLElement>;

  private lastScrolledId = '';

  categories = [
    { id: 'all', name: 'All Tools', icon: 'layers' },
    ...categoriesData
  ];

  getIconData(name: string) {
    return ICONS[name] || ICONS['file'];
  }

  getIcon(icon: string): string {
    if (icon === 'minimize') return 'minimize-2';
    return icon;
  }

  getToolCount(categoryId: string): number {
    return categoryId === 'all' ? this.totalTools : (this.toolCounts[categoryId] ?? 0);
  }

  ngAfterViewChecked() {
    if (this.selectedCategoryId !== this.lastScrolledId) {
      this.lastScrolledId = this.selectedCategoryId;
      const activeItem = this.scrollContainer?.nativeElement?.querySelector('[data-active="true"]');
      if (activeItem) {
        activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }

  onSelectCategory(id: string) {
    this.selectCategory.emit(id);
  }
}
