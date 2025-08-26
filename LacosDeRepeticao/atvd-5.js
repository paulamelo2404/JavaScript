// Importando a biblioteca readline-sync para leitura de dados
const leia = require('readline-sync');

// criando as  variáveis
let maisPositivos = 0;  // Acumulador para a soma dos números positivos
let numero            // Variável para armazenar cada número digitado

// Laço DO - WHILE - executa pelo menos uma vez lembrA DISSO PRA SEMPRE PFVR
do {
    // pede um número ao usuário
    numero = leia.questionInt('Digite um numero aqui: ')
    
    // Ver se o número é positivo e maior que zero)
    if (numero > 0) {
        maisPositivos += numero;  //Pega o valor atual de somaPositivosSoma com o valor de numero
       // Atribui o resultado de volta à variável somaPositivos, MORRO 
    }
    
} while (numero !== 0)  // Continua enquanto o número digitado não for zero

// Exibe o resultado final
console.log(`A soma dos números positivos é: ${maisPositivos}`);