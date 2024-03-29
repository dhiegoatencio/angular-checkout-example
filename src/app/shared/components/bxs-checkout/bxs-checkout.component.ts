import { Component, EventEmitter, Output } from '@angular/core';

import { BxsCheckoutForm } from './bxs-checkout-form/bxs-checkout-form.interface';
import { CardTypesEnum } from './bxs-checkout-form/card-types.enum';

@Component({
  selector: 'bxs-checkout',
  templateUrl: './bxs-checkout.component.html',
  styleUrls: ['./bxs-checkout.component.scss']
})
export class BxsCheckoutComponent {

  @Output() ePayment = new EventEmitter();
  @Output() eBackToPayments = new EventEmitter();

  // will change based on user preference
  paymentType = 'card';

  isCvvFocus: boolean;

  cardNumber: string;
  cardName: string;
  cardDate: string;

  cardType: CardTypesEnum;

  steps: string[] = ['Carrinho', 'Pagamento', 'Confirmação'];
  lastMenuIndex = 1;

  constructor() { }

  handleChanges({number, date, name, cvv}: BxsCheckoutForm) {

    this.cardName = name;
    this.cardNumber = this.formatNumber(number);

    // build card date with mask
    const year = date.substr(2, 2);
    this.cardDate = date.substr(0, 2) + (year && '/' + year);
  }

  handleBackToPayments() {
    this.eBackToPayments.emit();
  }

  handlePayment(event) {
    this.ePayment.emit(event);
  }

  handleCardType(cardType: CardTypesEnum) {
    this.cardType = cardType;
  }

  handleCvvBlur() {
    this.isCvvFocus = false;
  }

  handleCvvFocus() {
    this.isCvvFocus = true;
  }

  handleStepChange(menuIndex) {
    this.lastMenuIndex = menuIndex;
  }

  private formatNumber(number: string) {

    // build card number with mask
    const group2 = number.substr(4, 4);
    const group3 = number.substr(8, 4);
    const group4 = number.substr(12, 4);

    return number.substr(0, 4)
      + (group2 && '&nbsp;&nbsp' + group2)
      + (group3 && '&nbsp;&nbsp' + group3)
      + (group4 && '&nbsp;&nbsp' + group4);
  }
}
