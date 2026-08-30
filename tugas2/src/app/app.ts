import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Projects } from './projects/projects';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, Projects, Footer],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
