import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users()
  {
    [{
      name:'sanket',age:25, eamil: 'sanket@gmail.com'
    }]
  }
}
