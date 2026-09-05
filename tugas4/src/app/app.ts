import { Component } from '@angular/core';
import { Expense } from './models/expense.model';
import { RupiahPipe } from './pipes/rupiah-pipe';
import { CategoryPipe } from './pipes/category-pipe';
import { AmountColor } from './directives/amount-color';

@Component({
  selector: 'app-root',
  imports: [
    RupiahPipe,
    CategoryPipe,
    AmountColor
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  expenses: Expense[] = [
    {
      title: 'Beli Beras',
      category: 'food',
      amount: 200000
    },
    {
      title: 'Bayar Internet',
      category: 'utility',
      amount: 500000
    },
    {
      title: 'Nonton Bioskop',
      category: 'entertainment',
      amount: 150000
    },
    {
      title: 'Beli Kopi',
      category: 'food',
      amount: 50000
    }
  ];

  get totalExpense(): number {
    return this.expenses.reduce(
      (total, item) => total + item.amount,
      0
    );
  }
}