import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { Test2Component } from './test2/test2.component';
import { CardComponent } from './card/card.component';
import { PassWordGeneratorComponent } from './pass-word-generator/pass-word-generator.component';
import { PassGeneratorComponent } from './pass-generator/pass-generator.component';
import { NgForPracticeComponent } from './ng-for-practice/ng-for-practice.component';
import { NgForpractice1Component } from './ng-forpractice1/ng-forpractice1.component';
import { NgForProductDataComponent } from './ng-for-product-data/ng-for-product-data.component';
import { NgIfPracticeComponent } from './ng-if-practice/ng-if-practice.component';
import { NgIfUserDataComponent } from './ng-if-user-data/ng-if-user-data.component';
import { NgForNgIfPracticeComponent } from './ng-for-ng-if-practice/ng-for-ng-if-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    Test2Component,
    CardComponent,
    PassWordGeneratorComponent,
    PassGeneratorComponent,
    NgForPracticeComponent,
    NgForpractice1Component,
    NgForProductDataComponent,
    NgIfPracticeComponent,
    NgIfUserDataComponent,
    NgForNgIfPracticeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
