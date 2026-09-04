import { Component } from '@angular/core';

import {
  NgClass,
  NgStyle,
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  TitleCasePipe,
  registerLocaleData
} from '@angular/common';

import localeId from '@angular/common/locales/id';

import { FormsModule } from '@angular/forms';

import { HighlightDirective } from './highlight';

import { InitialsPipe } from './initials-pipe';

registerLocaleData(localeId);

@Component({
  selector: 'app-root',

  imports: [
    NgClass,
    NgStyle,
    FormsModule,

    // Directive Mandiri
    HighlightDirective,

    // Built-in Pipe
    CurrencyPipe,
    DatePipe,
    JsonPipe,
    TitleCasePipe,

    // Custom Pipe
    InitialsPipe
  ],

  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {

  // =========================
  // NGCLASS
  // =========================

  isSpecial = true;

  toggleSpecial() {
    this.isSpecial = !this.isSpecial;
  }


  // =========================
  // NGSTYLE
  // =========================

  isBlue = true;

  get currentStyles() {
    return {
      color: 'white',
      backgroundColor: this.isBlue ? 'blue' : 'red',
      fontSize: '20px',
      padding: '15px',
      fontWeight: 'bold',
    };
  }

  toggleStyle() {
    this.isBlue = !this.isBlue;
  }


  // =========================
  // NGMODEL
  // =========================

  name = '';


  // =========================
  // HIGHLIGHT DIRECTIVE
  // =========================

  highlightColor = '#B2EBF2';


  // =========================
  // BUILT-IN PIPE
  // =========================

  customer = 'pt indo batam';

  total = 1_250_000;

  issuedAt = new Date();

  invoice = {
    nomor: 'INV-001',
    status: 'Lunas'
  };


  // =========================
  // CUSTOM PIPE
  // =========================

  user = {
    name: 'Sheren Maybeline'
  };

}