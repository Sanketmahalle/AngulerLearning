import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/my-service.service';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.css']
})
export class Content1Component implements OnInit {
  users: any[];

product : {};

urlnamesearch:string='';

joke: any;
questions: any;

  constructor(private _userData:MyserviceService) { }

  ngOnInit() {
   this.product = this._userData.products


    this._userData.getUsers().subscribe((data)=>{     
      this.users = data;
    });
   


    this._userData.getJoke().subscribe(data => {
      this.joke = data;
    });
    this._userData.getQuestions().subscribe(data => {
      this.questions = data.results;
    });
  }

}
