import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly stats = [
    { value: '3+', label: 'Years experience' },
    { value: '12', label: 'Projects launched' },
    { value: '100%', label: 'Client focus' },
  ];
}
