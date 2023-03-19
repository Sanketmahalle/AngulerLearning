import { Component, OnInit } from '@angular/core';
import { WikiService } from 'src/app/services/wiki.service';

@Component({
  selector: 'app-wikiop',
  templateUrl: './wikiop.component.html',
  styleUrls: ['./wikiop.component.css']
})
export class WikiopComponent implements OnInit {

  isLoading = false;
  constructor(private _wikipediaService: WikiService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  pages = [];
  onTerm(term: string) {
    this.isLoading = true;
    this._wikipediaService.search(term).subscribe((res: any) => {
      this.pages = res.query.search;
      console.log(this.pages);
      this.isLoading = false;
    });
  }
}
