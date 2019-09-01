import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BxsCheckoutComponent } from './bxs-checkout.component';
import { BxsCheckoutForm } from './bxs-checkout-form/bxs-checkout-form.interface';
import { BxsCheckoutModule } from './bxs-checkout.module';
import { CardTypesEnum } from './bxs-checkout-form/card-types.enum';
import { NgxMaskModule } from 'ngx-mask';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BxsCheckoutComponent', () => {
  let component: BxsCheckoutComponent;
  let fixture: ComponentFixture<BxsCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        BxsCheckoutModule,
        NoopAnimationsModule,
        NgxMaskModule.forRoot(),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BxsCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#formatNumber()', () => {

    it('should return without space', () => {
      expect(
        component['formatNumber']('1234')
      ).toBe('1234');
    });

    it('should return with space after group1', () => {
      expect(
        component['formatNumber']('12345')
      ).toBe('1234&nbsp;&nbsp5');
    });
    
    it('should return with space after group2', () => {
      expect(
        component['formatNumber']('123456789')
      ).toBe('1234&nbsp;&nbsp5678&nbsp;&nbsp9');
    });

    it('should return with space after group3', () => {
      expect(
        component['formatNumber']('1234567890123')
      ).toBe('1234&nbsp;&nbsp5678&nbsp;&nbsp9012&nbsp;&nbsp3');
    });
  });

  describe('#handleChanges', () => {
    const stubChanges: BxsCheckoutForm = {
      cvv: '456',
      date: '1220',
      installments: '3',
      name: 'DHIEGO H ATENCIO',
      number: '12344567890123'
    };

    it('should fill cardName', () => {
      component.handleChanges(stubChanges);
      expect(
        stubChanges.name
      ).toBe(component.cardName);
    });

    it('should format cardDate', () => {
      component.handleChanges(stubChanges);
      expect(
        component.cardDate
      ).toBe('12/20');
    });
  });

  it('should flag as cvv focus', () => {
    component.handleCvvFocus();
    expect(
      component.isCvvFocus
    ).toBeTruthy();
  });

  it('should flag cvv focus as false', () => {
    component.handleCvvBlur();
    expect(
      component.isCvvFocus
    ).toBeFalsy();
  });

  it('should handle menu index', () => {
    const stubIndex = 2;
    component.handleStepChange(stubIndex);
    expect(component.lastMenuIndex).toBe(stubIndex);
  });

  it('should emit back to payments step', () => {
    const spiedEmit = spyOn(component.eBackToPayments, 'emit');
    component.handleBackToPayments();
    expect(spiedEmit).toHaveBeenCalled();
  });

  it('should emit payment', () => {
    const spiedEmit = spyOn(component.ePayment, 'emit');
    const stubPayment = {};
    component.handlePayment(stubPayment);
    expect(
      spiedEmit
    ).toHaveBeenCalledWith(stubPayment);
  });

  it('should handle card type', () => {
    const cardType = CardTypesEnum.VISA;
    component.handleCardType(cardType);
    expect(component.cardType).toBe(cardType);
  });
  
});
