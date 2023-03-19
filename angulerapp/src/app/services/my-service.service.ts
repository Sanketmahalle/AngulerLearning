import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyserviceService {
 
  private apiURL2 = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  private apiKey = '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';
  showAge;
  constructor(private http:HttpClient) { }


  getCompletion(prompt: string) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    };

    const body = {
      prompt: prompt,
      max_tokens: 500,
      n: 1,
      stop: ['\n']
    };

    return this.http.post<any>(this.apiURL2, body, { headers: headers });
  }



  ageCalculator(age: any) : number
  {
    if (age) {
      const convertAge = new Date(age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      return this.showAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
    }
  }
  print() {
    alert('print method called');
  }




url= 'https://jsonplaceholder.typicode.com/users';

getUsers() :Observable<any>{
    return this.http.get(this.url);
  }


  products=[
    { name: 'computer', id:101  },
    { name: 'tv', id:102  },
    { name: 'laptop', id:103  },
  ]


  display() {
    alert ('display called');
  }
  private apiUrl = 'https://v2.jokeapi.dev/joke/Any';

  getJoke(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  private apiUrlQues = 'https://opentdb.com/api.php?amount=10&type=multiple';

  getQuestions(): Observable<any> {
    return this.http.get(this.apiUrlQues);
  }


  searchMovies(term: string): Observable<any> {
    return this.http.get(`http://www.omdbapi.com/?apikey=dfe36f1c&s=${term}`);
  }
}