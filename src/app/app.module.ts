import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { PersonalityComponent } from './personality/personality.component';

@NgModule({
   declarations: [
      AppComponent,
      ExchangeRatesComponent,
      PersonalityComponent
   ],
   imports: [
      BrowserModule,
      GraphQLModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
