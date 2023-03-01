import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './components/layout/admin/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderContestorComponent } from './components/layout/contestor/header/header.component';
import { HeaderUserComponent } from './components/layout/user/header/header.component';
import { RestrictionComponent } from './pages/restriction/restriction.component';
import { DashboardAdminComponent } from './pages/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    HeaderContestorComponent,
    HeaderUserComponent,
    RestrictionComponent,
    DashboardAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
