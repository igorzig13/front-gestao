import {Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';

  constructor(private router: Router) {}

  handleSubmit(event: Event) {
    event.preventDefault();
    if (this.username && this.password) {
      this.router.navigate(['/dashboard']).finally()
    }
  }

  handleForgotPassword(event: Event) {
    event.preventDefault();
    alert('Funcionalidade de recuperação de senha em desenvolvimento');
  }
}
