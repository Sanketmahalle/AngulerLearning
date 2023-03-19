import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  imageUrl = 'https://img.freepik.com/free-photo/unavailable-disconnected-inaccessible-unable-connect-concept_53876-120454.jpg?w=740&t=st=1678244949~exp=1678245549~hmac=a218c5a2e39fc95d0e5990f29ceef55bd1399be42892b3bdd58671cb5e3b3d91';
  constructor() { }

  ngOnInit() {
  }

}
