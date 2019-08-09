import { LoginPageComponent } from './login/login-page/login-page.component';
import { DashPageComponent } from './dash/dash-page/dash-page.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventPageComponent } from './event/event-page/event-page.component';
import { RessourcePageComponent } from './resources/ressource-page/ressource-page.component';

const dashRoutes: Routes= [
  {path:'blog', component: BlogPageComponent},
  {path:'event', component: EventPageComponent},
  {path:'ressource', component: RessourcePageComponent}
]
const routes: Routes = [
  {path:'', component: LoginPageComponent},
  {path:'dash', component: DashPageComponent, children:dashRoutes},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
