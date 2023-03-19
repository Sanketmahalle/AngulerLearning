import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { AdminlistComponent } from './adminlist/adminlist.component';

const adminRoutes: Routes=[
  {path:'',component:AdminlistComponent}
]

@NgModule({
  declarations: [AdminComponent, AdminlistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule {
  constructor(){
    console.log('adminModule');
    
  }
 }
