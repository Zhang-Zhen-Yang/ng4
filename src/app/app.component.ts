import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'
import  { HttpClient } from '@angular/common/http'

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
export class AppComponent implements OnInit{
  title = 'app';
  myState = 'inactive'
  src ='http://img.dongman.fm/subject/4598b34167e500f140f2002bb126af24.jpeg';
  language:string[] = ['java','php','python','go','c','kotlin'];
  constructor(public user:UserService,public http: HttpClient){

  }
  changeState(){
    //alert('ddddd');
    this.myState = this.myState=='active'?'inactive':'active';
  }
  fromTop(data){
    alert(data)
  }

  //
  ngOnInit():void{
    alert('init');
    this.http.get('http://192.168.1.104:3000/api/items').subscribe(data=>{
      alert(JSON.stringify(data));
    })
  }
}
