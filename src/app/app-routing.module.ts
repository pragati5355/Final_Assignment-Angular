import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelComponent } from './cancel/cancel.component';
import { ProductComponent } from './product/product.component';
import { SucessComponent } from './sucess/sucess.component';

const routes: Routes = [

  {
    path : '',
    redirectTo : "productDetails",
    pathMatch : 'full'

  },
  {
    path : 'productDetails',
    component : ProductComponent

  },
  {
    path : 'cancel',
    component : CancelComponent

  },
  {
    path : 'sucess',
    component : SucessComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
