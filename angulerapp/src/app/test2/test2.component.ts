import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
 @Input() child : string;


 
  constructor() { }

  ngOnInit() {
    console.log(this.child);
    
  }

}
