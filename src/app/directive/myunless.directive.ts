import { Directive,TemplateRef,ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appMyunless]'
})
export class MyunlessDirective {
  hasView:boolean
  @Input() set appMyunless(condition:boolean){
    if(!condition&&!this.hasView){
      this.viewContainer.createEmbeddedView(this.temp);
      this.hasView = true;
    }else{
      this.viewContainer.clear();
      this.hasView = false;
    }

  }
  constructor(
    private temp:TemplateRef<any>,
    private viewContainer:ViewContainerRef
  ){}

}
