import { Noticia } from '../model/hltv-ts/noticia';
import { Time } from '../model/hltv-ts/time';
import { ApihltvService } from './../model/apihltv.service';
import { PlayerComp } from '../model/hltv-ts/playercomp';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitivo',
  templateUrl: './competitivo.component.html',
  styleUrls: ['./competitivo.component.css']
})
export class CompetitivoComponent implements OnInit {
  listaJogadores: PlayerComp[];
  listaTimes: Time[];
  JogadorID: PlayerComp;
  TimeID: Time;
  noticias: Noticia[];
  data = new Date;

  constructor(private hs: ApihltvService) {
    this.listaJogadores = [];
    this.listaTimes = [];
    this.JogadorID = new PlayerComp;
    this.TimeID = new Time;
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