import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { PokemonNameComponent } from './pokemon-name/pokemon-name.component';
import { PokemonEvolutionComponent } from './pokemon-evolution/pokemon-evolution.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';

const appRoutes: Routes = [
  { path: 'name', component: PokemonNameComponent },
  { path: 'type', component: PokemonTypeComponent },
  { path: 'evolution', component: PokemonEvolutionComponent },
  { path: '',
    redirectTo: '/name',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonNameComponent,
    PokemonEvolutionComponent,
    PokemonTypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
