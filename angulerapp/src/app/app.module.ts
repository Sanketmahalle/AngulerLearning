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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Content1Component } from './content1/content1.component';
import { MyserviceService } from './services/my-service.service';
import { UserDataService } from './services/user-data.service';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { SearchPipe } from './search.pipe';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { FilterByNamePipePipe } from './filter-by-name-pipe.pipe';
import { MovieAppComponent } from './movie-app/movie-app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { DemoUserComponent } from './demo-user/demo-user.component';
import { DemoUserDetailsComponent } from './demo-user-details/demo-user-details.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ProductModule } from './product.module';
import { OrdersModule } from './orders/orders.module';
import { FashionModule } from './fashion/fashion.module';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { ApicurdComponent } from './apicurd/apicurd.component';
import { TodoComponent } from './todo/todo.component';
import { AuthServiceService } from './services/auth-service.service';

import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { WikiModule } from './wiki/wiki.module';
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
   
    TemplateFormsComponent,
    ReactiveFormComponent,
    AssignmentTempleteFormComponent,
    ReactiveFormAssignmentComponent,
    AssinReactiveComponent,
    ReactiveFormAssignment2Component,
    BlackBoxComponent,
    ValidationComponent,
    Content1Component,
    PipeExampleComponent,
    CustomPipePipe,
    SearchPipe,
    ProductFilterComponent,
    FilterByNamePipePipe,
    MovieAppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    LoginComponentComponent,
    HomeComponentComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    ProductComponent,
    DemopostComponent,
    DemopostdetailsComponent,
    DemoUserComponent,
    DemoUserDetailsComponent,
    UserinfoComponent,
    ApicurdComponent,
    TodoComponent
  ],
  imports: [
    ProductModule,
  HttpClientModule,
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
    ReactiveFormsModule,
    OrdersModule,
    FashionModule,
    RouterModule ,
    WikiModule,
    FormsModule 
    
  ],
  providers: [
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AuthServiceService,
  //   multi: true
  // },
   MyserviceService,UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
