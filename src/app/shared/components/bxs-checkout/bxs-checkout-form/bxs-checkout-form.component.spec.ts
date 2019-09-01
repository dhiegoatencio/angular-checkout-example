import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BxsCheckoutFormComponent } from './bxs-checkout-form.component';
import { CardTypesEnum } from './card-types.enum';
import { FormGroup } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BxsCheckoutFormComponent', () => {
  let component: BxsCheckoutFormComponent;
  let fixture: ComponentFixture<BxsCheckoutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BxsCheckoutFormComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BxsCheckoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit focus', () => {
    const spiedEmit = spyOn(component.eCvvFocus, 'emit');
    component.handleCvvFocus();
    expect(
      spiedEmit
    ).toHaveBeenCalled();
  });

  it('should emit blur', () => {
    const spiedEmit = spyOn(component.eCvvBlur, 'emit');
    component.handleCvvBlur();
    expect(
      spiedEmit
    ).toHaveBeenCalled();
  });

  it('should not emit payment when form is not valid', () => {
    const spiedEmit = spyOn(component.ePayment, 'emit');
    component.handleSubmit({
      valid: false
    } as FormGroup);
    expect(spiedEmit).not.toHaveBeenCalled();
  });

  it('should emit payment when form is valid', () => {
    const spiedEmit = spyOn(component.ePayment, 'emit');
    component.handleSubmit({
      valid: true
    } as FormGroup);
    expect(spiedEmit).toHaveBeenCalled();
  });

  it('should emit changes when form change', () => {
    const spied = spyOn(component.eChanges, 'emit');
    component.number.setValue('45');
    expect(spied).toHaveBeenCalled();
  });
  
  it('should emit card type NONE', () => {
    const spiedCardTypeEmit = spyOn(component.eCardType, 'emit');
    component.number.setValue('');
    expect(
      spiedCardTypeEmit
    ).toHaveBeenCalledWith(CardTypesEnum.NONE);
  });
});
