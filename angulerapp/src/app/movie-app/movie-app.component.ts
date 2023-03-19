import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MyserviceService } from '../services/my-service.service';

@Component({
  selector: 'app-movie-app',
  templateUrl: './movie-app.component.html',
  styleUrls: ['./movie-app.component.css']
})
export class MovieAppComponent implements OnInit {
  movies = [];
  selectedMovie = null;
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
  }
  searchMovies(term: string): Observable<any> {
    return this.http.get(`http://www.omdbapi.com/?apikey=dfe36f1c&s=${term}`);
  }

  search(term: string): void {
    this.searchMovies(term).subscribe(data => {
      this.movies = data.Search;
    });
  }
  selectMovie(movie: any): void {
    this.http.get(`http://www.omdbapi.com/?apikey=dfe36f1c&i=${movie.imdbID}`).subscribe(data => {
      this.selectedMovie = data;
    });
}
}
