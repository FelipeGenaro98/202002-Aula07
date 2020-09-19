class Veiculo{
    public marca:string;
    public modelo:string;
    private placa:string;
    private v:number;
    protected vMax:number;
    static objetosVeiculo:number=0;

    constructor(marca:string, modelo:string, placa:string, v:number, vMax:number){
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.v = v;
        this.vMax = vMax;
        Veiculo.objetosVeiculo++;
    }

    Acelerar(aceleracao:number): void{
        if(aceleracao <= 10){
            for(let i=0; i < Math.floor(this.vMax/aceleracao); i++){
                this.v+=aceleracao;
            }   
            console.log(`velocidade máxima atingida ${this.v}`);

        }else{
            console.log("velocidade de aceleração acima do permitido");
        }
    }

    Frear(): void{
        let t:number = this.v/10;
        console.log(`o carro irá parar em ${t} segundos`);
    }

    ImprimirDados(): void{
        console.log(`marca: ${this.marca} \nmodelo: ${this.modelo} \nplaca: ${this.placa} \nvelocidade: ${this.v} \nvelocidade máxima: ${this.vMax}`);
    }

    static instanciasVeiculo(): void{
        console.log(`número de objetos veiculo: ${Veiculo.objetosVeiculo}`);
    }

}
export{Veiculo}