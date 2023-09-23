let M = 90000;
let C = 60000;
let N = 24;
const cochete = M / C;
const potencia = 1 / N;
const subtracao = 1;
const formula = cochete ** potencia - 1;

console.log(` A taxa de juros mensal é de ${formula.toFixed(5)}%`)