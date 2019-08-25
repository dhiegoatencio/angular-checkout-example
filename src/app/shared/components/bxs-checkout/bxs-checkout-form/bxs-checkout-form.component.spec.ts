import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BxsCheckoutFormComponent } from './bxs-checkout-form.component';
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
});
