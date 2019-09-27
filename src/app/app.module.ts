import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { PokemonNameComponent } from './pokemon-name/pokemon-name.component';
import { PokemonEvolutionComponent } from './pokemon-evolution/pokemon-evolution.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonNameComponent,
    PokemonEvolutionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
