import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  @Output() myEvent = new EventEmitter<string>();
  bind:string = 'app'
  link:string[] = ['首页','组件','依赖注入','路由','RxJs',]
  linkIndex:number = 0
  constructor() {

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

}
