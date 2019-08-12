import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [BlogPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [BlogPageComponent]
})
export class BlogModule { }
