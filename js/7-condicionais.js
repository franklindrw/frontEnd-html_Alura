console.log(`Trabalhando com Condicional`);

const listaDestinos = new Array(`Salvador`, `Bahia`, `São Paulo`, `Rio de Janeiro`);

// inserindo itens na lista
listaDestinos.push(`Curitiba`);

console.log("");

const idadeComprador = 20;
const estaAcompanhada = false;
const passagemComprada = false;

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("\n Destinos possíveis");
    console.log(listaDestinos);
} else {
    console.log("Idade não Permitida!")
}


console.log("\n Embarque: \n\n")
if (idadeComprador >= 18 && passagemComprada) {
    console.log("Tudo ok, Boa Viagem!");
} else {
    console.log("Você não pode embarcar");
}