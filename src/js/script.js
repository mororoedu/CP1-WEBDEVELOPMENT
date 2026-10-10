// EXERCÍCIO 1 #################################################

let a = 20
let b = 10

console.log("Exercício 1");

console.log(a != b); // Sinal de diferença
console.log(a === b); // Sinal de igual em valor e tipo
console.log(a >= b); // Sinal de maior ou igual

// EXERCÍCIO 2 #################################################

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

// EXERCÍCIO 3 #################################################

for(let numero = 1; numero <= 10; numero ++){
    console.log(`Contagem de números ${numero}`)
}

// EXERCÍCIO 4 #################################################

let avengers = ["Thor", "Hulk", "Capitão América", "Arqueiro", "Viúva Negra"];
console.log(avengers);

// EXERCÍCIO 5 #################################################

let idadeUsuario = 19;
let permissao = idadeUsuario >= 18 ? "Permitido" : "Não permitido";
console.log(permissao);