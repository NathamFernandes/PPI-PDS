import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApihltvService {

  constructor(private http: HttpClient) { }

  obterNoticias() : Observable<any> {
    let URL = 'https://long-teal-beetle-wig.cyclic.app/noticias'
    return this.http.get(URL);
  }

  obterDadosJogadores(): Observable<any> {
    let URL = 'https://long-teal-beetle-wig.cyclic.app/jogadores';
    return this.http.get(URL);
  }

  obterDadosResultados(): Observable<any> {
    let URL = 'https://long-teal-beetle-wig.cyclic.app/resultados'
    return this.http.get(URL)
  }

  obterDadosTimes(): Observable<any> {
    let URL = 'https://long-teal-beetle-wig.cyclic.app/top-times'
    return this.http.get(URL)
  }

  obterJogadorPeloID(idplayer: number) : Observable<any> {
    let URL = `https://long-teal-beetle-wig.cyclic.app/jogadores/${idplayer}`
    return this.http.get(URL)
  }

  obterTimePeloID(idteam: number) : Observable<any> {
    let URL = `https://long-teal-beetle-wig.cyclic.app/times/${idteam}`
    return this.http.get(URL)
  }

}
