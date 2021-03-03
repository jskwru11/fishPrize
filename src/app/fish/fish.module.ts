import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FishRoutingModule } from './fish-routing.module';
import { DisplayFishComponent } from './display-fish/display-fish.component';
import { AddFishComponent } from './add-fish/add-fish.component';


@NgModule({
  declarations: [DisplayFishComponent, AddFishComponent],
  imports: [
    CommonModule,
    FishRoutingModule,
    ReactiveFormsModule
  ]
})
export class FishModule { }
