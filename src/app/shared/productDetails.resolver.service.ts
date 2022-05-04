import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { ProductService } from '../product/service/product.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductDetailsResolver implements Resolve<any> {
  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //return this.eventService.getEvents().pipe(map((events) => events));
    let id = +route.params['id'];
    return this.productService.getProduct(id).pipe(map((prod) => prod));
  }
}
