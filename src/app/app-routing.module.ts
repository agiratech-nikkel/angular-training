import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AuthenticationService } from './dash-bord/authuGaurd/authentication.service';

const routes: Routes = [
  {
    path: '', component: LoginpageComponent
  },{
    path: 'dashBoard',
    loadChildren: () => import('./dash-bord/dash-bord.module').then(m => m.DashBordModule),
    canActivate: [AuthenticationService]
  },{ 
    path: '**', redirectTo: '' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
