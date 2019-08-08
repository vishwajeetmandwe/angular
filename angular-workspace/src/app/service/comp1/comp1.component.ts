import { CustRegService } from './../cust-reg.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(
    private custReg: CustRegService
  ) { }

  ngOnInit() {
  }

  onNext( name : string){

    this.custReg.domain.name = name
    console.log('On Next clicked')
  }
}
