import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let {repeat,length} = args,total = '';
    for(let i = 0;i<repeat;i++){
      total += value;
    }
    return total.slice(0,length);
    //return value;
  }

}
