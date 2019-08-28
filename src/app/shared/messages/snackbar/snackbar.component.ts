import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('300ms 0ms ease-in')), // duration delay easing (acceleration)
      transition('visible => hidden', animate('300ms 0ms ease-out')) // duration delay easing (acceleration)
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Hello there'

  snackVisibility: string = 'hidden' // Component property to define visibility

  constructor() { }

  ngOnInit() {
  }

}
