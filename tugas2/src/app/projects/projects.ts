import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly projects = [
    {
      title: 'SaaS Dashboard UI',
      description: 'A clean analytics dashboard design focused on clarity, data hierarchy, and conversion-friendly actions.',
      tags: ['UI/UX', 'Dashboard', 'Angular'],
    },
    {
      title: 'E-Commerce Landing Page',
      description: 'A premium storefront concept built to increase trust, showcase products, and guide user purchase decisions.',
      tags: ['Marketing', 'Branding', 'Responsive'],
    },
    {
      title: 'Portfolio Showcase',
      description: 'A minimal portfolio experience emphasizing personal branding, story, and polished modular content blocks.',
      tags: ['Portfolio', 'Web App', 'Design'],
    },
  ];
}
