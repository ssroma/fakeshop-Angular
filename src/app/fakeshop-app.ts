import { Component } from '@angular/core';

@Component({
  selector: 'fakeshop-root',
  template: `<div id="wrapper">
    <header-app></header-app>
    <router-outlet></router-outlet>
  </div>`,
  styles: [''],
})
export class FakeShopComponent {}
