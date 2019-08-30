import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BxsCheckoutForm } from './bxs-checkout-form.interface';

@Component({
  selector: 'bxs-checkout-form',
  templateUrl: './bxs-checkout-form.component.html',
  styleUrls: ['./bxs-checkout-form.component.scss']
})
export class BxsCheckoutFormComponent implements OnInit {

  @Output() submitPayment = new EventEmitter();
  @Output() formChanges = new EventEmitter<BxsCheckoutForm>();

  cardForm = new FormGroup({
    number: new FormControl('', [
      Validators.required,
    ]),
    name: new FormControl('', Validators.required),
    date: new FormControl('', [
      Validators.required,
      Validators.pattern('(0[1-9]|1[0-2]|[1-9])(1[8-9]|[2-9][0-9]|20[1-9][1-9])'),
    ]),
    cvv: new FormControl('', Validators.required),
    installments: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.cardForm.valueChanges.subscribe(
      values => this.formChanges.emit({...values})
    );
  }

  handleSubmit(cardForm: FormGroup) {
    if (cardForm.valid) {
      this.submitPayment.emit(cardForm.value);
    }
  }

}
