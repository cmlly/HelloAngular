import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: '首页' }  },
      { path: 'jokes', loadChildren: () => import('../pages/jokes/jokes.module').then(m => m.JokesModule), data: { breadcrumb: '段子' } },
      { path: 'welcome', loadChildren: () => import('../pages/welcome/welcome.module').then(m => m.WelcomeModule) },
      { path: 'flashNews', loadChildren: () => import('../pages/flash-news/flash-news.module').then(m => m.FlashNewsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
