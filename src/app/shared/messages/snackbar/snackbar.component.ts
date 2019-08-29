import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { NotificationService } from './../notification.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

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

  message: string

  snackVisibility: string = 'hidden' // Component property to define visibility

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    // Using two Observables independently will make the snackbar
    // behave in a weird way...if one snackbar is up but its timer is close to an end,
    // triggering a second one will make it disappear as soon as the 1st one finshes!
    this.notificationService.notifier.subscribe(message => {
      this.message = message
      this.snackVisibility = 'visible'
      Observable.timer(2500).subscribe(timer => this.snackVisibility = 'hidden')
    })
  }

}
