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
import { MatSlideToggleModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompetitivoComponent,
    EstatisticasComponent,
    ComunidadeComponent,
    IndisponivelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
