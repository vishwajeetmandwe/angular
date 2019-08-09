import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  onLogin(eml: string, pass: string){
    this.router.navigate(['dash'])
  }
}
