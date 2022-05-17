import { Injectable } from '@angular/core';
import { from, Observable, switchMap } from 'rxjs';
import { Movie } from '../models/movies';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MovieServiceService {
	public readonly moviesList$: Observable<Movie[]>;

  constructor(/*private http: HttpClient*/) { 

	this.moviesList$ = from(
		fetch('https://us-central1-cinemaapp-f8ecd.cloudfunctions.net/app/movies', {mode: 'cors'})
	).pipe(switchMap((res) => res.json()));


  }
  /*
  public addReserve(date: string, email: string, id: string, movie: string, name: string, places: string){
	const body = { date: date, email: email,  id: id, movie: movie, name: name, places: places };
	this.http.put<any>('https://us-central1-cinemaapp-f8ecd.cloudfunctions.net/addReserve', body)
		.subscribe(data => console.log(data));
  }
  */
}
