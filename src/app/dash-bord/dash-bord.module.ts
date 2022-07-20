import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBordComponent } from './dash-bord.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { SharedModule } from '../shared-module/shared/shared.module';
import { DashBordRoutingModule } from './dash-bord-routing.module';
import { PeopleComponent } from './components/people/people.component';
@NgModule({
  declarations: [
    DashBordComponent,
    AttendanceComponent,
    PeopleComponent
  ],
  imports: [
    CommonModule,
    DashBordRoutingModule,
    SharedModule,
  ]
})
export class DashBordModule {}