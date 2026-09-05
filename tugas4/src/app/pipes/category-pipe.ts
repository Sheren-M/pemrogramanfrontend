import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  standalone: true
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    const categories: Record<string, string> = {
      food: 'Makanan',
      utility: 'Tagihan',
      entertainment: 'Hiburan'
    };

    return categories[value] ?? 'Lainnya';
  }

}