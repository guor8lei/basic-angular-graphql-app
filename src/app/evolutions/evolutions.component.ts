import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import { Evolution } from '../evolution';

@Component({
  selector: 'app-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.css']
})
export class EvolutionsComponent implements OnInit {
  evos: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
        {
          pokemon(name: "Charmander") {
            name
            classification
            maxHP
            maxCP
          }
        }
        `,
      })
      .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
        this.evos = result.data && result.data.pokemon;
        console.log("data: " + JSON.stringify(this.evos));
        this.loading = result.loading;
        this.error = result.errors;
      });
  }

  findCP(): Observable<object> {
    const cp = this.evos.maxCP;
    return of(cp);
  }
}
