import { Component } from "@angular/core";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  selectedPokemon = [];
  teamReady = false;

  updateTeamStatus(status: boolean) {
    this.teamReady = status;
  }

  updateTeam(team: Array<Pokemon>) {
    this.selectedPokemon = team;
  }
}
