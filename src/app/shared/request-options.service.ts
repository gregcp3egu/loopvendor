import { Injectable } from '@angular/core';

import { Response, BaseRequestOptions } from '@angular/http';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestOptionsService {

  //live
  baseurl = `https://loopserve-api.herokuapp.com/trader/secure`;
  publicurl = `https://loopserve-api.herokuapp.com/public`;

  //test
  // baseurl = `http://10.150.96.64:8080/trader`;
  // secureurl = `http://10.150.96.64:8080/trader/secure`;
  // publicurl = `http://10.150.96.64:8080/public`;
  
  constructor(public http: HttpClient){}

  dataoptions(): any {
    const options = new BaseRequestOptions();
    return options;
  }


  fileoptions(folder?): any {
      //let headers = new Headers();
      let options = new BaseRequestOptions();
      if(folder){
        options.headers.set('folder', folder);
      }

      return options;
  }

  extractData(res: Response) {
      // I may need to check the headers later for more functionality
      const body = res.json();
      return body || { };
  }

  handleError (res: Response | any | object) {
    console.log(res);
    
    let errMsg: string;
    if(res.status == 0){
      return throwError(
        {
          name: 'Failed to connect server',
          message: "You're not connected to the internet or have a slow internet connection"
        }
      )
    } else {
      if (res instanceof Response) {
        const body = res.json() || '';
        const err = body.error || JSON.stringify(body);
        // errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        errMsg = err;
      } else {
          // connection error
        errMsg = res.error ? res.error : res.error.toString();
        // console.log(error);
      }
    }

    return throwError(errMsg);
  }
}

