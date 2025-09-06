
const leia = require('readline-sync');

// Cria um vetor para armazenar 10 números inteiros da questao
let vetor = [];
let soma = 0;

// Laço FOR para ler 10 números e armazenar no vetor
for (let i = 0; i < 10; i++) {
    let numero = leia.questionInt(`Digite ${i + 1} numero inteiro: `);
    vetor.push(numero); // n entendi isso direito os meninos me ajudaram, ver dps sobre
    soma += numero;
}

// Elementos dos índices ímpares igual o professor mostrou na aula 
let indicesImpares = "";
for (let i = 1; i < 10; i += 2) { //let i pois esse i é de incremento 
    indicesImpares += vetor[i] + " ";
}
console.log("Elementos nos índices ímpares: " + indicesImpares);

// Elementos pares do vetor
let elementosPares = "";
for (let i = 0; i < 10; i++) {
    if (vetor[i] % 2 === 0) {
        elementosPares += vetor[i] + " ";
    }
}
console.log("Elementos pares: " + elementosPares);

// Soma de todos os elementos
console.log("Soma: " + soma);

// Média dos elementos (tipo real)
let media = soma / 10;
console.log("Média: " + media.toFixed(2));