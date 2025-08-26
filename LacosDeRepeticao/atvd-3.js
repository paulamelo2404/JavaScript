// Importando a perfeita readline-sync 
const leia = require('readline-sync');

// quem vai contar e guardar as infos? fazer isso agr 
let menores21 = 0;
let maiores50 = 0;

// pedir a primeira idade
let idade = leia.questionInt('Digite uma idade: ');

// WHILE vai continuar enquanto a idade for não -negativa
while (idade >= 0) {  //ENQUANTO a idade for maior ou igual a zero, EXECUTE o bloco" 
    
    // Ver se é menor que 21 
    if (idade < 21) {
        menores21++; 
        // Incrementa contador de menor dos 21anos
    }
    
    // Verifica se a idade é maior que 50 anos
    if (idade > 50) {
        maiores50++; // Incrementa contador de maiores de 50
    }
    
    //dois if dentro do for 
    // Solicita a próxima idade
    idade = leia.questionInt('Digite uma idade: ');
}

// Exibindo os resultados finais
// Seu código original está perfeito!
console.log("Total de pessoas menores de 21 anos: " + menores21);
console.log("Total de pessoas maiores de 50 anos: " + maiores50);