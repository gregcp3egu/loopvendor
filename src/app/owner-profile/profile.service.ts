import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RequestOptionsService } from '../shared/request-options.service';


@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  url = `${this.ros.baseurl}`;

  constructor(private ros: RequestOptionsService) { 
  }

  checkOnboard(): Observable<any> {
    return this.ros.http.get(`${this.url}/onboard`, this.ros.dataoptions())
                  .pipe(
                    catchError(this.ros.handleError)
                  )
  }


}
