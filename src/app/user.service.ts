import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public name:string = 'apple'
  public value:number = 0;
  constructor() { }
  setName(name:string):void{
    this.name = name;
    this.value += 1;
  }

}
