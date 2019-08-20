import { Injectable } from "@angular/core";

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';

import { MEAT_API } from './../app.api';

@Injectable()
export class OrderService {
    constructor(private shoppingCartService: ShoppingCartService, 
                private http: Http) {}

    cartItems(): CartItem[] {
        return this.shoppingCartService.items
    }

    increaseItemQty(item: CartItem) {
        this.shoppingCartService.increaseItemQty(item)
    }

    decreaseItemQty(item: CartItem) {
        this.shoppingCartService.decreaseItemQty(item)
    }

    removeItem(item: CartItem) {
        this.shoppingCartService.removeItem(item)
    }

    itemsValue() {
        return this.shoppingCartService.total()
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        
        // Defining the Observable's configuration
        return this.http.post(`${MEAT_API}/orders`,
                                JSON.stringify(order),
                                new RequestOptions({ headers: headers }))
                        .map(response => response.json())
                        .map(order => order.id)
    }

    clear() {
        this.shoppingCartService.clear()
    }
}