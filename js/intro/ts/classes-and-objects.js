
export class Car {
    constructor(weight, make) {
        this.weight = weight;
        this.make = make;
    }
    get crWt() {
        return this.weight;
    }
    set crWt(wt) {
        this.weight = wt;
    }
    whoCreated() {
        return this.make;
    }
}
let cr = new Car(56, 15);
let cr1 = new Car(20);
let cr2 = new Car();
export function blink() {
    return true;
}
export class Os {
    process() {
    }
}
class IODevice {
    onDataChange() {
        throw new Error("Method not implemented.");
    }
}
