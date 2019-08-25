import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bxs-checkout-form',
  templateUrl: './bxs-checkout-form.component.html',
  styleUrls: ['./bxs-checkout-form.component.scss']
})
export class BxsCheckoutFormComponent implements OnInit {

  card = {};

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(cardForm) {
  }
}
