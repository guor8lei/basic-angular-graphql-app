import { Component, OnInit, Input } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-team-details",
  templateUrl: "./team-details.component.html",
  styleUrls: ["./team-details.component.css"]
})
export class TeamDetailsComponent implements OnInit {
  @Input() pokemons: Array<Pokemon>;
  resistant = {};
  weakness = {};

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    console.log(this.pokemons);
    this.getTypeAdvantages();
  }

  getTypeAdvantages() {
    for (let pokemon of this.pokemons) {
      let query = gql`
        {
          pokemon(name: "${pokemon.name}") {
            resistant
            weaknesses
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
            console.log(data.pokemon);
            for (let type of data.pokemon.weaknesses) {
              this.weakness[type] = (this.weakness[type] || 0) + 1;
            }
            for (let type of data.pokemon.resistant) {
              this.resistant[type] = (this.resistant[type] || 0) + 1;
            }
          }
        });
    }
  }
}
