import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionlistComponent } from './fashionlist/fashionlist.component';
import { FashiondetailsComponent } from './fashiondetails/fashiondetails.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FashionlistComponent,
    FashiondetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FashionModule { }
