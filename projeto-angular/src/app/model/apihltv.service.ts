import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApihltvService {

  constructor(private http: HttpClient) { }

  obterNoticias() {
    let URL = 'http://localhost:3100/noticias'
    return this.http.get(URL);
  }

  obterDadosJogadores(): Observable<any> {
    let URL = 'http://localhost:3100/jogadores';
    return this.http.get(URL);
  }

  obterDadosResultados(): Observable<any> {
    let URL = 'http://localhost:3100/resultados'
    return this.http.get(URL)
  }

  obterDadosTimes(): Observable<any> {
    let URL = 'http://localhost:3100/top-times'
    return this.http.get(URL)
  }

  obterJogadorPeloID(idplayer: number) : Observable<any> {
    let URL = `http://localhost:3100/jogadores/${idplayer}`
    return this.http.get(URL)
  }

  obterTimePeloID(idteam: number) : Observable<any> {
    let URL = `http://localhost:3100/times/${idteam}`
    return this.http.get(URL)
  }

}
