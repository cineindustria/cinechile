import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../../shared/shared.module';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    LayoutComponent,
    NavBarComponent
  ],
  exports: []
})
export class ShellModule { }
