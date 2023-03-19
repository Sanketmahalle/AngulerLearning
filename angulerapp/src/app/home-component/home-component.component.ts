import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { FirebaseService } from '../services/firebase.service';
import {filter, map} from 'rxjs/operators';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  constructor(private firebseS:FirebaseService) { }
  posts: any[] = [];
  showTable: boolean = false;
    ngOnInit() {
  }

  createPost() {
    this.firebseS.createPost().subscribe(() => {
      this.getPosts();
    });
  }

  getPosts() {
    this.firebseS.getPostDataFirebase().subscribe((data: any[]) => {
      this.posts = data;
      this.showTable=true;
      
    });
  }
  
  // getPosts() {
  //   // this.firebaseService.getPostDataFirebase().subscribe(res => {
  //   //   console.log('Firebase get', res);
  //   // })

  //   this.firebseS.getPostDataFirebase().pipe(
  //     map(responseData => {
  //       console.log('before manipulate', responseData)
  //       // empty array 
  //       const postArray = [];
  //       // for in loop 
  //       for(const key in responseData) {
  //         // check the key 
  //         if(responseData.hasOwnProperty(key)) {
  //           // push new value into array 
  //           postArray.push({...responseData[key], id:key})
  //         }
  //       }
  //       return postArray;
  //     })
  //   ).subscribe(res => {
  //     console.log('after manipulate data', res);
  //   })
  // }
}
