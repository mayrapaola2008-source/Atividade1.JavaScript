let valorConta = Number(prompt("Valor da conta:"));
let clientes = Number(prompt("Número de clientes:"));

let valorPorCliente = valorConta / clientes;

console.log("Valor da Conta R$:", valorConta.toFixed(2));
console.log("Número de Clientes:", clientes);
console.log("Valor por cliente R$:", valorPorCliente.toFixed(2));