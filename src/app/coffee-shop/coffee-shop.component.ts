import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

import { SHOPS } from '../mock-shops';

@Component({
  selector: 'app-coffee-shop',
  templateUrl: './coffee-shop.component.html',
  styleUrls: ['./coffee-shop.component.css']
})
export class CoffeeShopComponent implements OnInit {

  shops = SHOPS;

  constructor() { }

  ngOnInit() { 

  }

  // shops: any[];
  // loading = true;
  // error: any;

  // constructor(private apollo: Apollo) { }

  // ngOnInit() {
  //   this.apollo
  //     .watchQuery({
  //       query: gql`
  //         {
  //           search(term: "coffee", location: "san francisco", limit: 10) {
  //             total
  //             business {
  //               name
  //               review_count
  //               rating
  //             }
  //           }
  //         }
  //       `,
  //     })
  //     .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
  //       this.shops = result.data && result.data.business;
  //       this.loading = result.loading;
  //       this.error = result.errors;
  //     });
  // }

}
