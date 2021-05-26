import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from '../pages/home/user-info/user-info.component';
import {NzCardModule} from 'ng-zorro-antd';


@NgModule({
  declarations: [
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
  ],
  exports: [
    UserInfoComponent
  ]
})
// @ts-ignore
export class SharedModule { }
