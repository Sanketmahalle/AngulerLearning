import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  

   userSubject = new Subject<any>();

  setUser(user: any) {
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.asObservable();
  }
  
 //userName = new Subject<any>(); // observable


 userName = new BehaviorSubject<any>('Codemind1122');
 constructor() { }
}
