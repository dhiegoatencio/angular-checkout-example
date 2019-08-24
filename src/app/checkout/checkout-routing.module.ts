import { RouterModule, Routes } from '@angular/router';

import { CheckoutComponent } from './checkout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
