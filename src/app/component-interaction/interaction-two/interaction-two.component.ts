import { Component, OnInit, Host, Inject, forwardRef } from '@angular/core';
import { ComponentInteractionComponent } from '../component-interaction.component'

@Component({
  selector: 'app-interaction-two',
  templateUrl: './interaction-two.component.html',
  styleUrls: ['./interaction-two.component.css']
})
export class InteractionTwoComponent implements OnInit {
  parent:ComponentInteractionComponent
  constructor(@Host()@Inject(forwardRef(()=>ComponentInteractionComponent)) parent:ComponentInteractionComponent) {
    this.parent = parent;
  }

  ngOnInit() {
  }
  twoDefaultFunction(){
    this.parent.parentDefaultFunction();
    console.debug('towDefaultFunction');
  }

}
