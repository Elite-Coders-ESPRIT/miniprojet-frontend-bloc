import { Pipe, PipeTransform } from '@angular/core';
import {Bloc} from "../model/bloc";

@Pipe({
  name: 'filterByBlocName'
})
export class FilterByBlocNamePipe implements PipeTransform {

  transform(items: Bloc[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    return items.filter(item => {
      if (item.nomBloc != undefined) {
      return JSON.stringify(item.nomBloc).toLowerCase().includes(searchTerm.toLowerCase())
      }
      return item;
    });
  }

}
