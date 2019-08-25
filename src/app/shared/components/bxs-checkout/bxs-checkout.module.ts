import { BxsCheckoutComponent } from './bxs-checkout.component';
import { BxsCheckoutFormComponent } from './bxs-checkout-form/bxs-checkout-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    BxsCheckoutComponent,
    BxsCheckoutFormComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    BxsCheckoutComponent
  ]
})
export class BxsCheckoutModule { }