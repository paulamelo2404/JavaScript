let SalarioBruto, AdicionalNoturno, HorasExtras, Descontos, SalarioLiquido, HorasExtrasM

const leia = require('readline-sync')


SalarioBruto = leia.questionFloat("Insira seu salario bruto: ");
AdicionalNoturno = leia.questionFloat("Insira seu adicional noturno: ");
HorasExtras = leia.questionFloat("Insira suas horas extras: ");
Descontos = leia.questionFloat("Insira seus descontos: ");

HorasExtrasM = HorasExtras * 5;

salarioliquido = SalarioBruto + AdicionalNoturno + HorasExtrasM - Descontos

console.log ('Seu salário liquido é: ' + salarioliquido)