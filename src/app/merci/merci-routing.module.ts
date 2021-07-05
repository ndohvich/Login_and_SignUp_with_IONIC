import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerciPage } from './merci.page';

const routes: Routes = [
  {
    path: '',
    component: MerciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerciPageRoutingModule {}
