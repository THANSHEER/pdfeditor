import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-search-bar",
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
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
