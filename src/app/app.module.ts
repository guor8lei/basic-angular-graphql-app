import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeShopComponent } from './coffee-shop/coffee-shop.component';
import { PokemonNameComponent } from './pokemon-name/pokemon-name.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeShopComponent,
    PokemonNameComponent
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
