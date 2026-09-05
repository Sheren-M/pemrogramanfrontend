import {
  Directive,
  ElementRef,
  Input,
  OnChanges
} from '@angular/core';

@Directive({
  selector: '[appAmountColor]',
  standalone: true
})
export class AmountColor implements OnChanges {

  @Input() appAmountColor!: number;

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    if (this.appAmountColor <= 100000) {
      this.el.nativeElement.style.color = 'green';
    } else if (this.appAmountColor <= 300000) {
      this.el.nativeElement.style.color = 'orange';
    } else {
      this.el.nativeElement.style.color = 'red';
    }
  }
}