import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultpageComponent } from './defaultpage/defaultpage.component';
import { LogPageComponent } from './logpage/logpage.component';
import {RegistrationComponent} from '../app/registration/registration.component';
import {DashbordComponent} from '../app/dashbord/dashbord.component'
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import {EventListComponent} from './event-list/event-list.component'



const routes: Routes = [
  {component: DefaultpageComponent, path:''},
  {component: LogPageComponent, path:'login'},
  {component: RegistrationComponent, path:'register'},
  {component: DashbordComponent, path:'dashbord'},
  {component: AdminComponent, path:'dashbord/admin'},
  {component: UserComponent, path:'dashbord/user'},
  {component: EventListComponent, path:'dashbord/admin/eventlist'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
