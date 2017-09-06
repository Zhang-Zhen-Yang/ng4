import { Component, OnInit } from '@angular/core';
//import Rx from 'rxjs/Rx';
import { Observable} from 'rxjs/Observable';
import { Notification} from 'rxjs/Notification';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/never';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/concat';
import 'rxjs/add/operator/concatAll'
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/audit';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/operator/debounce'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/operator/defaultIfEmpty'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/delayWhen'
import 'rxjs/add/operator/dematerialize'
import 'rxjs/add/operator/distinct'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/distinctUntilKeyChanged' 
import 'rxjs/add/operator/elementAt'
import 'rxjs/add/operator/every'
import 'rxjs/add/operator/exhaust'
import 'rxjs/add/operator/exhaustMap'
import 'rxjs/add/operator/expand'
import 'rxjs/add/operator/find'
import 'rxjs/add/operator/findIndex'
import 'rxjs/add/operator/first'
import 'rxjs/add/operator/groupBy'
import 'rxjs/add/operator/reduce'

@Component({
  selector: 'app-rx',
  //templateUrl: './rx.component.html',
  template:`
    <p>
      rx works!
      <button md-button color="primary">Primary</button>
            
    </p>
    <p>
      <button md-raised-button color="primary" (click)="combineLatest()">combineLatest</button>
    </p>
    <p>
      <button md-raised-button color="primary" (click)="concat()">concat</button>
    </p>
    <p>
      <button md-raised-button color="primary" (click)="create()">create</button>
    </p>

  `,
  styleUrls: ['./rx.component.css']
})
export class RXComponent implements OnInit {

  constructor() { }

  combineLatest():void{
    var weight = Observable.timer(1000,5000);
    var height = Observable.timer(2000,5000);
    var deepth = Observable.interval(5000);
    var bmi = Observable.combineLatest(weight, height,deepth, (w, h, d) => { return [w,h,d].join(',');/*w / (h * h)*/});
    bmi.subscribe(x => console.log('BMI is ' + x));
  }

  concat():void{
    let timer = Observable.interval(1000).map((i)=>'concat').take(5),
      sequence =Observable.range(1,10);
    Observable.concat(timer,sequence).subscribe((x)=>{
      console.debug(x);
    });
  }

  create():void{
    let createObservable = Observable.create((observer)=>{
     let i = 0, 
     interval = setInterval(()=>{
       observer.next(i++);
     },1000)

     return ()=>{
       clearInterval(interval);
     }
    });

    let myCreateObserver = createObservable.subscribe((x)=>{
      console.log(x);
    })
    setTimeout(()=>{
      myCreateObserver.unsubscribe();
    },5000)
  }


  empty():void{
    var interval = Observable.interval(1000);
    var result = interval.mergeMap(x =>
      x % 2 === 1 ? Observable.of('a', 'b', 'c') : Observable.empty().startWith(9999)
    );
    result.subscribe(
      x => console.log(x),
      e => console.log('error'),
      ()=> console.log('complete')
    );
  }
  
  oFrom():void{
    let pro = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        reject('dddddd');
      },2000)
    });
    Observable.from(pro).subscribe(
      (x)=>{ console.log(x)},
      (e) =>{console.log('error'+e)},
      () =>{console.log('complete')}
    )
  }
  
  merge():void{
    /*var clicks = Observable.fromEvent(document, 'click');
    var timer = Observable.interval(1000);
    var clicksOrTimer = Observable.merge(clicks, timer);
    clicksOrTimer.subscribe(x => console.log(x));*/

    var timer1 = Observable.interval(1000).take(10).mergeMap(x=>x+'timer1');
    var timer2 = Observable.interval(2000).take(6);
    var timer3 = Observable.interval(500).take(10);
    var concurrent = 2; // the argument
    var merged = Observable.merge(timer1, timer2, timer3, concurrent);
    merged.subscribe(x => console.log(x));

  }

  never():void{
    Observable.never().startWith(7).subscribe((x)=>{
      console.log(x);
    })
  }

  range():void{
    var numbers = Observable.range(5, 5);
    numbers.subscribe(x => console.log(x));
  }

  Othrow(){
    var interval = Observable.interval(1000);
    var result = interval.mergeMap(x =>
      x === 13 ?
        Observable.throw('Thirteens are bad') :
        Observable.of('a', 'b', 'c')
    );
    result.subscribe(x => console.log(x), e => console.error(e));
  }

  zip(){
    let age$ = Observable.of<number>(27, 25, 29, 30);
    let name$ = Observable.of<string>('Foo', 'Bar', 'Beer','bee');
    let isDev$ = Observable.of<boolean>(true, true, false,true);
    
    Observable
        .zip(age$,
             name$,
             isDev$,
             (age: number, name: string, isDev: boolean) => ({ age, name, isDev }))
        .subscribe(x => console.log(x));
  }

  audit():void{
    var clicks = Observable.fromEvent(document, 'click');
    var result = clicks.audit(ev => Observable.interval(1000));
    result.subscribe(x => console.log(x));
  }

  buffer(){
    var clicks = Observable.fromEvent(document, 'click');
    var interval = Observable.interval(1000);
    var buffered = interval.buffer(clicks);
    buffered.subscribe(x => console.log(x))
  }

  bufferCount(){
    var clicks = Observable.interval(1000);
    var buffered = clicks.bufferCount(3,1);
    buffered.subscribe(x => console.log(x));
  }

  concatAll(){
    var clicks = Observable.fromEvent(document, 'click');
    var higherOrder = clicks.map(ev => Observable.interval(1000).take(4));
    var firstOrder = higherOrder.concatAll();
    firstOrder.subscribe(x => console.log(x));
  }
  
  combineAll(){
    var clicks = Observable.fromEvent(document, 'click');
    var higherOrder = clicks.map(ev =>
      Observable.interval(Math.random()*2000).take(5)
    ).take(3);
    var result = higherOrder.combineAll();
    result.subscribe(x => console.log(x));
  }

  throttle(){
    var clicks = Observable.fromEvent(document, 'click');
    clicks.throttle(ev=>Observable.interval(1000)).subscribe((i)=>{
      console.log(i);
    })
  }
  throttleTime(){
    var clicks = Observable.fromEvent(document, 'click');
    clicks.throttleTime(1000).subscribe((i)=>{
      console.log(i);
    })
  }

  debounce(){
    var clicks = Observable.fromEvent(document, 'click');
    var result = clicks.debounce(() => Observable.interval(1000));
    result.subscribe(x => console.log(x));
  }

  debounceTime(){
    var clicks = Observable.fromEvent(document, 'click');
    var result = clicks.debounceTime(1000);
    result.subscribe(x => console.log(x));
  }

  defaultIfEmpty(){
    var clicks = Observable.fromEvent(document, 'click');
    var clicksBeforeFive = clicks.takeUntil(Observable.interval(5000));
    var result = clicksBeforeFive.defaultIfEmpty('no clicks');
    result.subscribe(x => console.log(x));
  }

  delay(){
    var clicks = Observable.fromEvent(document, 'click');
    var result = clicks.delay(1000);
    result.subscribe(x => console.log(x));
  }

  delayWhen(){
    var clicks = Observable.fromEvent(document, 'click');
    var delayedClicks = clicks.delayWhen(event =>{
        let time = Math.random() * 5000;
        console.debug(time);
        return Observable.interval(time)
      }
    );
    delayedClicks.subscribe(x => console.log(x));
  }

  dematerialize(){
    var notifA = new Notification('N', 'A');
    var notifB = new Notification('N', 'B');
    var notifE = new Notification('E', void 0,
      new TypeError('x.toUpperCase is not a function')
    );
    var materialized = Observable.of(notifA, notifB, notifE);
    var upperCase = materialized.dematerialize();
    upperCase.subscribe(x => console.log(x), e => console.error(e));
  }

  distinct(){
    Observable.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
    .distinct()
    .subscribe(x => console.log(x)); // 1, 2, 3, 4
  }

  distinctUntilChanged(){

    Observable.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
    .distinctUntilChanged()
    .subscribe(x => console.log(x)); //
  }

  distinctUntilKeyChanged(){
    interface Persion{
      name:string,
      age:number
    }
    Observable.of<Persion>(
      {name:'小扬',age:27},
      {name:'大扬',age:30},
      {name:'小红',age:20},
      {name:'小扬',age:27},
      {name:'小扬',age:27},
      {name:'小扬',age:27},
      {name:'小扬',age:27},
      {name:'小扬',age:27},
      {name:'大扬',age:30},
      {name:'小红',age:20}).distinctUntilKeyChanged('name').subscribe(x=>{
        console.debug(x);
      })
  }

  elementAt(){
    var clicks = Observable.fromEvent(document, 'click');
    var result = clicks.elementAt(2);
    result.subscribe(x => console.log(x));
  }

  every(){
    Observable.fromEvent(document,'click')
    .every(ev => ev['pageX'] > 500)
    .subscribe(x => console.log(x)); // -> false
  }

  exhaust(){
    var clicks = Observable.fromEvent(document, 'click');
    var higherOrder = clicks.map((ev) => Observable.interval(1000).take(5));
    var result = higherOrder.exhaust();
    result.subscribe(x => console.log(x));
  }

  exhaustMap(){
    var clicks = Observable.fromEvent(document, 'click');
    var result = clicks.exhaustMap((ev) => Observable.interval(1000).take(5));
    result.subscribe(x => console.log(x));
  }

  expand(){
    var clicks = Observable.fromEvent(document, 'click');
    var powersOfTwo = clicks
      .mapTo(1)
      .expand(x => Observable.of(2 * x).delay(1000))
      .take(10);
    powersOfTwo.subscribe(x => console.log(x));
  }

  find(){
    var clicks = Observable.fromEvent(document,'click');
    clicks.find(ev=> ev['pageX'] > 500).subscribe( e =>{
      console.debug(e);
    })
  }

  findIndex(){
    var clicks = Observable.fromEvent(document,'click');
    clicks.findIndex(ev=> ev['pageX'] > 500).subscribe( e =>{
      console.debug(e);
    })
  }

  groupBy(){
    Observable.of(
      {id: 1, name: 'aze1'},
      {id: 2, name: 'sf2'},
      {id: 2, name: 'dg2'},
      {id: 1, name: 'erg1'},
      {id: 1, name: 'df1'},
      {id: 2, name: 'sfqfb2'},
      {id: 3, name: 'qfs3'},
      {id: 2, name: 'qsgqsfg2'}
    )
    .groupBy(p => p.id)
    .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], []))
    .subscribe(p => console.log(p));
  }

  mergeMap(){
    var letters = Observable.of('a', 'b', 'c');
    var result = letters.mergeMap(x =>
      Observable.interval(1000).map(i => x+i)
    );
    result.subscribe(x => console.log(x));
  }

  ngOnInit() {
    Observable.of(1,2,3).map(x => x + '!!!').subscribe((item)=>{
      console.debug(item);
    });

    this.mergeMap(); 
  }

}
