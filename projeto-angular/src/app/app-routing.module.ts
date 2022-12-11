import { Routes, RouterModule } from '@angular/router';
import { IndisponivelComponent } from './indisponivel/indisponivel.component';
import { ComunidadeComponent } from './comunidade/comunidade.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { CompetitivoComponent } from './competitivo/competitivo.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'competitivo', component: CompetitivoComponent},
  { path: 'estatisticas', component: EstatisticasComponent},
  { path: 'comunidade', component: ComunidadeComponent},
  { path: '**', component: IndisponivelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
