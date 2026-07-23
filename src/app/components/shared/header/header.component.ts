import { Component, OnInit } from "@angular/core";

import { RouterModule } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isDark = false;

  ngOnInit() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      this.isDark = true;
    } else if (saved === "light") {
      this.isDark = false;
    } else {
      this.isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    this.applyTheme();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.applyTheme();
  }

  private applyTheme() {
    const root = document.documentElement;
    if (this.isDark) {
      root.setAttribute("data-theme", "dark");
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
}
