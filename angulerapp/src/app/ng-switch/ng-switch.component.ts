import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/my-service.service';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
 data =[];
  constructor(private _userData:MyserviceService) { }

     
  ngOnInit() {
this.data  = this._userData.products

  }

}
