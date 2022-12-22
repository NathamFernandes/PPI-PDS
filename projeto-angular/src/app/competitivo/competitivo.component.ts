import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  novoJogador = new PlayerComp;
  nomeJogadorForm; nomeTimeForm: FormGroup;

  constructor(private hs: ApihltvService, private fb: FormBuilder) {
    this.listaJogadores = [];
    this.listaTimes = [];
    this.noticias = [];
    this.JogadorID = new PlayerComp;
    this.TimeID = new Time;
    this.nomeJogadorForm = this.fb.group({
      nomeplayer: ["", [Validators.required, Validators.pattern('^[a-z0-9 \-]+$')]],
    });
    this.nomeTimeForm = this.fb.group({
      nometime: ["", [Validators.required, Validators.pattern('^[a-z0-9 \-]+$')]],
    });

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

  exibirDadosJogadorID(nomeplayer: HTMLInputElement): void {
    let idplayer = this.achaJogador(nomeplayer.value, this.listaJogadores)
    this.hs.obterJogadorPeloID(idplayer).subscribe(res => {
      this.JogadorID = res
    })
  }

  exibirDadosTimeID(nometime: HTMLInputElement): void {
    let idtime = this.achaTime(nometime.value, this.listaTimes)
    console.log(idtime)
    this.hs.obterTimePeloID(idtime).subscribe(res => {
      this.TimeID = res
      console.log(this.TimeID)
    })
  }

  achaJogador(nome: string, lista: PlayerComp[]) {
    let objetoplayer = lista.find((x: any) => x.nickname.toLowerCase() === nome)!
    let idplayer = objetoplayer['id']
    return idplayer
  }

  achaTime(nome: string, lista: Time[]) {
    let objetotime = lista.find((x: any) => x.name.toLowerCase() === nome)!
    console.log(objetotime)
    let idtime = +objetotime['id']
    return idtime
  }
}