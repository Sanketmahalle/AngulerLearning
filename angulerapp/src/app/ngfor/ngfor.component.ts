import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  title:string= 'Top 3 movies';
movie: Movie[] = [
  { title: '3idiots', directoe:'Rajkumar',cast:'Amir',releaseDate:'2009' },
  { title: 'RRR', directoe:'S.S.RajaM',cast:'JR.NTR',releaseDate:'2022' },
  { title: 'kantara', directoe:'Rishabh',cast:'Rishabh',releaseDate:'2022' }


]
fevSong=['s1','s2','s3','s4'];



countries = [
  {
    name: 'USA',
    states: [
      { name: 'Alabama' },
      { name: 'Alaska' },
      // Add more states here
    ]
  },
  {
    name: 'Canada',
    states: [
      { name: 'Alberta' },
      { name: 'British Columbia' },
      // Add more states here
    ]
  }
  // Add more countries here
];

selectedCountry = '';
selectedState = '';
states = [];

  constructor() { }

 
  updateStates() {
    this.states = this.countries.find(country => country.name === this.selectedCountry).states;
  }
  ngOnInit() {
    this.updateStates();
  }
}
export class Movie{

  title: string;
  directoe:string;
  cast:string;
  releaseDate:string;
}


