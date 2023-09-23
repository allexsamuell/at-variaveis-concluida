let meudinheiro = 80;
let produto = 129.99;
let percentualdedesconto = produto - meudinheiro;
let porcentagem = 100;

let resultado = percentualdedesconto * porcentagem / produto;

console.log(`O desconto é de ${resultado.toFixed(2)}`);
