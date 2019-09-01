import { ComponentFixture, TestBed, async } from '@angular/core/testing';

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

  it('should emit change', () => {
    const stubStep = 'Pagamento';
    component.steps = ['Step 1', stubStep];

    const spiedEmit = spyOn(component.eChange, 'emit');
    component.handleItemClick(stubStep);
    expect(
      spiedEmit
    ).toHaveBeenCalledWith(1);
    
  });
  
});
