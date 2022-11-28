import { StatsReais } from './../model/statsreais';
import { Stats } from './../model/stats';
import { PlayerStats } from './../model/playerstats';
import { Jogador } from './../model/jogador';
import { ApisteamService } from './../model/apisteam.service';
import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';

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

  constructor(private ss: ApisteamService) {
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
  }


  ngOnInit(): void {
  }

  exibirDadosUser(iduser: HTMLInputElement): void {
    this.ss.obterStatsUser(iduser.value).subscribe(res => {
      this.listaJogador = res
      this.estatesJogador = this.listaJogador.playerstats.stats
      for (let i = 0; i < 14; i ++) {
        let variavel = this.estatesJogador.find((x: Stats) => x.name === this.listaPegar[i]).value
        this.listaCoisas[this.listaPegar[i]] = variavel
      } 
      console.log(this.listaCoisas)
    })

  }
  compararDadosAmigos(idamigo1: HTMLInputElement, idamigo2: HTMLInputElement): void {
    this.ss.obterStatsUser(idamigo1.value).subscribe(res => {
      this.listaAmigoUm = res
      this.estatesAmigoUm = this.listaAmigoUm.playerstats.stats
      for (let i = 0; i < 14; i ++) {
        let variavel = this.estatesAmigoUm.find((x: Stats) => x.name === this.listaPegar[i]).value
        this.listaCoisasUm[this.listaPegar[i]] = variavel
      } 

      console.log(this.listaCoisasUm)
    })
    this.ss.obterStatsUser(idamigo2.value).subscribe(res => {
      this.listaAmigoDois = res
      this.estatesAmigoDois = this.listaAmigoDois.playerstats.stats
      for (let i = 0; i < 14; i ++) {
        let variavel = this.estatesAmigoDois.find((x: Stats) => x.name === this.listaPegar[i]).value
        this.listaCoisasDois[this.listaPegar[i]] = variavel
      } 

      console.log(this.listaCoisasDois)
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
