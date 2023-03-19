import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isLoggedInSubject = new Subject<boolean>();

  getIsLoggedIn() {
    return this.isLoggedInSubject.asObservable();
  }

  login(username: string, password: string) {
    // Perform login logic here
    const isLoggedIn = true;
    this.isLoggedInSubject.next(isLoggedIn);
  }

  logout() {
    // Perform logout logic here
    const isLoggedIn = false;
    this.isLoggedInSubject.next(isLoggedIn);
  }
}
