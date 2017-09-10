import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UserService } from './user.service'
import  { HttpClient } from '@angular/common/http'

import { HeroSyncComponent } from './hero-sync/hero-sync.component'

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
export class AppComponent implements OnInit,AfterViewInit{
  title = 'app';
  myState = 'inactive'
  src ='http://img.dongman.fm/subject/4598b34167e500f140f2002bb126af24.jpeg';
  language:string[] = ['java','php','python','go','c','kotlin'];
  lala:any = new Map([['one','apple'],['two','banane'],['three','flower'],['four','house']]);

  hero:object[] = [{name:'星之守千秋',sex:'女'},{name:'雨野景太',sex:'男'},{name:'天道花怜',sex:'女'},{name:'上原祐',sex:'男'},{name:'亚玖璃',sex:'女'}]
  heroSex:string = '男';
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
    //alert('init');
    this.http.get('http://192.168.1.104:3000/api/items').subscribe(data=>{
      alert(JSON.stringify(data));
    })
  }
  
  @ViewChild(HeroSyncComponent) appHeroSync:HeroSyncComponent;
  ngAfterViewInit(){
    /*setTimeout(()=>{
      this.appHeroSync.apple = '天道花怜（CV.金元寿子）、星之守千秋（CV.石见舞菜香）、亚玖璃（CV.大久保瑠美）'; 
    },1000)  */
    
  }
  lalaKeys():string[]{
    //return this.lala.keys();
    return this.language;
  }
  lalaClick(index):void{
    this.language[index]='星之守千秋';
  }
  changeSex(){
    this.heroSex = this.heroSex=='女'?'男':'女';
  }
  addHero(){
    this.hero.push({
      name:'三角瑛一',
      sex:'男'
    })
    /*this.hero = this.hero.concat([{
      name:'三角瑛一',
      sex:'男'
    }])
    this.hero.splice(0,0,{
      name:'三角瑛一',
      sex:'男'
    });*/
  }
}
