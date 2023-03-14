import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './views/product/product.component';
import { NavProductComponent } from './components/nav-product/nav-product.component';
import { CardProductsComponent } from './components/card-products/card-products.component';


@NgModule({
  declarations: [
    ProductComponent,
    NavProductComponent,
    CardProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductModule { }
