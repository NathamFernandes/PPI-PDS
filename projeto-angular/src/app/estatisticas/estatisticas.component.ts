import { Jogador } from './../model/jogador';
import { ApisteamService } from './../model/apisteam.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {
  listaJogador: Jogador[];


  constructor(private ss: ApisteamService) {
    this.listaJogador = [];
  }
  

  ngOnInit(): void {
  }
  // feito de noite 
  
  exibirDadosUser(iduser: HTMLInputElement): void {
    this.ss.obterStatsUser(+iduser.value).subscribe(res => {
      this.listaJogador = res
    })
    console.log(typeof this.listaJogador)
  }

}
