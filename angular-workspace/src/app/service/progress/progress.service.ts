import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private progress :number = 0

  private em : EventEmitter<number> = new EventEmitter()

  constructor() { }

  makeProgress(isNeg : boolean){

    if(isNeg){
      this.progress -= 5
      console.log(this.progress)
    }
    else{
      this.progress += 5
      console.log(this.progress)
    }
    this.em.emit(this.progress)
  }
  onProgressEvent(fn: (progress : number) => void){
    this.em.subscribe(fn)
  }
}
