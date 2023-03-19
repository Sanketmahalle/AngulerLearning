import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-apicurd',
  templateUrl: './apicurd.component.html',
  styleUrls: ['./apicurd.component.css']
})
export class ApicurdComponent implements OnInit {

  news: any[];
  quotes: any[];

  constructor(private rapidapiService: RapidapiService) { }

  ngOnInit() {
    this.rapidapiService.getFinance().subscribe((response: any) => {
      this.news = response.news;
      this.quotes = response.quotes;
    });
  }
}
