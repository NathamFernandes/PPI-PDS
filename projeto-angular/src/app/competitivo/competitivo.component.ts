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

  constructor(private hs: ApihltvService) {
    this.listaCompPlayer = [];
  }

  ngOnInit(): void {
    this.hs.obterCompJogadores().subscribe(res => {
      this.listaCompPlayer = new Array(res)
    })
    console.log(this.listaCompPlayer)
  }

  exibirDadosCompPlayer(): void {

  }

}
