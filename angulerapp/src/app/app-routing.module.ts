import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DemoUserDetailsComponent } from './demo-user-details/demo-user-details.component';
import { DemoUserComponent } from './demo-user/demo-user.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import {  TemplateFormsComponent} from "./template-forms/template-forms.component";
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { FashionlistComponent } from './fashion/fashionlist/fashionlist.component';
import { FashiondetailsComponent } from './fashion/fashiondetails/fashiondetails.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AuthGuard } from './auth.guard';
import { WikiopComponent } from './wiki/wikiop/wikiop.component';
import { ShoppingLoginComponent } from './ShoppingCard/shopping/shopping-login/shopping-login.component';
import { ShoppinghomeComponent } from './ShoppingCard/shopping/shopping-login/shoppinghome/shoppinghome.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'}, // http:localhost:4200 
  { path: 'home', component: HomeComponentComponent},
  {path:'aboutus' , component:AboutUsComponent},
  {path:'contactus' , component:ContactUsComponent},
  {path:'product' ,canActivate:[AuthGuard],component:ProductComponent,
children:[
  // {path:'',component:ProductComponent},         //  {path:'',component:ProductComponent}, single router outlet
  {path: 'laptop',component:LaptopComponent},
  {path:'mobile',component:MobileComponent},
  {path:'camera',component:CameraComponent},
  {path:'watch',component:WatchComponent}
]
},
{path:'users',component:DemoUserComponent},
{path:'demo-user-details/:id',component:DemoUserDetailsComponent},
{path:'userinfo',component:UserinfoComponent},
{path:'login',  component:LoginComponentComponent},
{path:'post',component:DemopostComponent},
{path:'shoppingcart',component:ShoppingLoginComponent,
children:[
  {path:'shoppinghome',canActivate:[AuthGuard],component:ShoppinghomeComponent}
]

},

{path:'order',component:OrderlistComponent},
{path:'wiki',component:WikiopComponent},
{path:'fashion',component:FashionlistComponent},
{ path: 'fashiondetails/:id', component: FashiondetailsComponent },
{ path: 'customer', loadChildren:'./customer/customer.module#CustomerModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path:'todo',component:TodoComponent}, 

  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],   //! preloading
  exports: [RouterModule]
})
export class AppRoutingModule { }
