import { AppMenuComponent } from './app-menu/app-menu.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppMenuComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AppMenuComponent,
  ]
})
export class CoreModule { }
