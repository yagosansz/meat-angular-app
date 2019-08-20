import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MenuItem } from '../menu-item/menu-item.model';
import { RestaurantsService } from '../../restaurants/restaurants.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id']
    this.menu = this.restaurantsService.restaurantMenu(id)
  }

  // addMenuItem(item: MenuItem) {
  //   console.table(item)
  // }
}
