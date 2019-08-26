import { Component, EventEmitter, Output } from '@angular/core';

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

  constructor() { }

  handleBackToPaymentSelection() {
    this.backToPaymentSelection.emit();
  }

  handleSubmitPayment(event) {
    this.submitPayment.emit(event);
  }
}
