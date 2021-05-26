import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlashNewsComponent} from './flash-news.component';

const routes: Routes = [
  { path: '', component: FlashNewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlashNewsRoutingModule { }
