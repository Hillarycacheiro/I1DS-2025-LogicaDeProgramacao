/********************************************************************
 *                      Lista de exercicio 05
 *******************************************************************/
// 1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa e retorne sua idade 
function nascimento(nome,ano){
    let idade = 2025 - ano;
    console.log("A", nome, "nasceu no ano", ano, "e tem", idade, "anos");
}
nascimento("Hillary", "2009")

// Outro jeito:
function idade(anoAtual, anoNascimento){
    return anoAtual - anoNascimento;
}
console.log("A Hillary tem", idade(2025, 2009), "anos.");
console.log("-------------------------------------------------")

// 2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. Considere que o veículo faz uma média de 12 Kms/L
const combustível = (litros) => {
    return litros * 12;
};
var car1 = 20;
var car2 = 8;
var car3 = 2;
console.log("Carro 1:",car1, "->" , combustível(car1), "Kms.");
console.log("Carro 1:",car2, "->" , combustível(car2), "Kms.");
console.log("Carro 1:",car3, "->" , combustível(car3), "Kms.");