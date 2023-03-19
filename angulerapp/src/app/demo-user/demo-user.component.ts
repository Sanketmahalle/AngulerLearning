import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-demo-user',
  templateUrl: './demo-user.component.html',
  styleUrls: ['./demo-user.component.css']
})
export class DemoUserComponent implements OnInit {
  set: Object;

  constructor(private userdata:UserDataService,private activatedR:ActivatedRoute) { }

  ngOnInit() {
    let id =  this.activatedR.snapshot.params['id'];

    this.userdata.getUsers(). subscribe(res => {

      this.set = res;
      console.log('User Deatils', res);
      
  })

}

}
