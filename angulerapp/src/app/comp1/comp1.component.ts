import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  user = {
    name: '',
    email: ''
  };

  
  submitted = false;
  userName;
  // DI 
  constructor(private _utilityService: UtilityService) {

    this._utilityService.userName.subscribe(res => {
      console.log('data comming from subject', res)
      this.userName = res;
    }, err => {
      console.log('error occured', err);
    })

   }

   submitForm() {
    this.submitted = true;
    const user = {
      name: this.user.name,
      email: this.user.email
    };
    this._utilityService.setUser(user);
  }

  ngOnInit() {

  }

  updateUserName(uname)
  {
    this.userName = uname.value;
    console.log(uname.value);

    this._utilityService.userName.next(uname.value);
  }
}
