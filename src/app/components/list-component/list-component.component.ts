import { Component, Injectable, OnInit } from '@angular/core';
import { from, Observable, switchMap } from 'rxjs';
import { Movie } from './models/movies';
import { MovieServiceService } from './services/movie-service.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss'],
})
@Injectable({ providedIn: 'root' })
export class ListComponentComponent {

  public readonly movies$: Observable<Movie[]>;

  constructor(private readonly moviesService: MovieServiceService) { 

	this.movies$ = this.moviesService.moviesList$;

  }

  displayedColumns: string[] = ['imageUrl', 'title', 'date'];

}
