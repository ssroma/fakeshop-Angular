import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any = {};

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // let id = +this.route.snapshot.params['id'];
    // this.productService.getProduct(id).subscribe((prod) => {
    //   this.product = prod;
    // });
    this.product = this.route.snapshot.data['product'];
  }
}
