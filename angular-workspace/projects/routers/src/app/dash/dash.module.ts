import { NavModule } from './../nav/nav.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashPageComponent } from './dash-page/dash-page.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [DashPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NavModule
  ],
  exports: [DashPageComponent]
})
export class DashModule { }
