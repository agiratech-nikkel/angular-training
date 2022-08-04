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
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { AgePipe } from '../pipes/age.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
import { EditComponent } from './components/edit/edit.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FeedbackCarouselComponent } from './components/feedback-carousel/feedback-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    DashBordComponent,
    AttendanceComponent,
    PeopleComponent,
    ProfileComponent,
    AgePipe,
    EditComponent,
    FeedbackCarouselComponent
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
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSlideToggleModule,
    CarouselModule,
    MatTooltipModule
  ],
  exports:[
    EditComponent,
    FeedbackCarouselComponent
  ]
})
export class DashBordModule {}