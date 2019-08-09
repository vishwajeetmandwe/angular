import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RessourcePageComponent } from './ressource-page/ressource-page.component';



@NgModule({
  declarations: [RessourcePageComponent],
  imports: [
    CommonModule
  ],
  exports : [RessourcePageComponent]
})
export class ResourcesModule { }
