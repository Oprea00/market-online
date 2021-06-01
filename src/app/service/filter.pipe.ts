import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {


  transform(value: any, input: any): any {
    if (input) {
       return value.filter((val: string ) => val.indexOf(input)) >= 0;
     } else {
       return value;
     }
    }

}