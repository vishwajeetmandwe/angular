import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Evdt } from './Evdt';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  constructor() { }

  @Input()
  alTxt : string

  @Output()
  clicked : EventEmitter<Evdt> = new EventEmitter()

  ngOnInit() {
  }

  btnClick(dt : MouseEvent){
    
    console.log(dt)

    let ev : Evdt = {
      txt:this.alTxt
    }
    this.clicked.emit(ev)
  }

}
