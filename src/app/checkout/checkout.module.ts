import { BxsCheckoutModule } from './../shared/components/bxs-checkout/bxs-checkout.module';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    BxsCheckoutModule,
  ]
})
export class CheckoutModule { }
