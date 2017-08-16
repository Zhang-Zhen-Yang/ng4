import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name:'mycolor'
})
export class Mycolor implements PipeTransform{
    transform(value:string):string{
        return `hello ${ value }`;
    }

}