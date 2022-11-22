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
  listaCompPlayer: CompPlayer[];
  listaTopTimes: TopTimes[];
  listaJogadorID: CompPlayer[];

  constructor(private hs: ApihltvService) {
    this.listaCompPlayer = [];
    this.listaTopTimes = [];
    this.listaJogadorID = [];
  }

  ngOnInit(): void {
    this.hs.obterCompJogadores().subscribe(res => {
      this.listaCompPlayer = res
    })
    this.hs.obterDadosTopTimes().subscribe(res => {
      this.listaTopTimes = res
    })
  }

  exibirDadosJogadorID(idplayer: HTMLInputElement): void {
    this.hs.obterJogadorPeloID(+idplayer.value).subscribe(res => {
      this.listaJogadorID = new Array(res)
    })
  }
}
