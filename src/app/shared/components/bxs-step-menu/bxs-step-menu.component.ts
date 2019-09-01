import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'bxs-step-menu',
  templateUrl: './bxs-step-menu.component.html',
  styleUrls: ['./bxs-step-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BxsStepMenuComponent {

  @Input() checkedIndex: number;
  
  @Input() steps: string[];

  @Output() eChange = new EventEmitter<number>();

  handleItemClick(step: string) {
    this.eChange.emit(this.steps.indexOf(step));
  }
}
