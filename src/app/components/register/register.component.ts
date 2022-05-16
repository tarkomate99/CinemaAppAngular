import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  faGoogle = faGoogle;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
