console.log("************************************************");
console.log("EXERCÍCIO 1");
console.log("************************************************");

let a = 20
let b = 10

console.log(a != b); // Sinal de diferença
console.log(a === b); // Sinal de igual em valor e tipo
console.log(a >= b); // Sinal de maior ou igual

console.log("************************************************");
console.log("EXERCÍCIO 2");
console.log("************************************************");

let peso = 80;
let altura = 1.80;

let imc = peso / (altura * altura);

console.log("IMC: ", imc);

if(imc < 18.5){
    console.log("Abaixo do peso");
}
else if(imc >= 18.5 && imc <= 24.9){
    console.log("Peso ideal");
}
else{
    console.log("Acima do peso");
}

console.log("************************************************");
console.log("EXERCÍCIO 3");
console.log("************************************************");

for(let numero = 1; numero <= 10; numero ++){
    console.log(`Contagem de números ${numero}`)
}

console.log("************************************************");
console.log("EXERCÍCIO 4");
console.log("************************************************");

let avengers = ["Thor", "Hulk", "Capitão América", "Arqueiro", "Viúva Negra"];
console.log(avengers);

console.log("************************************************");
console.log("EXERCÍCIO 5");
console.log("************************************************");

let idadeUsuario = 19;
let permissao = idadeUsuario >= 18 ? "Permitido" : "Não permitido";
console.log(permissao);