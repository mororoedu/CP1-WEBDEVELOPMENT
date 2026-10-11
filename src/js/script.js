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

console.log("************************************************");
console.log("EXERCÍCIO 6");
console.log("************************************************");

let nomeUsuario = "admin";
let senha = "1234";

let nomeInserido = prompt("Insira o usuário: ");
let senhaInserida = prompt("Digite sua senha: ");

if(nomeInserido === nomeUsuario && senhaInserida === senha){
    console.log("Login efetuado com sucesso!");
}
else{
    console.log("Falha ao efetuar login.");
}

console.log("************************************************");
console.log("EXERCÍCIO 7");
console.log("************************************************");

let nota1= Number(prompt("Digite a primeira nota: "));
let nota2= Number(prompt("Digite a segunda nota: "));
let nota3= Number(prompt("Digite a terceira nota: "));
let nota4= Number(prompt("Digite a quarta nota: "));
let nota5= Number(prompt("Digite a quinta nota: "));
let nota6= Number(prompt("Digite a sexta nota: "));
let nota7= Number(prompt("Digite a sétima nota: "));


let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7
console.log("Média: ", media.toFixed(2)); /* Conteúdo pesquisado (.toFixed) */

if (media >= 6){
    console.log("Aluno aprovado!");

}
else{
    console.log("Aluno reprovado.");

}

console.log("************************************************");
console.log("EXERCÍCIO 8");
console.log("************************************************");

let nome = prompt("Digite seu nome:");
console.log(`Olá ${nome}`);










