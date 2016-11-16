import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageExampleComponent } from './page-example.component';

const routes: Routes = [
  { path: '', component: PageExampleComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PageExampleRoutingModule { }