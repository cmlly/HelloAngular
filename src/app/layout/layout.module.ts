import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {
  NzBreadCrumbModule,
  NzDividerModule,
  NzIconModule,
  NzLayoutModule,
  NzListModule,
  NzMenuModule,
  NzPopoverModule
} from 'ng-zorro-antd';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzDividerModule,
    NzPopoverModule,
    NzListModule
  ]
})
export class LayoutModule { }
