import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import { PokemonInscribeComponent } from './pokemon-inscribe/pokemon-inscribe.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inscribe',
    component: PokemonInscribeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonInscribeComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
