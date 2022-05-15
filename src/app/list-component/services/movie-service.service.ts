import { Injectable } from '@angular/core';
import { from, Observable, switchMap } from 'rxjs';
import { Movie } from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
	public readonly moviesList$: Observable<Movie[]>;

  constructor() { 


	this.moviesList$ = from(
		fetch('https://us-central1-cinemaapp-f8ecd.cloudfunctions.net/app/movies', {mode: 'cors'})
	).pipe(switchMap((res) => res.json()));


  }
}
