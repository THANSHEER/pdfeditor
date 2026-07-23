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
      iconBg: "bg-indigo-50 dark:bg-indigo-500/10",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      accentBadge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300",
      badge: "Client Side",
      title: "Zero server contact",
      description: "Your PDF files are processed entirely inside your browser. They never leave your device — not even for a millisecond.",
    },
    {
      icon: "eye-off",
      iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      accentBadge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
      badge: "No Tracking",
      title: "Completely private",
      description: "No accounts. No analytics on your files. No upload logs. What you do with your PDFs stays between you and your browser.",
    },
    {
      icon: "zap",
      iconBg: "bg-amber-50 dark:bg-amber-500/10",
      iconColor: "text-amber-600 dark:text-amber-400",
      accentBadge: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
      badge: "Instant",
      title: "No wait times",
      description: "No upload queues. No server bottlenecks. Processing happens at browser speed — results are ready in seconds.",
    },
    {
      icon: "layers",
      iconBg: "bg-rose-50 dark:bg-rose-500/10",
      iconColor: "text-rose-600 dark:text-rose-400",
      accentBadge: "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300",
      badge: "Unlimited",
      title: "No file limits",
      description: "Process documents of any size. No restrictions on page counts or file dimensions — all handled right in your browser.",
    },
  ];
}
