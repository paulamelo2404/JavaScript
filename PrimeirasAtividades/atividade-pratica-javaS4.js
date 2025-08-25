let n1, n2, n3, n4, calculo; 

const leia = require('readline-sync');

n1 = leia.questionFloat("Insira n1: ");
n2 = leia.questionFloat("Insira n2: ");
n3 = leia.questionFloat("Insira n3: ");
n4 = leia.questionFloat("Insira n4: ");

calculo = (n1 * n2) - (n3 * n4);

console.log ('A diferença é:' + calculo);
