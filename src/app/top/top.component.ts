import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  @Output() myEvent = new EventEmitter<string>();
  bind:string = 'app'
  constructor() {

   }

  ngOnInit() {
  }
  topEmit(){
    alert('emit');
    this.myEvent.emit('mmm');
  }

}
