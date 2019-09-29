import { Component, OnInit, Input } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Pokemon } from "../pokemon";
import { NgForm, FormControl } from "@angular/forms";

@Component({
  selector: "app-search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.css"]
})
export class SearchBoxComponent implements OnInit {
  pokemonNames: Array<string>;
  @Input() selectedPokemon: Array<Pokemon>;
  myControl = new FormControl();

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.getPokemonNames();
  }

  getPokemonNames() {
    const query = gql`
      {
        pokemons(first: 1000) {
          name
        }
      }
    `;
    this.apollo
      .query({
        query
      })
      .subscribe(result => {
        if (result) {
          let data: any = result.data;
          this.pokemonNames = data.pokemons.map(x => x.name);
        }
      });
  }

  setRandomPokemon() {
    const N = this.pokemonNames.length;
    const rng = [...new Array(3)].map(() => Math.round(Math.random() * N));
    const names = rng.map(i => this.pokemonNames[i]);
    this.selectedPokemon = [];
    names.map(name => this.getPokemon(name));
  }

  getPokemon(value: string) {
    if (!value) return;
    const query = gql`
      {
        pokemon(name: "${value}") {
          number
          name
        }
      }
    `;
    this.apollo
      .query<Pokemon>({
        query
      })
      .subscribe(result => {
        if (result) {
          let data: any = result.data;
          if (this.selectedPokemon.length < 3) {
            this.selectedPokemon.push({
              number: parseInt(data.pokemon.number),
              name: data.pokemon.name
            });
          }
        }
      });
  }

  getImageUrl(number: number) {
    return `../../assets/images/${number}.png`;
  }

  onSubmit(f: NgForm) {
    // Update selected Pokemon
    const { first, second, third } = f.value;
    if (first && second && third) {
      console.log("Full team!");
    }
  }
}
