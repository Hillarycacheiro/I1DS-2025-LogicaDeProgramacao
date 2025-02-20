/********************************************************************
 *                      Lista de exercicio 04
 *******************************************************************/
// 1. Crie e imprima um vetor com 5 elementos númericos
var numeros = [4, 3, 1, 9, 7];
console.table(numeros);

// 2. Imprima na tela o 3º elemento do vetor
console.log(numeros[2]);

// 3. Faça uma cópia do vetor original
var copia = numeros.slice();
console.table(copia);

// 4. Altere o conteudo do vetor copia para que seus valores sejam o dobro dos valores do vetor original
copia[0] = numeros[0] * 2;
copia[1] = numeros[1] * 2;
copia[2] = numeros[2] * 2;
copia[3] = numeros[3] * 2;
copia[4] = numeros[4] * 2;
console.table(copia);
console.log("-------------------------------------------------");

// 5. Crie uma matriz 3x3
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [1, 3, 9],
];
console.table(matriz);

// 6. Imprima os valores da diagonal principal
console.log(matriz[0][0], "|", matriz[1][1], "|", matriz[2][2]);
