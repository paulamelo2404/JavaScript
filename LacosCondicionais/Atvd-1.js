//laço condicioal if 

//declarei as variaveis
let numeroA, NumeroB, numeroC 

//  importei e inicializei a biblioteca readline-sync
const leia = require('readline-sync') 

// recebendo dados do usuário e armazenando-os em variáveis
numeroA = leia.questionFloat("Insira numero A: "); 
NumeroB = leia.questionFloat("Insira numero B: ");
numeroC = leia.questionFloat("Insira numero C: ");

// estrutura condicional (if, else if, else)
// para comparar a soma de dois números com um terceiro.
if (numeroA + NumeroB > numeroC) {
  console.log("A soma de A+B e maior que C");
} else if (numeroA + NumeroB < numeroC) {
  console.log("A soma de A+B e menor que C");
} else {
   console.log("A soma de A+B e igual a C"); 
}