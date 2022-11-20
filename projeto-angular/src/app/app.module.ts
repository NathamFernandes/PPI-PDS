import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompetitivoComponent } from './competitivo/competitivo.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompetitivoComponent,
    EstatisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
