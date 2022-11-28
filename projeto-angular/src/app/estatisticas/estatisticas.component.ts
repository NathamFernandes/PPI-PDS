import { Stats } from './../model/stats';
import { PlayerStats } from './../model/playerstats';
import { Jogador } from './../model/jogador';
import { ApisteamService } from './../model/apisteam.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {
  listaJogador: Jogador;
  estates: Stats;


  constructor(private ss: ApisteamService) {
    this.listaJogador = new Jogador;
    this.estates = new Stats;
  }


  ngOnInit(): void {
  }
  // feito de noite 

  exibirDadosUser(iduser: HTMLInputElement): void {
    this.ss.obterStatsUser(iduser.value).subscribe(res => {
      this.listaJogador = res
  })

}
}

/* console.log(this.listaJogador)
      console.log(this.listaJogador.playerstats)
      this.estates = this.listaJogador.playerstats.stats
      console.log(this.estates)
      var result1 = this.estates.filter(obj => {
        return obj.name === 'total_kills'
      })
    }) */
