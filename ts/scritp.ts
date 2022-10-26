abstract class LavoratoreAutonomo {
    codred: number;
    redditoAnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;
    constructor(codred: number, redditoAnnuoLordo: number,tasseInps: number, tasseIrpef: number ) {
        this.codred = codred;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
}