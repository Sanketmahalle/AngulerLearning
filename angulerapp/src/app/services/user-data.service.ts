import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpclient: HttpClient) { }
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  products(){
    [
      {name: 'laptop', id:101 },
      {name: 'tv', id:102 },
      {name: 'computer', id:103 }


    
    ]
  }
  getUsers()
  {
  return this.httpclient.get(this.apiUrl)
  }
}
