import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cinema_App';
  faArrowRightFromBracket = faArrowRightFromBracket;
  faTicket = faTicket;
  faFilm = faFilm;
  opened = false;
  constructor(public authService: AuthService){}

}
