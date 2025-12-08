import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: any) {
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      tap((response) => {
        localStorage.setItem('auth-token', response.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('auth-token');
    this.router.navigate(['/login']).finally();
  }

  getToken(): string | null {
    return localStorage.getItem('auth-token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }
}
