import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBordRoutingModule } from './dash-bord-routing.module';
import { DashBordComponent } from './dash-bord.component';


@NgModule({
  declarations: [
    DashBordComponent
  ],
  imports: [
    CommonModule,
    DashBordRoutingModule
  ]
})
export class DashBordModule { }
