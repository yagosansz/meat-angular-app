import { Component, OnInit, Input, forwardRef } from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html', 
  /**
   * Registers the component as a ValueAccessor to be used with the directives NgModel and others...
   */
  providers: [
    {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioComponent),
    multi: true
    }
]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]

  value: any

  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value
    this.onChange(this.value)
  }

    /**
     * - Write a new value to the element. 
     * - It will be called when a directive wants to send a value to your component.
     * (MODEL -> VIEW)
     */
    writeValue(obj: any): void {
      this.value = obj
    }
    /**
     * - Set the function to be called when the control (e.g.: Forms API) receives a change event.
     * - The callback function is called when the control's value changes in the UI.
     * (VIEW -> MODEL)
     */
    registerOnChange(fn: any): void {
      this.onChange = fn
    }

    /**
     * Set the function to be called when the control receives a touch event.
     */
    registerOnTouched(fn: any): void {}
    
    /**
     * This function is called when the control status changes to or from "DISABLED".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    setDisabledState?(isDisabled: boolean): void {}

}
