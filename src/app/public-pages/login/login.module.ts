import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {NzIconModule} from 'ng-zorro-antd';
import {OverlayModule} from '@angular/cdk/overlay';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        NzIconModule,
        OverlayModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class LoginModule { }
