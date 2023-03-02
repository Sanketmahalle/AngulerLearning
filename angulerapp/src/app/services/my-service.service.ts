import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  showAge;
  constructor(private http:HttpClient) { }

  ageCalculator(age: any) : number
  {
    if (age) {
      const convertAge = new Date(age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      return this.showAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
    }
  }
  print() {
    alert('print method called');
  }
url= 'https://jsonplaceholder.typicode.com/users';
getUsers() :Observable<any>{
    return this.http.get<any[]>(this.url);
  }
  // products=[
  //   { name: 'computer', id:101  },
  //   { name: 'tv', id:102  },
  //   { name: 'laptop', id:103  },
  // ]
  display() {
    alert ('display called');
  }
}