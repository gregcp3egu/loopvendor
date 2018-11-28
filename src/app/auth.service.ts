import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { RequestOptionsService } from './shared/request-options.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {


  get authenticated(): boolean {
    return this.afAuth.authState !== null;
  }

  get currentUserObservable(): any {
    return this.afAuth.authState
  }

  

  constructor(public afAuth: AngularFireAuth, 
              private ros: RequestOptionsService,
              private router: Router
              ) { 

  }

  getAuthorizationToken(){
    if(this.afAuth.auth.currentUser){ 
        return this.afAuth.auth.currentUser.getIdToken()
    } else {
        return Promise.reject(null);
    }
}

  emailLogin(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }

  emailSignUp(email, password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  emailResetPassword(email){
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  getToken(): Observable<any>{
    return this.ros.http.get(`${this.ros.baseurl}/profile/token`, this.ros.dataoptions()).pipe(
      catchError(this.ros.handleError)
    )
  }


  

  async signOut(){
    this.afAuth.auth.signOut();

    this.router.navigate(['/auth']);
  }



}
