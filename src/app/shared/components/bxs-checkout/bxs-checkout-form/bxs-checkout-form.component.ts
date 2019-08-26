import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bxs-checkout-form',
  templateUrl: './bxs-checkout-form.component.html',
  styleUrls: ['./bxs-checkout-form.component.scss']
})
export class BxsCheckoutFormComponent {

  @Output() submitPayment = new EventEmitter();

  cardForm = new FormGroup({
    number: new FormControl('', [
      Validators.required,
    ]),
    name: new FormControl('', Validators.required),
    date: new FormControl('', [
      Validators.required,
      Validators.pattern('(1[0-2]|0[1-9])\/(1[5-9]|2\d)'),
    ]),
    cvv: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{3}'),
    ]),
    installments: new FormControl('', Validators.required),
  });

  handleSubmit(cardForm: FormGroup) {
    if (cardForm.valid) {
      this.submitPayment.emit(cardForm.value);
    }
  }
}
