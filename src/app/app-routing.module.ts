import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoContentComponent } from './no-content/no-content.component';

function loadAsync(path: string, ): any {
  const moduleName: string = path.match(/([^/]+)$/)[0];
  return System.import(`${path}/${moduleName}.module`).then((comp: any) => comp.default);
}

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => loadAsync('./home') },
  { path: 'page', loadChildren: () => loadAsync('./page-example') },
  { path: '**', component: NoContentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }