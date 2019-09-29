import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit {
  rates: any[];
  loading = true;
  error: any;
  myCount: number = 0;
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
          pokemon(name: "Pikachu") {
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
            evolutions {
              id
              number
              name
              weight {
                minimum
                maximum
              }
              attacks {
                fast {
                  name
                  type
                  damage
                }
              }
            }
          }
        }
        `,
      })
      .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
        this.rates = result.data.pokemon;
        this.loading = result.loading;
        this.error = result.errors;
      });
  }
  onNotify($event: any) {

    console.log($event);
    this.myCount += $event;
    window.alert($event);
    window.alert(this.myCount);

  }
}
