let preco = Number(prompt("Preço do produto:"));

let aVista = preco * 0.9;
let parcela = preco / 3;

console.log("Preço R$:", preco.toFixed(2));
console.log("À Vista R$:", aVista.toFixed(2));
console.log("Ou 3x de R$:", parcela.toFixed(2));