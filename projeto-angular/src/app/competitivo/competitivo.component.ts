import { TopTimes } from './../model/toptimes';
import { ApihltvService } from './../model/apihltv.service';
import { CompPlayer } from '../model/compplayer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitivo',
  templateUrl: './competitivo.component.html',
  styleUrls: ['./competitivo.component.css']
})
export class CompetitivoComponent implements OnInit {
  listaJogadores: CompPlayer[];
  listaTimes: TopTimes[];
  JogadorID: CompPlayer;
  TimeID: TopTimes;
  noticias: any;

  constructor(private hs: ApihltvService) {
    this.listaJogadores = [];
    this.listaTimes = [];
    this.JogadorID = new CompPlayer;
    this.TimeID = new TopTimes;
    this.noticias = [];
  }

  ngOnInit(): void {
    this.hs.obterDadosJogadores().subscribe(res => {
      this.listaJogadores = res
    })
    this.hs.obterDadosTimes().subscribe(res => {
      this.listaTimes = res
    })
    this.hs.obterNoticias().subscribe(res => {
      this.noticias = res
    })
  }

  exibirDadosJogadorID(idplayer: HTMLInputElement): void {
    this.hs.obterJogadorPeloID(+idplayer.value).subscribe(res => {
      this.JogadorID = res
    })
  }

  exibirDadosTimeID(idteam: HTMLInputElement): void {
    this.hs.obterJogadorPeloID(+idteam.value).subscribe(res => {
      this.JogadorID = res
    })
  }
}
