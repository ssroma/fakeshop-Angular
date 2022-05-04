import { Component } from '@angular/core';

@Component({
  selector: 'cart-app',
  template: `
    <div class="cart-container">
      <h2>Under Construction.</h2>
      <a [routerLink]="['/products']">Back to Product List.</a>
    </div>
  `,
  styles: [
    `
      .cart-container {
        margin-top: 6rem;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class CartComponent {}
