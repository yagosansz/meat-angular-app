import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

import { MEAT_API } from './../app.api';
import { ErrorHandler } from './../app.error-handler';


@Injectable()

export class RestaurantsService {

    constructor(private http: Http) {}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
          .map(response => response.json()) // I'm only interested in the array data among all the data returned in the response...
          .catch(ErrorHandler.handleError) // your chance to log the error and return an observable
        }
    
    restaurantById(id: string): Observable<Restaurant> {
      return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    restaurantReviews(id: string): Observable<any> {
      return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    restaurantMenu(id: string): Observable<MenuItem[]> {
      return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}