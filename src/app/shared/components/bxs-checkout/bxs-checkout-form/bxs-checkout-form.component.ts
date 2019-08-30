import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BxsCheckoutForm } from './bxs-checkout-form.interface';
import { CardTypesEnum } from './card-types.enum';

@Component({
  selector: 'bxs-checkout-form',
  templateUrl: './bxs-checkout-form.component.html',
  styleUrls: ['./bxs-checkout-form.component.scss']
})
export class BxsCheckoutFormComponent implements OnInit {

  /** @description emits the detected card */
  @Output() eCardType = new EventEmitter<CardTypesEnum>();

  /** @description emits the changes of the form */
  @Output() eChanges = new EventEmitter<BxsCheckoutForm>();

  /** @description emits the sended payment */
  @Output() ePayment = new EventEmitter();

  @Output() eCvvFocus = new EventEmitter();
  
  @Output() eCvvBlur = new EventEmitter();


  number =  new FormControl('', Validators.required);

  cardForm = new FormGroup({
    number: this.number,
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
      values => this.eChanges.emit({...values})
    );

    this.number.valueChanges.subscribe(() => {
      if (this.number.valid) {
        // logic or service call do decide the card type
        this.eCardType.emit(CardTypesEnum.VISA);
      } else {
        this.eCardType.emit(CardTypesEnum.NONE);
      }
    })
  }

  handleSubmit(cardForm: FormGroup) {
    if (cardForm.valid) {
      this.ePayment.emit(cardForm.value);
    }
  }

  handleCvvFocus() {
    this.eCvvFocus.emit();
  }

  handleCvvBlur() {
    this.eCvvBlur.emit();
  }
}
