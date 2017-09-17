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
    'http://imgs.aixifan.com/live/1505618887824/1505618887824.jpg'
  ]
  imgIndex = 0
  constructor() { }

  ngOnInit() {

  }
  computedImg(){
    return this.imgUrl[this.imgIndex];
  }
  setNext(){
    this.imgIndex = (this.imgIndex + 1)%this.imgUrl.length;
  }

}
