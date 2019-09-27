import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

// import { SHOPS } from '../pokemon';
import { HttpHeaders } from '@angular/common/http';
import { expressionType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-coffee-shop',
  templateUrl: './coffee-shop.component.html',
  styleUrls: ['./coffee-shop.component.css']
})

export class CoffeeShopComponent implements OnInit {

  // shops = SHOPS;

  // constructor() { }

  // ngOnInit() { 

  // }

  shops: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            search(term: "coffee", location: "san francisco", limit: 10) {
              total
              business {
                name
                review_count
                rating
              }
            }
          }
        `,
        context: { 
          headers: new HttpHeaders()
            .set("Access-Control-Allow-Origin", "*")
            .set("Content-Type", "application/graphql")
            .set("Authorization", "Bearer rzgC23uyrJLqmqwa5-CgZeo1wsgVTMm2FgDtod8rYXvVGkr_fyNk9G4-1ngfnuFpnn5Bmeuz8tQdF2rExAN-z_O4vq9cQSYbCCOmt-cR-7fYofDWuJ_kGGoj6ACNXXYx")
        }
      })
      .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
        this.shops = result.data && result.data.business;
        this.loading = result.loading;
        this.error = result.errors;
      });
  }

}
