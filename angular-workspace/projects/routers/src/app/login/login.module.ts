import { DashModule } from './../dash/dash.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    DashModule
  ], exports: [LoginPageComponent]
})
export class LoginModule { }
