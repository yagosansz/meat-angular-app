import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input-container.component.html'
})
export class InputContainerComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() okMessage: string
  @Input() errorMessage: string

  input: any

  // I want a reference to NgModel (directive) assigned to my variable 'model' of type NgModel
  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) controlName: FormControlName

  constructor() { }

  ngOnInit() {
  }

  // This method is invoked after the content (the one that will replace <ngContent></ngContent>) 
  // has been defined.
  ngAfterContentInit() {
    // If this.model is not available, assign this.controlName to this.input
    this.input = this.model || this.controlName
    if(this.input === undefined) {
      throw new Error('This component needs to be used with NgModel or FormControlName!')
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.touched || this.input.dirty)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.touched || this.input.dirty) // !this.input.valid
  }

}
