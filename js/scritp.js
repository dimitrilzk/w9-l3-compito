"use strict";
class LavoratoriAutonomi {
    constructor(codred, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        this.codred = codred;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
}
class Programmatore extends LavoratoriAutonomi {
}
class FrontEndDev extends Programmatore {
    constructor(codred, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        super(codred, redditoAnnuoLordo, tasseInps, tasseIrpef);
    }
    getUtileTasse() {
        return (this.redditoAnnuoLordo * this.codred) / 100;
    }
    getTasseInps() {
        return (this.getUtileTasse() * this.tasseInps) / 100;
    }
    getTasseIrpef() {
        return (this.getUtileTasse() * this.tasseIrpef) / 100;
    }
    getRedditoAnnuoNetto() {
        return (this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef());
    }
}
let mario = new FrontEndDev(40, 45000, 26, 23);
console.log("Reddito tasse INps: " + mario.getTasseInps());
console.log("Reddito tasse Irpef: " + mario.getTasseIrpef());
console.log("Reddito annuo netto: " + mario.getRedditoAnnuoNetto());
// {
//     if (this.redditoAnnuoLordo <= 15000){
//         console.log((this.redditoAnnuoLordo * 23) /100)
//     } else if(this.redditoAnnuoLordo > 15000 && this.redditoAnnuoLordo <= 28000) {
//         console.log((this.redditoAnnuoLordo * 25) /100)
//     } else if(this.redditoAnnuoLordo > 28000 && this.redditoAnnuoLordo <= 50000) {
//         console.log((this.redditoAnnuoLordo * 35) /100)
//     }else if(this.redditoAnnuoLordo > 50000) {
//         console.log((this.redditoAnnuoLordo * 45) /100)
//     }
// }
// {
//     if (this.codred == 1) {
//         console.log((this.redditoAnnuoLordo * 25) /100)
//     } else if (this.codred == 2) {
//         console.log((this.redditoAnnuoLordo * 33) /100)
//     }
// }
