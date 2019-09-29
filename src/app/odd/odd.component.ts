import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  odd: any[];
  loading = true;
  error: any;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
        {
          pokemon(name: "Oddish") {
            name
            classification
            resistant
            weaknesses
          }
        }
        `,
      })
      .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
        this.odd = result.data && result.data.pokemon;
        console.log("data: " + JSON.stringify(this.odd));
        this.loading = result.loading;
        this.error = result.errors;
      });
  }

  findClass(): Observable<object> {
    const classed = odd.classification;
    return of(classed);
  }

}
