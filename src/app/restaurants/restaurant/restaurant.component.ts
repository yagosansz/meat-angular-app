import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  animations: [
    trigger('restaurantSlideIn', [
      state('ready', style({ opacity: 1 })), // Represents the component as we will see it.
      // The moment when this component is not the DOM tree (void)...
      // The backend is fetching the restaurants' list from the database.
      transition('void => ready', [ 
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }), // Applying a style to the transition.
        animate('700ms 0s ease-in-out')
      ]) 
    ])
  ]
})
export class RestaurantComponent implements OnInit {

  restaurantState = 'ready' // Component's property that represents the trigger's state

  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
