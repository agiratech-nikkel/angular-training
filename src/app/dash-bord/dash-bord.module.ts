import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBordComponent } from './dash-bord.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { SharedModule } from '../shared-module/shared/shared.module';
import { DashBordRoutingModule } from './dash-bord-routing.module';
import { PeopleComponent } from './components/people/people.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    DashBordComponent,
    AttendanceComponent,
    PeopleComponent,
    ],
  imports: [
    CommonModule,
    DashBordRoutingModule,
    SharedModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    FormsModule,
    MatAutocompleteModule,
    MatSelectModule
  ]
})
export class DashBordModule {}