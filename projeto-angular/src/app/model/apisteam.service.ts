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
    let URL = `https://elated-gray-snaps.cyclic.app/usuarios/${iduser}`
    return this.http.get(URL)
  }

  obterSumario(iduser: string) : Observable<any> {
    let URL = `https://elated-gray-snaps.cyclic.app/sumario/${iduser}`
    return this.http.get(URL)
  }

}
