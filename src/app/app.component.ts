import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

@Component({
  selector: 'my-app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './reset.style.scss',
    './common.style.scss',
    './app.style.scss',
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public appState: AppState) {}

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}