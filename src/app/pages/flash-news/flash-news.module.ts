import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashNewsRoutingModule } from './flash-news-routing.module';
import { FlashNewsComponent } from './flash-news.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  NzButtonModule,
  NzCheckboxModule,
  NzFormModule,
  NzGridModule,
  NzIconModule,
  NzInputModule,
  NzSelectModule,
  NzUploadModule
} from 'ng-zorro-antd';


@NgModule({
  declarations: [FlashNewsComponent],
  imports: [
    CommonModule,
    FlashNewsRoutingModule,
    ReactiveFormsModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzCheckboxModule,
    NzUploadModule,
    NzIconModule
  ]
})
export class FlashNewsModule { }
