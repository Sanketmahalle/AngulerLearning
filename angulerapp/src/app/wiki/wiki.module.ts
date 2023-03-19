import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageListComponent } from './page-list/page-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WikiopComponent } from './wikiop/wikiop.component';



@NgModule({
  declarations: [PageListComponent, SearchBarComponent, WikiopComponent],
  imports: [
    CommonModule,
    FormsModule 
  ]
})
export class WikiModule { }
