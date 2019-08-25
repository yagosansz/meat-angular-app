import { NgModule } from '@angular/core';

// Has all the 'basic' directives (e.g.: *ngIf, *ngFor, etc...)
// It's not imported in the Root Module because
// it's indirectly imported by the BrowserModule
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputContainerComponent } from './input-container/input-container.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
    declarations: [InputContainerComponent, RadioComponent, RatingComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    /**
     * *** Why export the modules that are being imported? ***
     * The module(s) that imports this SharedModule won't need to 
     * import them!
     */
    exports: [
        InputContainerComponent, RadioComponent, RatingComponent,
        CommonModule, FormsModule, ReactiveFormsModule 
    ]
})

export class SharedModule {}