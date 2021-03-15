import { style } from "@angular/animations";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
@Injectable()
export class EmailService
{
  constructor(private http: HttpClient) {
    
   
  }

  sendEmail(data) {
    return this.http.post('http://localhost:1337/email/', data).pipe(
      map(res => res))
  }

  sendEmail2(data){
    return this.http.post('http://localhost:3000/textmail', data).pipe(
      map(res => res))
  }

  private _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error')
  }

  

}
