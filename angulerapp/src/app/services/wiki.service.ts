import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})


export class WikiService {
 

  constructor(private http:HttpClient) { }

  search(term: string){
    return  this.http.get('https://en.wikipedia.org/w/api.php?',{
    params: {
     action:'query',
     format:'json',
     list:'search',
     utf8:'1',
     srsearch: term,
     origin: '*'
    }
    
   });
 }
  
  // search(searchTerm: string) {
  //   const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${searchTerm}&utf8=1&origin=*`;

  //   return this.http.get(url).pipe(map((response: any) => {
  //     return response.query.search.map((result: any) => {
  //       return {
  //         title: result.title,
  //         description: result.snippet
  //       };
  //     });
  //   }));
  // }
  
  // search(term: string): Observable<any> {
  //   const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${term}&origin=*`;
  //   return this.http.get(url);
  // }
 

}