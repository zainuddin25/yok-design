import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestrictionComponent } from './pages/restriction/restriction.component';
import { DashboardAdminComponent } from './pages/admin/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin/dashboard-admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    children: [
      {
        path: 'dashboard-admin',
        component: DashboardAdminComponent
      }
    ]
  },
  {
    path: 'restriction',
    component: RestrictionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
