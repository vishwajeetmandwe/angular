import { SensorListner } from './interface';
export class Car {
    constructor (
        private weight ?:number,
        private make ?:number
    ){

    }

    get crWt(){
        return this.weight
    }
    set crWt(wt : number) {
        this.weight = wt
    }
    whoCreated() : number {
        return this.make
    }
}

let cr = new Car(56, 15)

let cr1 = new Car(20)

let cr2 = new Car()

export function blink() : boolean {
    return true
}

export abstract class Os {
    abstract algo () : void 

    process (){

    }
}

class IODevice implements SensorListner{
    onDataChange(): number {
        throw new Error("Method not implemented.");
    }
    
}