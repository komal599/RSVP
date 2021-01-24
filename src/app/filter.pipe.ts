import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any, input: any): any {
  //   if (input) {
  //     return value.filter((val:any) => val.indexOf(input) >= 0);
     
  //   } else {
  //     return value;
  //   }
  // }
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().match(searchText);
    });
  }
  // transform(value: any, args?: any): any {
  //   // added code
  //   if(args == null){
  //     return value;
  //    }
  //  // added code
  
  //    return value.filter(
  //      (item: any) => item.first_name.toLocaleLowerCase().indexOf(args.toLowerCase()) > -1
  //   );
   }

