import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { WatchComponent } from './product/watch/watch.component';
import { CustomDirective } from './custom.directive';
// import { UtilityModule } from './shared/utility/utility.module';



@NgModule({
  declarations: [
    LaptopComponent,
    MobileComponent,
    CameraComponent,
    WatchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    // UtilityModule
  
  ]
})
export class ProductModule { }
