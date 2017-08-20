import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {

  constructor(private e:ElementRef) { 
    e.nativeElement.style.backgroundColor = 'gold';
    
  }
  
}
