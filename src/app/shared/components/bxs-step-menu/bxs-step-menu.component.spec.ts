import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BxsStepMenuComponent } from './bxs-step-menu.component';

describe('BxsStepMenuComponent', () => {
  let component: BxsStepMenuComponent;
  let fixture: ComponentFixture<BxsStepMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BxsStepMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BxsStepMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
