import { Jogador } from './../model/jogador';
import { ApisteamService } from './../model/apisteam.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {
  statsUser: Jogador[];

  constructor(private ds: ApisteamService) {
    this.statsUser = [];
  }
  

  ngOnInit(): void {
  }
  // feito de noite 
  exibirDadosUser(iduser: HTMLInputElement): void {
    this.ds.obterStatsUser(+iduser.value).subscribe(res => {
      this.statsUser = new Array(res)
    })
    console.log(this.statsUser)
  }

}
