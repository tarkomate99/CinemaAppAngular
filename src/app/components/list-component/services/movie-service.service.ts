import { Injectable } from '@angular/core';
import { from, Observable, switchMap } from 'rxjs';
import { Movie } from '../models/movies';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MovieServiceService {


  constructor(private http: HttpClient) {}

  public getMovies(): Observable<Movie[]> {
	  const url= "https://us-central1-cinemaapp-f8ecd.cloudfunctions.net/app/movies";
	  return this.http.get<Movie[]>(url);
  }
}
