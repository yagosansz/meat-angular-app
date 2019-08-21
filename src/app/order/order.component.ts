import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  orderForm: FormGroup

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/

  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartao de Debito", value: "DEB" },
    { label: "Cartao de Credito", value: "CRD" }
  ]

  constructor(private orderService: OrderService, 
              private router: Router,
              private formBuilder: FormBuilder) { }

  max: number = 7
  min: number = 1
  deliveryCost: number = Math.floor(Math.random() * (this.max - this.min + 1) + this.min)

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    })
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
