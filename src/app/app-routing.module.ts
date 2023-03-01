import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';

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
        component: AdminComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
