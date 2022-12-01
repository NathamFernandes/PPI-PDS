import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompetitivoComponent } from './competitivo/competitivo.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComunidadeComponent } from './comunidade/comunidade.component';
import { IndisponivelComponent } from './indisponivel/indisponivel.component';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
