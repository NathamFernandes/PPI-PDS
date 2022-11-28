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
    let URL = `http://localhost:3000/usuarios/${iduser}`
    return this.http.get(URL)
  }
  
  obterStatsAmigo(iduser: number, idamigo: number) : Observable<any> {
    let URL_2 = `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=E9FCC1C5E3BA8368FDABE96C4027CA8D&steamid=${idamigo}`
    return this.http.get(URL_2)
  } 

}
