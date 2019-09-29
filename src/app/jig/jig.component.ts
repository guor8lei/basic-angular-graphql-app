import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';

@Component({
  selector: 'app-jig',
  templateUrl: './jig.component.html',
  styleUrls: ['./jig.component.css']
})
export class JigComponent implements OnInit {
  jig: any[];
  loading = true;
  error: any;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
        {
          pokemon(name: "JigglyPuff") {
            name
            classification
            types
            fleeRate
          }
        }
        `,
      })
      .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
        this.jig = result.data && result.data.pokemon;
        console.log("data: " + JSON.stringify(this.jig));
        this.loading = result.loading;
        this.error = result.errors;
      });
  }

  // findFleeRate(): Observable<object> {
  //   const fleeRate = this.jig.fleeRate;
  //   return of(fleeRate);
  // }

}
