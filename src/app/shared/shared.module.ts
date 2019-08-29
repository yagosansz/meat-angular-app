import { NgModule, ModuleWithProviders } from '@angular/core';

// Has all the 'basic' directives (e.g.: *ngIf, *ngFor, etc...)
// It's not imported in the Root Module because
// it's indirectly imported by the BrowserModule
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputContainerComponent } from './input-container/input-container.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';

import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { OrderService } from '../order/order.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

import { NotificationService } from './messages/notification.service';

@NgModule({
    declarations: [InputContainerComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    /**
     * *** Why export the modules that are being imported? ***
     * The module(s) that imports this SharedModule won't need to 
     * import them!
     */
    exports: [
        InputContainerComponent, RadioComponent, RatingComponent, SnackbarComponent,
        CommonModule, FormsModule, ReactiveFormsModule 
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService, RestaurantsService, OrderService, NotificationService]
        }
    }
}