import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICONS } from '../../../data/icons';
import { SafeHtmlPipe } from '../../../pipes/safe-html.pipe';

@Component({
  selector: 'app-privacy-banner',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './privacy-banner.component.html',
  styleUrl: './privacy-banner.component.scss',
})
export class PrivacyBannerComponent {
  getIconData(name: string) {
    return ICONS[name] || ICONS['file'];
  }
  pillars = [
    {
      icon: "server-off",
      badge: "Client Side",
      title: "Zero server contact",
      description: "Your PDF files are processed entirely inside your browser. They never leave your device — not even for a millisecond.",
    },
    {
      icon: "eye-off",
      badge: "No Tracking",
      title: "Completely private",
      description: "No accounts. No analytics on your files. No upload logs. What you do with your PDFs stays between you and your browser.",
    },
    {
      icon: "zap",
      badge: "Instant",
      title: "No wait times",
      description: "No upload queues. No server bottlenecks. Processing happens at browser speed — results are ready in seconds.",
    },
    {
      icon: "layers",
      badge: "Unlimited",
      title: "No file limits",
      description: "Process documents of any size. No restrictions on page counts or file dimensions — all handled right in your browser.",
    },
  ];
}

