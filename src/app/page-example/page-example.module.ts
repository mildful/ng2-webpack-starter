import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PageExampleRoutingModule } from './page-example-routing.module';
import { PageExampleComponent } from './page-example.component';

@NgModule({
  imports: [
    // This module is loaded asynchronously, this is the reason why we need to import Shared Module
    // Angular creates a new injector, independent from the AppModule one.
    SharedModule,
    PageExampleRoutingModule
  ],
  declarations: [ PageExampleComponent ]
})
export default class PageExampleModule { }