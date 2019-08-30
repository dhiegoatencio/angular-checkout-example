import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BxsCheckoutModule } from '../shared/components/bxs-checkout/bxs-checkout.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CheckoutApiService } from './services/checkout-api.service';
import { CheckoutComponent } from './checkout.component';
import { CheckoutModule } from './checkout.module';
import { NgxMaskModule } from 'ngx-mask';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let checkoutApiService: Partial<CheckoutApiService> = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        CheckoutModule,
        NgxMaskModule.forRoot(),
      ],
      providers: [
        { provide: CheckoutApiService, useValue: checkoutApiService }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
