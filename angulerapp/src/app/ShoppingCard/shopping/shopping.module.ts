import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingLoginComponent } from './shopping-login/shopping-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppinghomeComponent } from './shopping-login/shoppinghome/shoppinghome.component';



@NgModule({
  declarations: [ShoppingLoginComponent, ShoppinghomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ]
})
export class ShoppingModule { }
