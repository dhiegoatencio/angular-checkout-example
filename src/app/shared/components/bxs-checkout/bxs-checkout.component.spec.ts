import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BxsCheckoutComponent } from './bxs-checkout.component';
import { BxsCheckoutModule } from './bxs-checkout.module';
import { NgxMaskModule } from 'ngx-mask';

describe('BxsCheckoutComponent', () => {
  let component: BxsCheckoutComponent;
  let fixture: ComponentFixture<BxsCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        BxsCheckoutModule,
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
});
