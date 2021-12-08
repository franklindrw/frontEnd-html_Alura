import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();

cliente1.nome = "Ricado";
cliente1.cpf = 44347865815;


const cliente2 = new Cliente();

cliente2.nome = "Alice";
cliente2.cpf = 88255645755;


const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;

ContaCorrenteRicardo.depositar(100);
ContaCorrenteRicardo.depositar(150);
ContaCorrenteRicardo.depositar(-50);

ContaCorrenteRicardo.sacar(170);

console.log(ContaCorrenteRicardo);