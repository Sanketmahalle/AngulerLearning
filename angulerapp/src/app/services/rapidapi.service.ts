import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  url = 'https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=US';
  constructor(private httpClient: HttpClient) { }

  getFinance() {
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': 'c5bca1b28cmsh51e5190c24b3f91p182042jsn9d8b93e262f1',
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
    });
   return this.httpClient.get(this.url, { headers: headers});
  }
}