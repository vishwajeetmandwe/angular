import { ProgressService } from './progress.service';
import { ProgressComponent } from './progress.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btns',
  templateUrl: './btns.component.html',
  styleUrls: ['./btns.component.css']
})
export class BtnsComponent implements OnInit {

  constructor(
    private progressService : ProgressService
  ) { }

  onOperation(wh : number){

    if(wh==1){
      this.progressService.makeProgress(true)
    }
    else{
      this.progressService.makeProgress(false)
    }
  }
  ngOnInit() {
  }

}
