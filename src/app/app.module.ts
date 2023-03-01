import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HeaderAdminComponent } from './components/layout/admin/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderContestorComponent } from './components/layout/contestor/header/header.component';
import { HeaderUserComponent } from './components/layout/user/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderAdminComponent,
    HeaderContestorComponent,
    HeaderUserComponent
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
