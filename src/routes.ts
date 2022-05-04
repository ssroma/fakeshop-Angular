import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './app/product/product-details/product-details.component';
import { ProductListComponent } from './app/product/product-list/product-list.component';
import { NotFoundComponent } from './app/layout/not-found/not-found.component';
import { ProductDetailsResolver } from './app/shared/productDetails.resolver.service';
import { CartComponent } from './app/cart/cart.component';

export const appRoutes: Routes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    resolve: { product: ProductDetailsResolver },
  },
  { path: 'cart', component: CartComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];
