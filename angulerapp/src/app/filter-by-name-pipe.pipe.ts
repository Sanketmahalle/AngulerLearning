import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipePipe implements PipeTransform {

  transform(users: any[], searchName: string): any[] {
    if (!searchName) {
      return users;
    }
    searchName = searchName.toLowerCase();
    return users.filter(user => user.name.toLowerCase().indexOf(searchName) !== -1);
  }

}
