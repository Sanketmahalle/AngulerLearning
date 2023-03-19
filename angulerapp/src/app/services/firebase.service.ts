import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
url  = 'https://angularcrud-f26d5-default-rtdb.firebaseio.com/'
  constructor(private httpClient:HttpClient) { }

  createPost(){
    let postData = {
      
      title: 'This is firebase example',
      content: 'we are calling angular post method '
    }
   return this.httpClient.post(this.url + 'posts.json',postData)
  }

  getPostDataFirebase() {
    return this.httpClient.get(this.url + 'posts.json').pipe(
      map((data: any) => {
        return Object.keys(data).map(key => {
          return { id: key, ...data[key] };
        });
      })
    );
  }
}
