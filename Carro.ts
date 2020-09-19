import {Veiculo} from "./Veiculo"

class Carro extends Veiculo{
    private portas:number;

    constructor(marca:string, modelo:string, placa:string, v:number, vMax:number, portas:number){
        super(marca, modelo, placa, v, vMax);
        this.portas = portas;
    }

    ImprimirDados(): void{
        super.ImprimirDados();
        console.log(`portas: ${this.portas}`);
    }

}
export{Carro}