import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Order, OrderItem } from './order.model';

import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartao de Debito", value: "DEB" },
    { label: "Cartao de Credito", value: "CRD" }
  ]

  constructor(private orderService: OrderService, 
              private router: Router) { }

  max: number = 7
  min: number = 1
  deliveryCost: number = Math.floor(Math.random() * (this.max - this.min + 1) + this.min)

  ngOnInit() {
  }

  cartItems() {
    return this.orderService.cartItems()
  }

  increaseItemQty(item: CartItem) {
    this.orderService.increaseItemQty(item)
  }

  decreaseItemQty(item: CartItem) {
    this.orderService.decreaseItemQty(item)
  }

  removeItem(item: CartItem) {
    this.orderService.removeItem(item)
  }

  itemsValue() {
    return this.orderService.itemsValue()
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
                         .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      console.log(`Compra concluida: ${orderId}`)
      this.router.navigate(['/order-summary'])
      this.orderService.clear()
    })
    console.table(order)
  }

}
