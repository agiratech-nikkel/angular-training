import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  {
    path:'',component:LoginpageComponent
  },
  { path: 'dashBoard', loadChildren: () => import('./dash-bord/dash-bord.module').then(m => m.DashBordModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
