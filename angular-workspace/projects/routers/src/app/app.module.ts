import { LoginModule } from './login/login.module';
import { DashModule } from './dash/dash.module';
import { BlogModule } from './blog/blog.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourcesModule } from './resources/resources.module';
import { EventPageComponent } from './event/event-page/event-page.component';
import { EventModule } from './event/event.module';
import { NavModule } from './nav/nav.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventModule,
    BlogModule,
    ResourcesModule,
    NavModule,
    DashModule,
    LoginModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
