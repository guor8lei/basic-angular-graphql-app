import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

import { POKEMON } from '../pokemon';

function getPokemonName() {
  const min = Math.ceil(0);
  const max = Math.floor(151);
  const pokemonNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return POKEMON[pokemonNumber];
}

const PokemonQuery = gql`
  query PokemonQuery($pokeName: String!) {
    pokemon(name: $pokeName) {
      number
      name
      image
      types
      attacks {
        special {
          name
          type
        }
      }
      evolutions {
        name
      }
    }
  }
  `;

@Component({
  selector: 'app-pokemon-name',
  templateUrl: './pokemon-name.component.html',
  styleUrls: ['./pokemon-name.component.css']
})

export class PokemonNameComponent implements OnInit {

  pokemon: {};
  pokeName= getPokemonName();
  hasEvolution = null;

  constructor(private apollo: Apollo) { }
  // constructor() { }

  // getPokemonName() {};

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
        this.hasEvolution = result.data.pokemon.evolutions[0].name;
      });
  }

}
