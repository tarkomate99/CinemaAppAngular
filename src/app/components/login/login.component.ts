import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  faGoogle = faGoogle;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
