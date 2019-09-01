import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BxsCheckoutComponent } from './bxs-checkout.component';
import { BxsCheckoutModule } from './bxs-checkout.module';
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
});
