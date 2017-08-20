import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyHero',
  pure:false
})
export class FlyHeroPipe implements PipeTransform {

  transform(value: [{name,sex}], args?: string): any {
    return value.filter((item)=>{ return item.sex == args });
  }

}
