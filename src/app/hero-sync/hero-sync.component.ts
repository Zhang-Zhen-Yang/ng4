import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-hero-sync',
  //templateUrl: './hero-sync.component.html',
  template:`
    <p>Message:{{message$ | async }}</p>
    {{ apple|titlecase }}
  `,
  styleUrls: ['./hero-sync.component.css']
})
export class HeroSyncComponent implements OnInit {

  message$: Observable<number>;
  apple = 'apple-banana'
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ]
  constructor() {
    this.render();
   }

  ngOnInit() {
  }
  render(){
    this.message$ = Observable.interval(500)
    /*.map(i => this.message$[i])
    .take(this.messages.length);*/
  }

}