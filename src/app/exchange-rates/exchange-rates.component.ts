import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { ApolloQueryResult } from "apollo-client";

@Component({
  selector: "app-exchange-rates",
  templateUrl: "./exchange-rates.component.html",
  styleUrls: ["./exchange-rates.component.css"]
})
export class ExchangeRatesComponent implements OnInit {
  rates: any[];

  loading = true;
  error: any;
  myCount: number = 0;
  totalnum: number;
  pokemon: string;
  pokemonmoves: any[];
  pokemonid: string;
  constructor(private apollo: Apollo) {}
  ngOnInit() {
    this.apollo
      .watchQuery({
        // {
        //   rates(currency: "USD") {
        //     currency
        //     rate
        //   }
        // }

        query: gql`
          {
            pokemons(first: 1000) {
              name
            }
          }
        `
      })
      .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
        this.rates = result.data.pokemons;
        this.loading = result.loading;
        this.error = result.errors;
        this.totalnum = this.rates.length;
      });
  }
  onNotify($event: any) {
    console.log($event);
    this.myCount += $event;
    console.log(this.totalnum);
  }
  whatAmI() {
    this.pokemon = this.rates[
      (this.myCount * this.myCount) % this.totalnum
    ].name;
    window.alert(this.pokemon);
    this.getInfo();
  }
  getInfo() {
    const pokemoninfo = gql`
      query pokemoninfo($name: String!) {
        pokemon(name: $name) {
          id
          number
          name
          attacks {
            special {
              name
              type
              damage
            }
          }
        }
      }
    `;

    this.apollo
      .watchQuery({
        query: pokemoninfo,
        variables: {
          name: this.pokemon
        }
      })
      .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
        this.pokemonmoves = result.data.pokemon.attacks.special;
        this.pokemonid = result.data.pokemon.id;
      }); // do whatever

    // 1, "string", false
  }

  getMoreInfo() {
    if (!this.pokemon) {
      // if a is negative,undefined,null,empty value then...
      window.alert("You havent revealed your pokemon yet!!!"); // do whatever
    } else {
      window.alert("Your pokemon name is " + this.pokemon);

      window.alert("Your pokemon id is " + this.pokemonid);
      for (let move of this.pokemonmoves) {
        window.alert("You can do " + move.name + " attack!");
      }
    }
  }
}
