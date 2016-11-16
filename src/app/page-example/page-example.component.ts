import { Component, OnInit } from '@angular/core';

import { FakeService } from '../core/fake-service';

@Component({
  selector: 'my-page',
  templateUrl: './page-example.component.html'
})
export class PageExampleComponent implements OnInit {

  data: any;

  constructor(private fakeService: FakeService) { }

  ngOnInit(): void {
    this.data = this.fakeService.getNumbers();
  }
}