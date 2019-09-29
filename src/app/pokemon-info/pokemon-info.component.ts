import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';
import { Subscription } from 'rxjs';


const pokemonData = gql`
  query pokemon($name: String!) 
  {
    pokemon(name: $name) 
    {
      number
      name
      image
      types
      maxHP
      weight {
        minimum
        maximum
      }
    }
  }
`;

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  constructor(private apollo: Apollo) {}
  currentPokemonData: any[];
  private querySubscription: Subscription;
  name = '';
  image = '';
  data: any[]
  types: any[]
  attacks: any[]
  weight = 0;
  loading = true;
  maxHP = 0;
  error: any;
  testName = "";
  userInput = "Pikachu"


  ngOnInit() {
    console.log(this.testName);
    this.querySubscription = this.apollo
      .watchQuery({
        query: pokemonData,
        variables: {
          name: "Pikachu",
        },
      })
      .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
        this.data = result.data;
        this.name = result.data.pokemon.name;
        this.image = result.data.pokemon.image;
        this.types = result.data.pokemon.types;
        this.maxHP = result.data.pokemon.maxHP;
        this.weight = result.data.pokemon.weight.maximum;
        this.loading = result.loading;
        this.error = result.errors;
      })
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

  onClickMe() {
    console.log(this.userInput);
    this.querySubscription = this.apollo
      .watchQuery({
        query: pokemonData,
        variables: {
          name: this.userInput,
        },
      })
      .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
        console.log(result.data);
        if (result.data.pokemon) {
          this.data = result.data;
          this.name = result.data.pokemon.name;
          this.types = result.data.pokemon.types;
          this.image = result.data.pokemon.image;
          this.maxHP = result.data.pokemon.maxHP;
          this.weight = result.data.pokemon.weight.maximum;
          this.loading = result.loading;
          this.error = result.errors;
        } else {
          alert("not it chief");
        }
      })
  }

  
  // name = '';
  // data: any[]
  // types: any[]
  // loading = true;
  // maxHP = 0;
  // error: any;
  // weight = "";

  // constructor(private apollo: Apollo) {}


  
  // ngOnInit() {

  //   this.apollo
  //     .watchQuery({
  //       query: 
  //       gql`
  //       {
  //         pokemon(name: "Pikachu") {
  //           number
  //           name
  //           types
  //           maxHP
  //         }
  //       }
  //       `,
  //     })
  //     .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
  //       this.data = result.data;
  //       this.name = result.data.pokemon.name;
  //       this.types = result.data.pokemon.types;
  //       this.maxHP = result.data.pokemon.maxHP;
  //       // this.weight = result.data.pokemon.weights[0];
  //       this.loading = result.loading;
  //       this.error = result.errors;
  //     });
  // }
}
