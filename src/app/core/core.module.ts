import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppMenuComponent,
    AppFooterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AppMenuComponent,
    AppFooterComponent,
  ]
})
export class CoreModule { }
