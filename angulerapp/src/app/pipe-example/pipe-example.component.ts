import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  users: any[];

  price: number =7000;
todaysDate= new Date();
countLength:number=500;
employee={
  empid: '1' , empname: 'shree'
}
  constructor() { }

  ngOnInit() {
    console.log(this.todaysDate);
    
  }

}
