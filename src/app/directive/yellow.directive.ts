import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appYellow]'
})
export class YellowDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor='gold';
    el.nativeElement.style.color='white';
  }
  
}
