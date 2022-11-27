import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisteamService {
  
  constructor(private http: HttpClient) { }

  obterStatsUser(iduser: number) : Observable<any> {
    let URL = `localhost:3000/usuarios/${iduser}`
    return this.http.get(URL)
  }
  
  obterStatsAmigo(iduser: number, idamigo: number) : Observable<any> {
    let URL_1 = `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=E9FCC1C5E3BA8368FDABE96C4027CA8D&steamid=${iduser}`
    let URL_2 = `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=E9FCC1C5E3BA8368FDABE96C4027CA8D&steamid=${idamigo}`
    return this.http.get(URL_1), this.http.get(URL_2)
  } 

}
