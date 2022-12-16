import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompetitivoComponent } from './competitivo/competitivo.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { HttpClientModule } from '@angular/common/http';
import { ComunidadeComponent } from './comunidade/comunidade.component';
import { IndisponivelComponent } from './indisponivel/indisponivel.component';
import { FuriaComponent } from './times-brasileiros/furia/furia.component';
import { ImperialComponent } from './times-brasileiros/imperial/imperial.component';
import { NationComponent } from './times-brasileiros/nation/nation.component';
import { PainComponent } from './times-brasileiros/pain/pain.component';
import { FluxoComponent } from './times-brasileiros/fluxo/fluxo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompetitivoComponent,
    EstatisticasComponent,
    ComunidadeComponent,
    IndisponivelComponent,
    FuriaComponent,
    ImperialComponent,
    NationComponent,
    PainComponent,
    FluxoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
