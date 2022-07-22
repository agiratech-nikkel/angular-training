import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBordComponent } from './dash-bord.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { PeopleComponent } from './components/people/people.component';

const routes: Routes = [{ path: '', component: DashBordComponent },
{ path: 'attendance', component: AttendanceComponent },
{ path: 'peopel', component:PeopleComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBordRoutingModule { }
