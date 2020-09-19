import {Veiculo} from "./Veiculo"
import {Carro} from "./Carro"
import {Aviao} from "./Aviao"

for (let i: number = 0; i < 10; i++){
    console.log(`---CARRO[${i+1}]---`);
    new Carro("marca", "modelo", "placa", 0, 100, 4).ImprimirDados();
}

for (let i: number = 0; i < 5; i++){
    console.log(`---AVIÃO[${i+1}]---`);
    new Aviao("marca", "modelo", "placa", 0, 100, 50).ImprimirDados();
}

Veiculo.instanciasVeiculo();