import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PictureComponent } from './picture/picture.component';
import { TextComponent } from './text/text.component';
import {NzCardModule, NzResultModule, NzButtonModule, NzBreadCrumbModule, NzGridModule} from 'ng-zorro-antd';
import { SharedModule } from '../../shared/shared.module';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [PictureComponent, TextComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzCardModule,
    SharedModule,
    NzResultModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzGridModule,
    // BrowserModule,
    // BrowserAnimationsModule
  ]
})
// @ts-ignore
export class HomeModule { }
