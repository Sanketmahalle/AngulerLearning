import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { DirectivesAssignComponent } from './directives-assign/directives-assign.component';
import { CustomDirective } from './custom.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AssignmentTempleteFormComponent } from './assignment-templete-form/assignment-templete-form.component';
import { ReactiveFormAssignmentComponent } from './reactive-form-assignment/reactive-form-assignment.component';
import { AssinReactiveComponent } from './assin-reactive/assin-reactive.component';
import { ReactiveFormAssignment2Component } from './reactive-form-assignment2/reactive-form-assignment2.component';
import { BlackBoxComponent } from './black-box/black-box.component';
import { ValidationComponent } from './validation/validation.component';
@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

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
    NgSwitchComponent,
    DirectivesAssignComponent,
    CustomDirective,
    TemplateFormsComponent,
    ReactiveFormComponent,
    AssignmentTempleteFormComponent,
    ReactiveFormAssignmentComponent,
    AssinReactiveComponent,
    ReactiveFormAssignment2Component,
    BlackBoxComponent,
    ValidationComponent,
   
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
