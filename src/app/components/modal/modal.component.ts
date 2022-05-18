import { Input, ViewChild } from '@angular/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ListComponentComponent } from '../list-component/list-component.component';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  dateText: string = "";
  movieText: string = "";
  placesText: string[] = [];
  rows!: Array<number>;
  cols!: Array<number>;
  price: number = 0;

  constructor(private http: HttpClient, public authService: AuthService, private dialogRef: MatDialog, public router: Router) { 

    this.rows = Array.from(Array(7),(x,i)=>i);
    this.cols = Array.from(Array(10),(x,i)=>i);

  }

  ngOnInit(): void {
  }

  addReserve(date: string, movie: string, name: string) {
    const email = this.authService.userData.email;

    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let id = '';

    let places = this.placesText;

    for (let i = 0; i < 20; i++) {
      id += CHARS.charAt(
        Math.floor(Math.random() * CHARS.length)
      )
    }
    if (name != '' && places.length!=0) {
      const body = { date: date, email: email, id: id, movie: movie, name: name, places: places };
      const headers = { 'Content-Type': 'application/json' };
      this.http.put<any>('https://us-central1-cinemaapp-f8ecd.cloudfunctions.net/app/addReserve', body, { headers })
        .subscribe(data => console.log(data));
      this.dialogRef.closeAll();
      this.router.navigate(['reservations']);
    }else{
      return;
    }

  }

  logPosition(position: String, element: HTMLElement){
    console.log(position);
    if(element.classList.contains("reservedColor")){
      element.classList.remove("reservedColor");
      const index = this.placesText.indexOf(position as string,0);
      this.placesText.splice(index, 1);
      this.price -= 2000;
    }else{
      let row = position.substring(0,position.indexOf(':'));
      let col = position.substring(position.indexOf(':')+1, position.length);
      if(parseInt(row) <=this.rows.length && parseInt(col) <=this.cols.length){
        element.classList.add("reservedColor");
        this.placesText.push(position as string+', ');
        this.price += 2000;
      }
    }
  }


}
