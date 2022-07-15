import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { DashBordRoutingModule } from './dash-bord-routing.module';
import { DashBordComponent } from './dash-bord.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [
    DashBordComponent
  ],
  imports: [
    CommonModule,
    DashBordRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule
  ]
})
export class DashBordModule {}