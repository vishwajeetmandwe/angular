import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventPageComponent } from './event-page/event-page.component';



@NgModule({
  declarations: [EventPageComponent],
  imports: [
    CommonModule
  ],
  exports : [EventPageComponent]
})
export class EventModule { }
