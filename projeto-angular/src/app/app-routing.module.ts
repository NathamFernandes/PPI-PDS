import { FluxoComponent } from './times-brasileiros/fluxo/fluxo.component';
import { PainComponent } from './times-brasileiros/pain/pain.component';
import { NationComponent } from './times-brasileiros/nation/nation.component';
import { ImperialComponent } from './times-brasileiros/imperial/imperial.component';
import { FuriaComponent } from './times-brasileiros/furia/furia.component';
import { Routes, RouterModule } from '@angular/router';
import { IndisponivelComponent } from './indisponivel/indisponivel.component';
import { ComunidadeComponent } from './comunidade/comunidade.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { CompetitivoComponent } from './competitivo/competitivo.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';

/* As rotas dos times brasileiros (Nation, Imperial, Furia, Pain, Fluxo) não foram implementadas, juntamente com seus componentes, pela falta de tempo para tal. */

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'competitivo', component: CompetitivoComponent },
  { path: 'estatisticas', component: EstatisticasComponent },
  { path: 'comunidade', component: ComunidadeComponent },
  { path: 'nation', component: NationComponent },
  { path: 'imperial', component: ImperialComponent },
  { path: 'furia', component: FuriaComponent },
  { path: 'pain', component: PainComponent },
  { path: 'fluxo', component: FluxoComponent },
  { path: '**', component: IndisponivelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
