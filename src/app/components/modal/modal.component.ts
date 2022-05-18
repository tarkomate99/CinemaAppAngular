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

  constructor(private http: HttpClient, public authService: AuthService, private dialogRef: MatDialog, public router: Router) { }

  ngOnInit(): void {
  }

  addReserve(date: string, movie: string, name: string, places: string) {
    const email = this.authService.userData.email;

    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let id = '';

    for (let i = 0; i < 20; i++) {
      id += CHARS.charAt(
        Math.floor(Math.random() * CHARS.length)
      )
    }
    if (name != '' && places != '') {
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


}
