import { Component, OnInit } from '@angular/core';
import { trigger,state,style,animate,transition} from '@angular/animations'

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    //1
    trigger('ani',[
      state('inactive',style({
        transform:'scale(1,1)'
      })),
      state('active',style({
        transform:'scale(1.1,1.1)'
      })),
      //可以合并为一个
      //transition('inactive=>active,active=>inactive',animate('1s linear')),
      transition('active<=>inactive',animate('1s linear')),
      /*transition('inactive=>active',animate('1s linear')),
      transition('active=>inactive',animate('1s linear'))*/
    ]),

    //2
    trigger('useStyleInAnime',[
      state('inactive',style({
        transform:'scale(1,1)'
      })),
      state('active',style({
        transform:'scale(1.1,1.1)'
      })),
      transition('inactive<=>active',[
        style({marginLeft:'200px'}),
        animate('1s ease-in')
      ]),
    ]),

    //3
    trigger('voidAni',[
      state('in',style({
        transform:'translate(50%,0)'
      })),
      transition('void=>*',[
        style({transform:'translate(-100%,0)'}),
        animate('1s')]),
      transition('*=>void',[
        style({transform:'translate(100%,0)'}),
        animate('1s')
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {
  anistate = 'inactive'
  useStyleInAnimeState='inactive'
  voidAniState='in'
  threeShow=false
  constructor() { }

  ngOnInit() {

  }
  setAnistate(){
    this.anistate = this.anistate=='inactive'?'active':'inactive';
  }
  toggleUseStyleInAnimeState(){
    this.useStyleInAnimeState = this.useStyleInAnimeState=='inactive'?'active':'inactive';
  }
  toggleVoidAniState(){
    this.threeShow = !this.threeShow;
  }

}
