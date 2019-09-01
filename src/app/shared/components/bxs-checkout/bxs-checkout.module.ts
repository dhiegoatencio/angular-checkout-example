import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BxsCheckoutComponent } from './bxs-checkout.component';
import { BxsCheckoutFormComponent } from './bxs-checkout-form/bxs-checkout-form.component';
import { BxsStepMenuModule } from '../bxs-step-menu/bxs-step-menu.module';
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
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgxMaskModule.forRoot({}),
    ReactiveFormsModule,
    BxsStepMenuModule,
  ],
  exports: [
    BxsCheckoutComponent
  ]
})
export class BxsCheckoutModule { }
