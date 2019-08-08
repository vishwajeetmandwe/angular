import { Evdt } from './custom/Evdt';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-workspace';
  txt = 'Image result for angular componentsangular.io Components are the most basic building block of an UI in an Angular application. An Angular application is a tree of Angular components.'
  e : Evdt
  customComponentClicked(e: Evdt) {
    this.e = e 
    console.log(e.txt)
  }
  functionClick(e : string){
    this.txt = e
  } 
}
