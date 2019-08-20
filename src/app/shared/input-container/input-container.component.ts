import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input-container.component.html'
})
export class InputContainerComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() okMessage: string
  @Input() errorMessage: string

  input: any

  // I want a reference to NgModel (directive) assigned to my variable 'model' of type NgModel.s
  @ContentChild(NgModel) model: NgModel

  constructor() { }

  ngOnInit() {
  }

  // This method is invoked after the content (the one that will replace <ngContent></ngContent>) 
  // has been defined.
  ngAfterContentInit() {
    this.input = this.model
    if(this.input === undefined) {
      throw new Error('This component needs to be used with the NgModel directive!')
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.touched || this.input.dirty)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.touched || this.input.dirty) // !this.input.valid
  }

}
