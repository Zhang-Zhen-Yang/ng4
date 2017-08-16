import { Component } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('heroState',[
      state('inactive',style({
        backgroundColor:'red',
        transform:'scale(1)'
      })),
      state('active',style({
        backgroundColor:'yellow',
        transform:'scale(1.1)'
      })),
      transition('inactive=>active',animate('100ms ease-in')),
      transition('active=>inactive',animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'app';
  myState = 'inactive'
  src ='http://img.dongman.fm/subject/4598b34167e500f140f2002bb126af24.jpeg';
  language:string[] = ['java','php','python','go','c','kotlin'];
  changeState(){
    //alert('ddddd');
    this.myState = this.myState=='active'?'inactive':'active';
  }
  fromTop(data){
    alert(data)
  }
}
