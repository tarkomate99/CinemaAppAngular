import { Component, Injectable, OnInit } from '@angular/core';
import { from, Observable, switchMap } from 'rxjs';
import { Movie } from './models/movies';
import { MovieServiceService } from './services/movie-service.service';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { NgxIndexedDBModule, NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss'],
})
@Injectable({ providedIn: 'root' })
export class ListComponentComponent {

  movies = new Array<Movie>();
  moviesTable = this.dbService.getAll('moviesTable');
  movieText!: string;
  dateText!: string;

  constructor(private readonly moviesService: MovieServiceService, public authService: AuthService, private dialogRef : MatDialog, private modalComponent: ModalComponent, private dbService: NgxIndexedDBService) {
    
    this.fillIndexDb();

    this.moviesTable.subscribe((items)=>{
      for(let movie of items){
        let item = JSON.parse(JSON.stringify(movie));
        this.movies.push(new Movie(
          item.date,
          item.imageUrl,
          item.title
        ));
      }
    });
  }

  openDialog(movie: Movie) {
    let dialogref = this.dialogRef.open(ModalComponent);
    let instance = dialogref.componentInstance;
    instance.dateText = movie.date;
    instance.movieText = movie.title;
  }

  fillIndexDb(){
    this.moviesService.getMovies().subscribe(response => {
      response.map(item => {
        this.dbService.add('moviesTable', {
          date: item.date,
          imageUrl: item.imageUrl,
          title: item.title
        }).subscribe((key) => {
          console.log('Adat sikeresen hozzáadva a DB-hez key:'+key);
        });
      });
    });
  }

  clearIndexDb(){
    this.dbService.clear('moviesTable').subscribe((successDeleted)=>{
      console.log('success? ', successDeleted);
    });
  }

  displayedColumns: string[] = ['imageUrl', 'title', 'date'];

}