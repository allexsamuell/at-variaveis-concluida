let i = 0.125;
let t = 5;
let c = 1000;
let cochete = (1 + i) ** t;
let m = c * cochete;
console.log(`${m.toFixed(0)}`);