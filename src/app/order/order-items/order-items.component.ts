import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CartItem } from './../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[]

  @Output() increaseItemQty = new EventEmitter<CartItem>()
  @Output() decreaseItemQty = new EventEmitter<CartItem>()
  @Output() removeItem =  new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {

  }

  emitIncreaseItemQty(item: CartItem) {
    this.increaseItemQty.emit(item)
  }

  emitDecreaseItemQty(item: CartItem) {
    this.decreaseItemQty.emit(item)
  }

  emitRemoveItem(item: CartItem) {
    this.removeItem.emit(item)
  }


}
