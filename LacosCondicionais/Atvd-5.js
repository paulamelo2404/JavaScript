// Laço Condicional Switch

let codido, quantidade, produto, precoUni, valorTotal

//  importei e inicializei a biblioteca readline-sync
const leia = require('readline-sync') 

// Passo 2: Entrada de dados do usuário
codigo = leia.questionFloat("Digite o codigo do produto: ");
quantidade = leia.questionFloat("Digite a quantidade: ");

// estrutura Switch para definir produto e preco

switch (codigo) {
    case 1:   // se o codigo for 1 - cachorro quente - 10 conto
        produto = 'Cachorro quente';
        precoUni = 10.00;
        break;
    case 2:
        produto = 'X-salada';
        precoUni = 15.00;
        break;    
    case 3:
        produto = 'X-Bacon';
        precoUni = 18.00;
        break;    
    case 4:
        produto = 'Bauru';
        precoUni = 12.00;
        break;    
    case 5:
        produto = 'refrigerante';
        precoUni = 8.00;
        break;    
    case 6:
        produto = 'Suco de Laranja';
        precoUni = 13.00;
        break;                
    default: //se n for nenhum tu lança um 
         console.log ("Digite um codigo valido!")
        break;
}
    
// if para verificar se o produto é válido 
// (precoUni > 0). Se a condição for verdadeira, o 
//  calcula o valorTotal = a quantidade * precoUni. 
// o console.log para mostrar o nome do produto e o valor 
// total formatado com duas casas decimais.
if (precoUni > 0) {
    valorTotal = quantidade * precoUni;
    console.log(`\nProduto: ${produto}`);
    console.log(`Valor total da conta: R$ ${valorTotal.toFixed(2)}`);
}

     