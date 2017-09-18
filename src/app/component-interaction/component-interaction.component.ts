import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import {InteractionOneComponent} from './interaction-one/interaction-one.component'

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit, AfterViewInit {
  @ViewChild(InteractionOneComponent) childComponent:Array<InteractionOneComponent>;
  @ViewChild('interactionOne1') childComponentOne1:InteractionOneComponent;
  @ViewChild('interactionOne2') childComponentOne2:InteractionOneComponent;
  @ViewChild('apple_pen') applePen:TemplateRef<any>;
  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      //alert(typeof this.childComponent);
      console.debug(this.childComponent[1]);
      //this.childComponent[1].oneDefaultFunction();
      this.childComponentOne2.oneDefaultFunction()
    },1000)

    console.debug(this.applePen);
  }
  parentDefaultFunction(){
    alert('parentFunction');
  }

  

}
