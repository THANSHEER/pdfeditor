import { Component } from "@angular/core";

import { RouterModule } from "@angular/router";
import { MainComponent } from "./main/main";
import { PrivacyBannerComponent } from "./privacy-banner/privacy-banner";

@Component({
  selector: "app-homepage",
  standalone: true,
  imports: [RouterModule, MainComponent, PrivacyBannerComponent],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class HomepageComponent {}
