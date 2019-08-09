import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventPageComponent } from './event/event-page/event-page.component';
import { RessourcePageComponent } from './resources/ressource-page/ressource-page.component';


const routes: Routes = [
  {path:'blog', component: BlogPageComponent},
  {path:'event', component: EventPageComponent},
  {path:'ressource', component: RessourcePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
