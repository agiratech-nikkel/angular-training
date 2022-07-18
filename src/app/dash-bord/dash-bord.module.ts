import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { DashBordRoutingModule } from './dash-bord-routing.module';
import { DashBordComponent } from './dash-bord.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AttendanceComponent } from './attendance/attendance.component';

@NgModule({
  declarations: [
    DashBordComponent,
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    DashBordRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class DashBordModule {}