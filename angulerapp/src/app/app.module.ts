import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { Test2Component } from './test2/test2.component';
import { CardComponent } from './card/card.component';
import { PassWordGeneratorComponent } from './pass-word-generator/pass-word-generator.component';
import { PassGeneratorComponent } from './pass-generator/pass-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    Test2Component,
    CardComponent,
    PassWordGeneratorComponent,
    PassGeneratorComponent,
   
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
