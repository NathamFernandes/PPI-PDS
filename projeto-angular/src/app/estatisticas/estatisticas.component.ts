import { Sumario } from './../model/sumario';
import { StatsReais } from './../model/statsreais';
import { Stats } from './../model/stats';
import { Jogador } from './../model/jogador';
import { ApisteamService } from './../model/apisteam.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {
  jogador; amigoUm; amigoDois: Jogador;
  statsJogador; statsAmigoUm; statsAmigoDois; listaStats: any;
  dados; dadosAmigoUm; dadosAmigoDois: StatsReais;
  sumarioUsuario; sumarioAmigoUm; sumarioAmigoDois: Sumario;

  constructor(private ss: ApisteamService, private fb: FormBuilder) {
    this.listaStats = ['total_kills', 'total_deaths', 'total_matches_won', 'total_matches_played', 'total_kills_awp', 'total_kills_ak47', 'total_kills_m4a1', 'total_rounds_map_de_vertigo', 'total_rounds_map_de_inferno', 'total_rounds_map_de_dust2', 'total_rounds_map_de_train', 'total_rounds_map_de_nuke'];
    this.jogador = new Jogador;
    this.amigoUm = new Jogador;
    this.amigoDois = new Jogador;
    this.statsJogador = {};
    this.statsAmigoUm = {};
    this.statsAmigoDois = {};
    this.dados = new StatsReais;
    this.dadosAmigoUm = new StatsReais;
    this.dadosAmigoDois = new StatsReais;
    this.sumarioUsuario = new Sumario;
    this.sumarioAmigoUm = new Sumario;
    this.sumarioAmigoDois = new Sumario;
  }

  ngOnInit(): void {
  }

  exibirDadosUser(iduser: HTMLInputElement): void {
    this.ss.obterStatsUser(iduser.value).subscribe(res => {
      this.jogador = res
      this.statsJogador = this.jogador.playerstats.stats
      let stats_0 = this.statsJogador
      let listaDados = this.dados
      this.appendaObjeto(stats_0, listaDados)
    })
    this.ss.obterSumario(iduser.value).subscribe(res => {
      this.sumarioUsuario = res
    })

  }
  compararDadosAmigos(idamigo1: HTMLInputElement, idamigo2: HTMLInputElement): void {
    this.ss.obterStatsUser(idamigo1.value).subscribe(res => {
      this.amigoUm = res
      this.statsAmigoUm = this.amigoUm.playerstats.stats
      let stats_1 = this.statsAmigoUm
      let listaDados_1 = this.dadosAmigoUm
      this.appendaObjeto(stats_1, listaDados_1)
    })
    this.ss.obterSumario(idamigo1.value).subscribe(res => {
      this.sumarioAmigoUm = res
    })
    this.ss.obterStatsUser(idamigo2.value).subscribe(res => {
      this.amigoDois = res
      this.statsAmigoDois = this.amigoDois.playerstats.stats
      let stats_2 = this.statsAmigoDois
      let listaDados_2 = this.dadosAmigoDois
      this.appendaObjeto(stats_2, listaDados_2)
    })
    this.ss.obterSumario(idamigo2.value).subscribe(res => {
      this.sumarioAmigoDois = res
    })
  }

  // Funções chamáveis para encurtamento de código

  appendaObjeto(stats: any, listaDados: StatsReais) {
    for (let i = 0; i < 11; i++) {
      let variavel = stats.find((x: Stats) => x.name === this.listaStats[i]).value
      listaDados[this.listaStats[i]] = variavel
    }
    listaDados['kd'] = this.calculaKD(stats)
    listaDados['mapa_preferido'] = this.calculaMapa(stats)
    listaDados['win_rate'] = this.calculaWinRate(stats)
    console.log(listaDados)
  }

  calculaKD(stats: any) {
    let kills = stats.find((x: Stats) => x.name === 'total_kills').value
    let deaths = stats.find((x: Stats) => x.name === 'total_deaths').value
    let result = kills / deaths
    let kd = result.toFixed(2)
    return kd
  }

  calculaMapa(stats: any) {
    let vertigo = stats.find((x: Stats) => x.name === 'total_rounds_map_de_vertigo').value
    let inferno = stats.find((x: Stats) => x.name === 'total_rounds_map_de_inferno').value
    let dust2 = stats.find((x: Stats) => x.name === 'total_rounds_map_de_dust2').value
    let train = stats.find((x: Stats) => x.name === 'total_rounds_map_de_train').value
    let nuke = stats.find((x: Stats) => x.name === 'total_rounds_map_de_nuke').value
    let array = [vertigo, inferno, dust2, train, nuke]
    let arraymax = Math.max(...array)
    let num = array.indexOf(arraymax)
    if (num == 0) {
      let map = 'Vertigo'
      return map
    } else if (num == 1) {
      let map = 'Inferno'
      return map
    } else if (num == 2) {
      let map = 'Dust2'
      return map
    } else if (num == 3) {
      let map = 'Train'
      return map
    } else if (num == 4) {
      let map = 'Nuke'
      return map
    } else {
      let map = 'Nenhum'
      return map
    }
  }

  calculaWinRate(stats: any) {
    let wins = stats.find((x: Stats) => x.name === 'total_matches_won').value
    let matches = stats.find((x: Stats) => x.name === 'total_matches_played').value
    let winrate = (wins / matches) * 100
    let tofixed = winrate.toFixed(0)
    let porcentagem = `${tofixed}%`
    return porcentagem
  }
}
