import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {PictureComponent} from './picture/picture.component';
import {TextComponent} from './text/text.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: '首页'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'picture'
      },
      {
        path: 'picture',
        component: PictureComponent,
        data: {
          breadcrumb: '图片'
        }
      },
      {
        path: 'text',
        component: TextComponent,
        data: {
          breadcrumb: '文字'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class HomeRoutingModule { }
