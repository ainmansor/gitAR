import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArLocationPage } from './ar-location.page';

const routes: Routes = [
  {
    path: '',
    component: ArLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArLocationPageRoutingModule {}
