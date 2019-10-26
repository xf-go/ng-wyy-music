import { NgModule, InjectionToken } from '@angular/core';

export const API_CONFIG = new InjectionToken('ApiConfigToken');

@NgModule({
  declarations: [],
  imports: [

  ],
  providers: [
    { provide: API_CONFIG, useValue: 'http://localhost:3000/' }
    // 作用同上
    // { provide: 'ApiConfigToken', useValue: 'http://localhost:3000/' }
    // angular6以前写在此处，对应 home.service.ts 文件的 providedIn: ServicesModule
    // HomeService
  ]
})
export class ServicesModule { }
