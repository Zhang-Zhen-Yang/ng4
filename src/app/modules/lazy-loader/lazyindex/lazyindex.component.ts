import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazyindex',
  templateUrl: './lazyindex.component.html',
  styleUrls: ['./lazyindex.component.css']
})
export class LazyindexComponent implements OnInit {
  imgUrl:Array<string> = [
    'http://imgs.aixifan.com/live/1505640344421/1505640344421.jpg',
    'http://imgs.aixifan.com/live/1505618848053/1505618848053.jpg',
    'http://imgs.aixifan.com/live/1505618851148/1505618851148.jpg',
    'http://imgs.aixifan.com/live/1505618856667/1505618856667.jpg',
    'http://imgs.aixifan.com/live/1505618858448/1505618858448.jpg',
    'http://imgs.aixifan.com/live/1505618860970/1505618860970.jpg',
    'http://imgs.aixifan.com/live/1505618864365/1505618864365.jpg',
    'http://imgs.aixifan.com/live/1505618865382/1505618865382.jpg',
    'http://imgs.aixifan.com/live/1505618866934/1505618866934.jpg',
    'http://imgs.aixifan.com/live/1505618887824/1505618887824.jpg',
    'http://imgs.aixifan.com/live/1505551482146/1505551482146.jpg'
  ]
  imgMap:object={
    one:'初音',
    tow:'心春',
    three:'久美子'
  }
  myUrl={
    a:{
      b:{
        c:'hhhhhh'
      }
    }
  }
  myUrlLink(){
    return this.myUrl.a.b.c;
  }
  imgMapKeys():Array<string>{
    return Object.keys(this.imgMap||{});
  }
  imgIndex:number = 0
  constructor() { }

  ngOnInit() {

  }
  computedImg():string{
    return this.imgUrl[this.imgIndex];
  }
  setNext():void{
    this.imgIndex = (this.imgIndex + 1)%this.imgUrl.length;
    this.imgMap ={...this.imgMap,four:'蕾姆'};
  }

}
