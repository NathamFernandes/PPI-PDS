import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Sumario } from '../model/steam-ts/sumario';
import { StatsReais } from '../model/steam-ts/statsreais';
import { Stats } from '../model/steam-ts/stats';
import { Jogador } from '../model/steam-ts/jogador';
import { ApisteamService } from './../model/apisteam.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {
  jogador; amigoUm; amigoDois: Jogador;
  dados; dadosAmigoUm; dadosAmigoDois: StatsReais;
  sumarioUsuario; sumarioAmigoUm; sumarioAmigoDois: Sumario;
  listaStats: any;
  iduserForm; idamigoForm: FormGroup;

  constructor(private ss: ApisteamService, private fb: FormBuilder) {
    this.listaStats = ['total_kills', 'total_deaths', 'total_matches_won', 'total_matches_played', 'total_kills_awp', 'total_kills_ak47', 'total_kills_m4a1', 'total_rounds_map_de_vertigo', 'total_rounds_map_de_inferno', 'total_rounds_map_de_dust2', 'total_rounds_map_de_train', 'total_rounds_map_de_nuke'];
    this.jogador = new Jogador;
    this.amigoUm = new Jogador;
    this.amigoDois = new Jogador;
    this.dados = new StatsReais;
    this.dadosAmigoUm = new StatsReais;
    this.dadosAmigoDois = new StatsReais;
    this.sumarioUsuario = new Sumario;
    this.sumarioAmigoUm = new Sumario;
    this.sumarioAmigoDois = new Sumario;
    this.iduserForm = this.fb.group({
      iduser: ["", [Validators.required, Validators.maxLength(32)]],
    });
    this.idamigoForm = this.fb.group({
      idamigo1: ["", [Validators.required, Validators.maxLength(32)]],
      idamigo2: ["", [Validators.required, Validators.maxLength(32)]]
    });
  }

  ngOnInit(): void {
  }

  exibirDadosUser(iduser: HTMLInputElement): void {
    this.ss.obterStatsUser(iduser.value).subscribe((res: any) => {
      // Recebe as estatísticas brutas da STEAM
      this.jogador = res
      // Condição - se o jogador não possuir estatísticas no CS:GO
      if (this.jogador.playerstats == undefined) {
        // this.dados = { }
        window.alert('Opção inválida! O usuário não possui estatísticas no CS:GO. Por favor, verifique se o perfil está privado ou não mostra informações de jogo.')
      } else {
        this.appendaObjeto(this.jogador.playerstats.stats, this.dados)
      }

    })
    this.ss.obterSumario(iduser.value).subscribe((res: any) => {
      this.sumarioUsuario = res
    })
  }

  compararDadosAmigos(idamigo1: HTMLInputElement, idamigo2: HTMLInputElement): void {
    this.ss.obterStatsUser(idamigo1.value).subscribe((res: any) => {
      this.amigoUm = res
      if (this.amigoUm.playerstats == undefined || this.amigoDois.playerstats == undefined) {
        window.alert('Opção inválida! O usuário não possui estatísticas no CS:GO. Por favor, verifique se o perfil está privado ou não mostra informações de jogo.')
      } else {
        this.appendaObjeto(this.amigoUm.playerstats.stats, this.dadosAmigoUm)
      }
    })
    this.ss.obterSumario(idamigo1.value).subscribe((res: any) => {
      this.sumarioAmigoUm = res
    })
    this.ss.obterStatsUser(idamigo2.value).subscribe((res: any) => {
      this.amigoDois = res
      if (this.amigoUm.playerstats == undefined || this.amigoDois.playerstats == undefined) {
        window.alert('Opção inválida! O usuário não possui estatísticas no CS:GO. Por favor, verifique se o perfil está privado ou não mostra informações de jogo.')
      } else {
        this.appendaObjeto(this.amigoDois.playerstats.stats, this.dadosAmigoDois)
      }
    })
    this.ss.obterSumario(idamigo2.value).subscribe((res: any) => {
      this.sumarioAmigoDois = res
    })
  }

  // Funções chamáveis para encurtamento de código

  appendaObjeto(stats: any, data: StatsReais) {
    for (let i = 0; i < 11; i++) {
      let variavel = stats.find((x: Stats) => x.name === this.listaStats[i]).value
      data[this.listaStats[i]] = variavel
    }
    data['kd'] = this.calculaKD(stats)
    data['mapa_preferido'] = this.calculaMapa(stats)
    data['win_rate'] = this.calculaWinRate(stats)
    console.log(data)
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
