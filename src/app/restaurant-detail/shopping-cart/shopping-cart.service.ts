import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';
import { CartItem } from './cart-item.model';

export class ShoppingCartService {
    items: CartItem[] = []

    clear() {
        this.items = []
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if(foundItem) {
            this.increaseItemQty(foundItem)
            // foundItem.quantity = foundItem.quantity + 1
        } else {
            this.items.push(new CartItem(item))
        }
    }

    increaseItemQty(item: CartItem) {
        item.quantity = item.quantity + 1
    }

    decreaseItemQty(item: CartItem) {
        item.quantity = item.quantity - 1
        if(item.quantity === 0) {
            this.removeItem(item)
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((total, value) => total + value, 0)
    }
}