console.log(`Trabalhando com Listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDestinos = new Array(`Salvador`, `Bahia`, `São Paulo`, `Rio de Janeiro`);

console.log("");

console.log("Destinos possíveis");
console.log(listaDestinos);

// inserindo itens na lista
listaDestinos.push(`Curitiba`);

console.log("");

// deletando itens de uma lista por posição
listaDestinos.splice(2, 1); //deletar a partir da posição 2 apenas 1 item

console.log(listaDestinos);
console.log("");
console.log(listaDestinos[1]); //exiba apenas a posição 1