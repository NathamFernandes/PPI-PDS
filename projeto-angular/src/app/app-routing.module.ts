import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { CompetitivoComponent } from './competitivo/competitivo.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'competitivo', component: CompetitivoComponent},
  { path: 'estatisticas', component: EstatisticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
