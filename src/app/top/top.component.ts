import { Component, OnInit, EventEmitter, Output, Input, Host, forwardRef, Inject, ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service'
import { AppComponent } from '../app.component'


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  providers:[ ],
  encapsulation: ViewEncapsulation.Native
})
export class TopComponent implements OnInit {
  @Output() myEvent = new EventEmitter<string>();
  bind:string = 'app'
  link:string[] = ['首页','组件','依赖注入','路由','RxJs',]
  linkIndex:number = 0
  constructor(public user:UserService,@Host() @Inject(forwardRef(()=> AppComponent)) app:AppComponent) {
    app.title = 'orange';
   }

  ngOnInit() {
  }
  topEmit(){
    alert('emit');
    this.myEvent.emit('mmm');
  }
  setLinkActive(index:number){
    this.linkIndex = index;
  }
  setName(){
    this.user.setName('banana');
  }

}
