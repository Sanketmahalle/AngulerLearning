import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(value: any, searchTerm: any): any {
  //   return value.filter(function(searchh){
  //     return searchh.name.toLowerCase().indexOf(searchTerm.toLowerCase())>-1
  //   });
  // }

  transform(users: any[], nameSearch: string): any[] {
    if (!users || !nameSearch) {
      return users;
    }
    
    return users.filter(user => user.name.toLowerCase().includes(nameSearch.toLowerCase()));
  }
}
