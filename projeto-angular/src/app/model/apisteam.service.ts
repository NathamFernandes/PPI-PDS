import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApisteamService {
  
  constructor(private http: HttpClient) { }

  obterStatsUser(iduser: string) : Observable<any> {
    let URL = `http://ec2-3-95-164-201.compute-1.amazonaws.com:3100/usuarios/${iduser}`
    return this.http.get(URL)
  }

  obterSumario(iduser: string) : Observable<any> {
    let URL_2 = `http://ec2-3-95-164-201.compute-1.amazonaws.com:3100/sumario/${iduser}`
    return this.http.get(URL_2)
  }

}
