import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApihltvService {

  constructor(private http: HttpClient) { }

  obterCompJogadores(): Observable<any> {
    let URL = 'https://api-hltv-natham.herokuapp.com/jogadores';
    return this.http.get(URL);
  }

  obterDadosResultados(): Observable<any> {
    let URL = 'https://api-hltv-natham.herokuapp.com/resultados'
    return this.http.get(URL)
  }

  obterDadosTopTimes(): Observable<any> {
    let URL = 'https://api-hltv-natham.herokuapp.com/top-times'
    return this.http.get(URL)
  }

  obterJogadorPeloID(idplayer: number) : Observable<any> {
    let URL = `https://api-hltv-natham.herokuapp.com/jogadores/${idplayer}`
    return this.http.get(URL)
  }

}
