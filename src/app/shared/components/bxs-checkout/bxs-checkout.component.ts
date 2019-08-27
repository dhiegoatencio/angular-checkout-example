import { Component, EventEmitter, Output } from '@angular/core';

import { BxsCheckoutForm } from './bxs-checkout-form/bxs-checkout-form.interface';

@Component({
  selector: 'bxs-checkout',
  templateUrl: './bxs-checkout.component.html',
  styleUrls: ['./bxs-checkout.component.scss']
})
export class BxsCheckoutComponent {

  @Output() submitPayment = new EventEmitter();
  @Output() backToPaymentSelection = new EventEmitter();

  // will change based on user preference
  paymentType = 'card';

  cardNumber: string;

  constructor() { }

  handleFormChanges(values: BxsCheckoutForm) {
    this.cardNumber = values.number;
  }

  handleBackToPaymentSelection() {
    this.backToPaymentSelection.emit();
  }

  handleSubmitPayment(event) {
    this.submitPayment.emit(event);
  }
}
