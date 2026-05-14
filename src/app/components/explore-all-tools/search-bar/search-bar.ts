import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-search-bar",
  standalone: true,
  imports: [],
  template: `
    <div class="search-shell">
      <div class="search-icon" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <input
        type="text"
        class="focus-ring"
        [placeholder]="placeholder"
        [value]="value"
        (input)="onInput($event)"
      />
    </div>
  `,
  styleUrl: './search-bar.css',
})
export class SearchBarComponent {
  @Input() placeholder: string =
    "Search for a tool (e.g. merge, word, rotate)...";
  @Input() value = "";
  @Output() search = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.search.emit(input.value);
  }
}
