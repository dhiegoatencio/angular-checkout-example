import { Component, OnInit } from '@angular/core';

import { CheckoutApiService } from './services/checkout-api.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(
    private checkoutApi: CheckoutApiService
  ) { }

  ngOnInit() {
  }

  handlePayment(payment) {
    this.checkoutApi
      .postPayment(payment)
      .pipe(
        take(1) // automatically unsubscribe
      ).subscribe(
        this.handlePaymentOk,
        this.handlePaymentError
      );
  }

  private handlePaymentOk(res) {
  }

  private handlePaymentError(err) {
  }
}
