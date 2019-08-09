import { ProgressService } from './progress.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prog-bar',
  templateUrl: './prog-bar.component.html',
  styleUrls: ['./prog-bar.component.css']
})
export class ProgBarComponent implements OnInit {

  private progress : number = 0
  constructor(
    private progressService : ProgressService
  ) { }

  
  ngOnInit() {
    this.progressService.onProgressEvent(ps => this.progress = ps)
  }

}
