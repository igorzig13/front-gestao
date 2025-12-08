import {ChangeDetectorRef, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    MatIcon
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  constructor(private router: Router, private authService: AuthService, private cdr: ChangeDetectorRef) {}

  handleSubmit(event: Event) {
    event.preventDefault();
    this.errorMessage = ''; // Limpa erros anteriores

    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor, preencha todos os campos.';
      return;
    }

    this.isLoading = true;

    const credentials = {
      login: this.username,
      password: this.password
    };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']).finally();
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Erro no login', err);

        if (err.status === 403 || err.status === 401) {
          this.errorMessage = 'Usuário ou senha inválidos.';
        } else {
          this.errorMessage = 'Erro ao conectar com o servidor. Tente novamente.';
        }
        this.cdr.detectChanges();
      }
    });
  }

  handleForgotPassword(event: Event) {
    event.preventDefault();
    alert('Funcionalidade de recuperação de senha em desenvolvimento');
  }

  protected closeError() {
    this.errorMessage = '';
  }
}
