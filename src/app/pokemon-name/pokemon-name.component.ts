import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

import { POKEMON } from '../pokemon';

function getPokemonName() {
  const min: number = Math.ceil(1);
  const max: number = Math.floor(151);
  const pokemonNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;
  return POKEMON[pokemonNumber];
}

const PokemonQuery: any = gql`
  query PokemonQuery($pokeName: String!) {
    pokemon(name: $pokeName) {
      number
      name
      image
      types
      evolutions {
        name
      }
    }
  }
  `;

@Component({
  selector: 'app-pokemon-name',
  templateUrl: './pokemon-name.component.html',
  styleUrls: ['./pokemon-name.component.css','../app.component.css']
})

export class PokemonNameComponent implements OnInit {

  pokemon: [];
  types: [];
  pokeName: string = getPokemonName();
  hasEvolution: string;
  pokeNameAttempt: string;
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }

  makingChanges() {
    this.submitted = false;
  }

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: PokemonQuery,
        variables: {
          pokeName: this.pokeName,
        }
      })
      .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
        this.pokemon = result.data && result.data.pokemon;
        this.types = result.data.pokemon.types;
        this.hasEvolution = result.data.pokemon.evolutions[0].name;
      });
    
  }

}
