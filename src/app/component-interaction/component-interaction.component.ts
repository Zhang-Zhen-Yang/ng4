import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, ComponentFactoryResolver } from '@angular/core';
import {InteractionOneComponent} from './interaction-one/interaction-one.component'
import {AdHostDirective } from './ad-host.directive'
import { DymanicWidgetComponent } from '../dymanic-widget/dymanic-widget.component'

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
  @ViewChild(AdHostDirective) host;
  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

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

    //
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(DymanicWidgetComponent);
    let viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    /*componentRef.instance.data = {head:'1223456',container:'cccc'};
    console.debug(componentRef);*/
    //console.log(viewContainerRef);

  }
  parentDefaultFunction(){
    alert('parentFunction');
  }

  

}
