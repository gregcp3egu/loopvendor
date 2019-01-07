import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RequestOptionsService } from '../shared/request-options.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class OnboardService implements CanActivate{

  url = `${this.ros.baseurl}/onboard`;

  constructor(private ros: RequestOptionsService, 
    private storage: Storage, private router: Router) { 
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLocalOnboard()
  }

  checkOnboard(): Observable<any> {
    return this.ros.http.get(`${this.url}`, this.ros.dataoptions())
                  .pipe(
                    catchError(this.ros.handleError)
                  )
  }

  createOwner(data: FormData): Observable<any> {
    return this.ros.http.post(`${this.url}/owner`, data)
                  .pipe(
                    catchError(this.ros.handleError)
                  )
  }

  createShop(data: FormData): Observable<any> {
    return this.ros.http.post(`${this.url}/shop`, data)
                  .pipe(
                    catchError(this.ros.handleError)
                  )
  }


  checkLocalOnboard(){
    return this.storage.get('onboard').then(
      d => {
        if(d){
          console.log(d)
          return d
        } else {
          this.router.navigate(['/onboard'])
          return false
        }
      }
    ).catch(() => {
      this.router.navigate(['/onboard'])
      return false})
  }

  async setOnboard(status: Boolean): Promise<Boolean>{
    return await this.storage.set('onboard', status).then(
      d => {
        console.log(d, 'Storage set');
        return true;
      }
    ).catch(e => {
      return false;
    })
  }


}
