import { ProductComponent } from './modules/product/views/product/product.component';
import { HomeComponent } from './modules/home/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',component: HomeComponent
  },
  {
    path:'home',component: HomeComponent
  },
  { 
    path:'products',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
