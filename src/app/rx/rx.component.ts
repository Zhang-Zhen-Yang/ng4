import { Component, OnInit } from '@angular/core';
//import Rx from 'rxjs/Rx';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';

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
    let timer = Observable.interval(1000).take(5),
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
  

  ngOnInit() {
    Observable.of(1,2,3).map(x => x + '!!!').subscribe((item)=>{
      console.debug(item);
    });

    //this.concat();
    this.empty();
    

  }

}
