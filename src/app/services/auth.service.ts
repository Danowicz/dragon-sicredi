import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  public validateLogin(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('logged', 'true');
      return true;
    }
    return false;
  }

  public isLogged(): boolean {
    return !!sessionStorage.getItem('logged');
  }

  public logout(): void {
    sessionStorage.removeItem('logged');
    this.router.navigate(['/login']);
  }
}
