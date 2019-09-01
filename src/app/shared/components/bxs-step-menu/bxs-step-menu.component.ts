import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { StepMenu } from './step-menu.interface';

@Component({
  selector: 'bxs-step-menu',
  templateUrl: './bxs-step-menu.component.html',
  styleUrls: ['./bxs-step-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BxsStepMenuComponent implements OnChanges {

  @Input() steps: StepMenu[];

  @Output() eChange = new EventEmitter<StepMenu>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.steps) {
      // make a copy of the list in order to avoid side effects
      this.steps = this.steps.map(s => ({... s}));
    }
  }

  handleItemClick(step: StepMenu) {
    this.steps = this.steps.map(s => {
      s.defaultActive = false;
      return s;
    });
    step.defaultActive = true;
    this.eChange.emit({...step});
  }
}
