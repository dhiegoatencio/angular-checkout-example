import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BxsCheckoutComponent } from './bxs-checkout.component';
import { BxsCheckoutFormComponent } from './bxs-checkout-form/bxs-checkout-form.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask'

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
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
  ],
  exports: [
    BxsCheckoutComponent
  ]
})
export class BxsCheckoutModule { }
