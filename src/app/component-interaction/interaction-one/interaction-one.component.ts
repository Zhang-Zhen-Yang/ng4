import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction-one',
  templateUrl: './interaction-one.component.html',
  styleUrls: ['./interaction-one.component.css']
})
export class InteractionOneComponent implements OnInit {
  myvalue:number = 0;
  constructor() { }

  ngOnInit() {
  }
  oneDefaultFunction(){
    console.debug('oneDefaultFunction');
    this.myvalue = 110;
  }

}
