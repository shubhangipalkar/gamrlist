import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogPageComponent } from './logpage/logpage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Route} from '@angular/router'
  import { from } from 'rxjs';
import { DefaultpageComponent } from './defaultpage/defaultpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { EventListComponent } from './event-list/event-list.component';
import {APIcallService} from '../app/Service/apicall.service';
import {SeriesService} from '../app/Service/series.service';

@NgModule({
  declarations: [
    AppComponent,
    LogPageComponent,
    DefaultpageComponent,
    RegistrationComponent,
    DashbordComponent,
    AdminComponent,
    UserComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [SeriesService, APIcallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
