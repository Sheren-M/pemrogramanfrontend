import { Component } from '@angular/core';
import { ContactUs } from '../contact-us/contact-us';

@Component({
  selector: 'app-home-page',
  imports: [ContactUs],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}