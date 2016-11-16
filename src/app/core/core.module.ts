import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { FakeService } from './fake-service';

@NgModule({
  imports:      [ ],
  declarations: [ ],
  exports:      [ ],
  providers:    [ FakeService ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }
  /*static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: UserServiceConfig, useValue: config }
      ]
    };
  }*/
}