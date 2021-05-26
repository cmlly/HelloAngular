import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import {NzDividerModule, NzTableModule} from 'ng-zorro-antd';


@NgModule({
  imports: [CommonModule, WelcomeRoutingModule, NzTableModule, NzDividerModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
