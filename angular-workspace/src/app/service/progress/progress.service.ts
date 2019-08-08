import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private progress :number = 0
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
  }
}
