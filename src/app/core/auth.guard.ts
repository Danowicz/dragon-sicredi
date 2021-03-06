import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isLogged()){
            return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
    }
}
