import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BxsCheckoutComponent } from './bxs-checkout.component';

describe('BxsCheckoutComponent', () => {
  let component: BxsCheckoutComponent;
  let fixture: ComponentFixture<BxsCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BxsCheckoutComponent ]
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
});
