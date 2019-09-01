import { ComponentFixture, TestBed, async, fakeAsync } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CheckoutApiService } from './services/checkout-api.service';
import { CheckoutComponent } from './checkout.component';
import { CheckoutModule } from './checkout.module';
import { NgxMaskModule } from 'ngx-mask';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let checkoutApiService: Partial<CheckoutApiService> = {
    postPayment: (): any => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        CheckoutModule,
        NoopAnimationsModule,
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

    checkoutApiService = TestBed.get(CheckoutApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle payment request ok', fakeAsync(() => {
    const spiedHandlePaymentOk = spyOn(component as any, 'handlePaymentOk');

    const stupResponse = {};
    spyOn(checkoutApiService, 'postPayment')
      .and.returnValue(of(stupResponse));
  
    component.handlePayment({});

    expect(
      spiedHandlePaymentOk
    ).toHaveBeenCalledWith(stupResponse);
  }));

  it('should handle payment request as error', fakeAsync(() => {
    const spiedHandlePaymentError = spyOn(
      component as any, 'handlePaymentError');
    
    spyOn(checkoutApiService, 'postPayment')
      .and.returnValue(of({}).pipe(map(res => {
        throw new Error('stup error');
      })));

    component.handlePayment({});

    expect(
      spiedHandlePaymentError
    ).toHaveBeenCalled();
  }));
  
});
