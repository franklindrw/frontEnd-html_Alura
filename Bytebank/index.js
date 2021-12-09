import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricado", 44347865815);

const cliente2 = new Cliente("Alice", 88255645755);

const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1);

ContaCorrenteRicardo.depositar(100);
ContaCorrenteRicardo.depositar(150);
ContaCorrenteRicardo.depositar(50);

console.log("Contas abertas: ", ContaCorrente.numeroDeContas);

ContaCorrenteRicardo.sacar(170);

console.log(ContaCorrenteRicardo);

const conta2 = new ContaCorrente(1002, cliente2);

ContaCorrenteRicardo.transferir(100, conta2);
console.log("");
console.log(conta2);
console.log("");
