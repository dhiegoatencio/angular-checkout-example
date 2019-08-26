import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bxs-checkout',
  templateUrl: './bxs-checkout.component.html',
  styleUrls: ['./bxs-checkout.component.scss']
})
export class BxsCheckoutComponent {

  @Output() backToPaymentType = new EventEmitter();

  // will change based on user preference
  paymentType = 'card';

  constructor() { }

  handleBackToPaymentType() {
    this.backToPaymentType.emit();
  }
}
