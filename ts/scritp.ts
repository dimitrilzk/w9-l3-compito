abstract class LavoratoriAutonomi {
    protected codred: number;
    protected redditoAnnuoLordo: number;
    protected tasseInps: number;
    protected tasseIrpef: number;
    constructor(codred: number, redditoAnnuoLordo: number,tasseInps: number, tasseIrpef: number ) {
        this.codred = codred;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    public abstract getUtileTasse(): number;
    public abstract getTasseInps(): number;
    public abstract getTasseIrpef(): number;

}
abstract class Programmatore extends LavoratoriAutonomi {
    public abstract getRedditoAnnuoNetto(): number;
}
class FrontEndDev extends Programmatore {
    constructor(codred: number, redditoAnnuoLordo: number,tasseInps: number, tasseIrpef: number) {
        super(codred, redditoAnnuoLordo, tasseInps, tasseIrpef)
    }
    public getUtileTasse(): number {
        return (this.redditoAnnuoLordo * this.codred)/100;
    }
    public getTasseInps(): number {
        return (this.getUtileTasse() * this.tasseInps)/100;
    }
    public getTasseIrpef(): number {
        return (this.getUtileTasse() * this.tasseIrpef)/100;
    }
    public getRedditoAnnuoNetto(): number {
        return (this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef());
    }

}

document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector(".container button")
    btn?.addEventListener("click",calcLavoratore);
})

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