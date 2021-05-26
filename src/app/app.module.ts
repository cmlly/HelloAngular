import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';

import { PublicService } from './services/public.service';
import { HomeComponent } from './pages/home/home.component';
import { JokesComponent } from './pages/jokes/jokes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {SharedModule} from './shared/shared.module';
import {httpInterceptorProviders} from './http-interceptors';
// import { NZ_I18N } from 'ng-zorro-antd/i18n';
// import { zh_CN } from 'ng-zorro-antd/i18n';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HomeComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    SharedModule
  ],
  providers: [PublicService, { provide: NZ_I18N, useValue: zh_CN }, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
