// importei e inicializei a biblioteca readline-sync
const leia = require('readline-sync')

// aqui eu pego os dois num
let num1 = leia.questionInt('Digite o primeiro numero inteiro: ')
let num2 = leia.questionInt('Digite o segundo numero inteiro: ')

// se n1 >= faremos uma coisa caso n faremos outra
if (num1 >= num2) {
    console.log("Intervalo inválido, o segundo tem quer ser maior que o primeiro!");
} else {
    console.log(`No Intervalo entre ${num1} e ${num2}:`);
    
    // Laço FOR que percorre todos os num do intervalo [num1, num2]
    for (let num = num1; num <= num2; num++) {
        // Verifica se num é múltiplo de 3 e 5 simultaneamente
        if (num % 3 === 0 && num % 5 === 0) {
            // Imprime o número + frase (passei muito tempo pra dazer isso q odio)
            console.log(`${num} é múltiplo de 3 e 5`);
        }
    }
}