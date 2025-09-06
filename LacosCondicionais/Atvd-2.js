//Escreva um algoritmo que leia um número inteiro via teclado e 
// mostre na tela uma mensagem indicando se este número é par ou ímpar 
// e se o número é positivo ou negativo. Veja os exemplos abaixo:

let numero

//  importei e inicializei a biblioteca readline-sync
const leia = require('readline-sync') 

//pra solicitar o dado no teclado

numero = leia.questionInt ('Digite um numero inteiro: ');

//pra verificar se par/ímpar
//o resto da divisão do número por 2 é igual a 0
if (numero % 2 == 0 ) {
    console.log ('O numero ' + numero + ' é par');
} else {
    console.log ("O numero " + numero + " é impar")
} 

// fiz 1 parte, para par ou ímpar
// Agora, adicionar a parte para positivo ou negativo.

if (numero > 0) {
    console.log('e positivo!');
} else if (numero < 0) {
    console.log('e negativo!');
} else {
    console.log('o zero não é nem positivo nem negativo!');
}