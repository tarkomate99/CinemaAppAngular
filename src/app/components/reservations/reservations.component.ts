import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent {

  public readonly reservationList$: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    let user = JSON.parse(localStorage.getItem('user')!);
    this.reservationList$ = db.collection('reservations', res => res.where('email', '==', user.email)).valueChanges();

  }

  delReserve(reservation: any){
    console.log(reservation);
    this.db.collection('reservations').doc(reservation.id).delete().then(() => {
      window.alert('Foglalás törölve!');
    }).catch((error) => {
      window.alert(`Hiba a törléskor: ${error}`);
    });
  }

}
