import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayFishComponent } from './display-fish/display-fish.component';
import { AddFishComponent } from './add-fish/add-fish.component';


const routes: Routes = [
  {
    path: '', component: DisplayFishComponent
  },
  {
    path: 'new', component: AddFishComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FishRoutingModule { }
