import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

import { map, take, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SlidesGuard implements CanActivate {

  constructor(private as: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin()
  }

  

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  checkLogin(){
    return this.as.currentUserObservable.pipe(
      take(1),
      map(user => {
        return !!user
      }),
      tap(async loggedIn => {
        if (loggedIn) {
          console.log(loggedIn);
          
          this.router.navigate(['/']);
          return false
        }

        return true;
      })
    );
  }
}
