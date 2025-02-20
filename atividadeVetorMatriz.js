/********************************************************************
 *                      Exercicios Vetor Matriz
 *******************************************************************/
console.log("--------------------------------------")

//Crie um vetor que receberá dados de um usuário
var dados = [];
console.log("Favor informar seu nome");
dados.push("Hillary");

console.table(dados);

console.log("Informe seu cpf");
dados.push("491-151-048-00");

console.table(dados);

//Mostre ao usuário os dados e de um bom dia!
console.log("Bom dia", dados[0], "seu cpf é:", dados[1]);