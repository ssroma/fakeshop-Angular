import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'product-list',
  template: `
    <div class="container">
      <div *ngIf="isLoading"><h3>Loading...</h3></div>

      <product-item
        *ngFor="let prodItem of products"
        [product]="prodItem"
      ></product-item>
    </div>
  `,
  styles: [
    `
      .container {
        width: 100%;
        margin-top: 6rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .container product-item {
        width: 90%;
      }

      @media (min-width: 600px) {
        .container product-item {
          width: 33.333%;
        }
      }
    `,
  ],
})
export class ProductListComponent implements OnInit {
  products: any[] = {} as [];
  isLoading: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((prodList: any) => {
      this.products = prodList;
      this.isLoading = false;
    });
  }
}
