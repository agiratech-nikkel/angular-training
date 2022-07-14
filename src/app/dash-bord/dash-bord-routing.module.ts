import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBordComponent } from './dash-bord.component';

const routes: Routes = [{ path: '', component: DashBordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBordRoutingModule { }
