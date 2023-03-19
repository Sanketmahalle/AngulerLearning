import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-demo-user-details',
  templateUrl: './demo-user-details.component.html',
  styleUrls: ['./demo-user-details.component.css']
})
export class DemoUserDetailsComponent implements OnInit {
user:any;
  constructor(private activatedR:ActivatedRoute,private userdata:UserDataService) { }

  ngOnInit() {
let id =  this.activatedR.snapshot.params['id'];
this.userdata.getPostById(id) .subscribe(u=>{
this.user=u;
})
  }

}
