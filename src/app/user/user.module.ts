import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DisplayUserComponent } from './display-user/display-user.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [DisplayUserComponent, AddUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
