import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  user: any;
  userName;
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res => {
      console.log('comp4', res);
      this.userName = res;
    });
   }

  ngOnInit() {
    this._utilityService.getUser().subscribe(user => {
      this.user = user;
    });
  }
  updateUser() {
    this._utilityService.setUser(this.user);
  }
  updateUserName(uname)
  {
    this.userName = uname.value;
    console.log(uname.value);
    this._utilityService.userName.next(uname.value);
  }
}
