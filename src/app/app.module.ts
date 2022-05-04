import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Router
import { appRoutes } from '../routes';

import { FakeShopComponent } from './fakeshop-app';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

// Service
import { ProductService } from './product/service/product.service';
import { ProductDetailsResolver } from './shared/productDetails.resolver.service';

@NgModule({
  declarations: [
    FakeShopComponent,
    HeaderComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    CartComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FontAwesomeModule],
  providers: [ProductService, ProductDetailsResolver],
  bootstrap: [FakeShopComponent],
})
export class AppModule {}
