import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants) // that's when the HTTP GET request is being made! After completed, the listener gets the data
  }

}
