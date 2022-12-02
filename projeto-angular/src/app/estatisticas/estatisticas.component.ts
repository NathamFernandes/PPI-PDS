import { Sumario } from './../model/sumario';
import { StatsReais } from './../model/statsreais';
import { Stats } from './../model/stats';
import { PlayerStats } from './../model/playerstats';
import { Jogador } from './../model/jogador';
import { ApisteamService } from './../model/apisteam.service';
import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {
  listaJogador: Jogador;
  listaAmigoUm: Jogador;
  listaAmigoDois: Jogador;
  estatesJogador: any;
  estatesAmigoUm: any;
  estatesAmigoDois: any;
  listaPegar: any;
  listaCoisas: StatsReais;
  listaCoisasUm: StatsReais;
  listaCoisasDois: StatsReais;
  sumarioUsuario: Sumario;
  sumarioAmigoUm: Sumario;
  sumarioAmigoDois: Sumario;
  iduserForm: FormGroup;
  idamigosForm: FormGroup;

  constructor(private ss: ApisteamService, private fb: FormBuilder) {
    this.listaJogador = new Jogador;
    this.listaAmigoUm = new Jogador;
    this.listaAmigoDois = new Jogador;
    this.estatesJogador = {};
    this.estatesAmigoUm = {};
    this.estatesAmigoDois = {};
    this.listaPegar = ['total_kills', 'total_deaths', 'total_time_played', 'total_wins', 'total_kills_deagle', 'total_kills_awp', 'total_kills_ak47', 'total_kills_m4a1', 'total_kills_headshot', 'total_kills_enemy_blinded', 'total_rounds_map_de_vertigo', 'total_rounds_map_de_inferno', 'total_rounds_map_de_dust2', 'total_rounds_map_de_train', 'total_rounds_map_de_nuke'];
    this.listaCoisas = new StatsReais;
    this.listaCoisasUm = new StatsReais;
    this.listaCoisasDois = new StatsReais;
    this.sumarioUsuario = new Sumario;
    this.sumarioAmigoUm = new Sumario;
    this.sumarioAmigoDois = new Sumario;
    this.iduserForm = this.fb.group({
      iduser: ["", [Validators.required]],
    })
    this.idamigosForm = this.fb.group({
      idamigo1:  ["", [Validators.required]],
      idamigo2:  ["", [Validators.required]]
    })
  }


  ngOnInit(): void {
  }

  exibirDadosUser(iduser: HTMLInputElement): void {
    this.ss.obterStatsUser(iduser.value).subscribe(res => {
      this.listaJogador = res
      this.estatesJogador = this.listaJogador.playerstats.stats
      let nome = this.estatesJogador
      let coisa = this.listaCoisas
      this.appendaObjeto(nome, coisa)
    })
    this.ss.obterSumario(iduser.value).subscribe(res => {
      this.sumarioUsuario = res
      console.log(this.sumarioUsuario)
    })

  }
  compararDadosAmigos(idamigo1: HTMLInputElement, idamigo2: HTMLInputElement): void {
    this.ss.obterStatsUser(idamigo1.value).subscribe(res => {
      this.listaAmigoUm = res
      this.estatesAmigoUm = this.listaAmigoUm.playerstats.stats
      let nome = this.estatesAmigoUm
      let coisa = this.listaCoisasUm
      this.appendaObjeto(nome, coisa)
    })
    this.ss.obterSumario(idamigo1.value).subscribe(res => {
      this.sumarioAmigoUm = res
      console.log(this.sumarioAmigoUm)
    })
    this.ss.obterStatsUser(idamigo2.value).subscribe(res => {
      this.listaAmigoDois = res
      this.estatesAmigoDois = this.listaAmigoDois.playerstats.stats
      let nome = this.estatesAmigoDois
      let coisa = this.listaCoisasDois
      this.appendaObjeto(nome, coisa)
    })
    this.ss.obterSumario(idamigo2.value).subscribe(res => {
      this.sumarioAmigoDois = res
      console.log(this.sumarioAmigoDois)
    })
  }

  // Funções chamáveis para encurtamento de código

  appendaObjeto(nome: any, coisa: StatsReais) {
    for (let i = 0; i < 14; i++) {
      let variavel = nome.find((x: Stats) => x.name === this.listaPegar[i]).value
      coisa[this.listaPegar[i]] = variavel
    }
    coisa['kd'] = this.calculaKD(nome)
    coisa['mapa_preferido'] = this.calculaMapa(nome)
  }

  calculaKD(nome: any) {
    let kills = nome.find((x: Stats) => x.name === 'total_kills').value
    let deaths = nome.find((x: Stats) => x.name === 'total_deaths').value
    let result = kills / deaths
    let kd = result.toFixed(2)
    return kd
  }

  calculaMapa(nome: any) {
    let vertigo = nome.find((x: Stats) => x.name === 'total_rounds_map_de_vertigo').value
    let inferno = nome.find((x: Stats) => x.name === 'total_rounds_map_de_inferno').value
    let dust2 = nome.find((x: Stats) => x.name === 'total_rounds_map_de_dust2').value
    let train = nome.find((x: Stats) => x.name === 'total_rounds_map_de_train').value
    let nuke = nome.find((x: Stats) => x.name === 'total_rounds_map_de_nuke').value
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
}
