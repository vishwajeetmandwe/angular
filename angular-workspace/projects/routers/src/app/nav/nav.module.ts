import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [NavComponent]
})
export class NavModule { }
