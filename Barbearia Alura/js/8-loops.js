console.log(`Trabalhando com Loops`);

const listaDestinos = new Array(`Salvador`, `Bahia`, `São Paulo`, `Rio de Janeiro`);

// inserindo itens na lista
listaDestinos.push(`Curitiba`);

console.log("");

const idadeComprador = 20;
const estaAcompanhada = false;
let passagemComprada = false;
const destino = "Salvador";

// if (idadeComprador >= 18 || estaAcompanhada == true) {
//     console.log("\n Destinos possíveis");
//     console.log(listaDestinos);
//     passagemComprada = true;
// } else {
//     console.log("Idade não Permitida!")
// }

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {

    if (listaDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador++;
}

console.log(`\n Destino exite: ${destinoExiste}`);

if (podeComprar && destinoExiste) {
    console.log("\n Boa Viagem!")
} else {
    console.log("\n Desculpe, houve algum problema para processar. Tente Novamente!")
}

console.log("");
console.log("Trabalhando com For");
console.log("");

for (let cont = 0; contador < 3; cont++) {

    if (listaDestinos[contador] == destino) {
        destinoExiste = true;
    }
}

console.log("");