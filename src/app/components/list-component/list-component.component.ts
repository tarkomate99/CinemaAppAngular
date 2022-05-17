import { Component, Injectable, OnInit } from '@angular/core';
import { from, Observable, switchMap } from 'rxjs';
import { Movie } from './models/movies';
import { MovieServiceService } from './services/movie-service.service';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss'],
})
@Injectable({ providedIn: 'root' })
export class ListComponentComponent {

  public readonly movies$: Observable<Movie[]>;

  movieText!: string;
  dateText!: string;

  constructor(private readonly moviesService: MovieServiceService, public authService: AuthService, private dialogRef : MatDialog, private modalComponent: ModalComponent) {
    
    this.movies$ = this.moviesService.moviesList$;

  }


  openDialog(movie: Movie) {
    let dialogref = this.dialogRef.open(ModalComponent);
    let instance = dialogref.componentInstance;
    instance.dateText = movie.date;
    instance.movieText = movie.title;
  }

  displayedColumns: string[] = ['imageUrl', 'title', 'date'];

}