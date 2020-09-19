import {Veiculo} from "./Veiculo"

class Aviao extends Veiculo{
    private nPassageiros:number;

    constructor(marca:string, modelo:string, placa:string, v:number, vMax:number, nPassageiros:number){
        super(marca, modelo, placa, v, vMax);
        this.nPassageiros = nPassageiros;
    }

    ImprimirDados(): void{
        super.ImprimirDados();
        console.log(`número de passageiros: ${this.nPassageiros}`);
    }

}
export{Aviao}