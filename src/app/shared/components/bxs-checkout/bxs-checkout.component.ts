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
  cardName: string;
  cardDate: string;

  constructor() { }

  handleFormChanges({number, date, name, cvv}: BxsCheckoutForm) {

    this.cardName = name;
  
    // build card number with mask
    const group2 = number.substr(4, 4);
    const group3 = number.substr(8, 4);
    const group4 = number.substr(12, 4);
    this.cardNumber = number.substr(0, 4)
      + (group2 && '&nbsp;&nbsp' + group2)
      + (group3 && '&nbsp;&nbsp' + group3)
      + (group4 && '&nbsp;&nbsp' + group4);

    // build card date with mask
    const year = date.substr(2, 2);
    this.cardDate = date.substr(0, 2) + (year && '/' + year);
  }

  handleBackToPaymentSelection() {
    this.backToPaymentSelection.emit();
  }

  handleSubmitPayment(event) {
    this.submitPayment.emit(event);
  }
}
