/************************************************************************            
				    Lista de Exercícios 
************************************************************************/
/*  
1. Realize as seguintes instruções: 
- Crie uma variável texto e armazene o nome de uma pessoa 
- Crie uma variável numérica e armazene o ano de nascimento 
- Escreva "Nome da pessoa" nasceu em "ano de nascimento" 
- Calcule a idade da pessoa 
- Escreva "Nome da pessoa" tem "idade" anos 

2. Se um retângulo possui comprimento=12cm e largura=6cm, qual a sua área?  

3. E se adicionarmos uma dimensão altura=5cm, qual seria o volume?  

4. Se temos uma equação 2x² + 3x -1, qual seria o valor de delta?  

5. Um cliente fez um compra no valor de R$ 450,00 e obteve 3% de desconto. Qual o valor do desconto e o valor final da compra ?  

6. Um carro viaja por três horas e meia a uma velocidade média de 95 Km/h. Calcule a distância percorrida, sabendo que Vmedia = S/T 
*/

//atv 1
var nomePessoa = "Hillary";
var anoNascimento = "2009";
console.log(nomePessoa, "nasceu em", anoNascimento);
var idade = 2025 - anoNascimento;
console.log(nomePessoa, "tem", idade, "anos.");
console.log("-----------------ATIVIDADE 2-------------------------------");

//atv 2
var base = 12;
var altura = 6;
var area = base * altura;
console.log(
  "A área do retângulo de base",
  base,
  "e altura",
  altura,
  "é:",
  area
);
console.log("-------------------ATIVIDADE 3-----------------------------");

//atv 3
var profundidade = 5;
var volume = area * profundidade;
console.log("O volume do retangulo é:", volume);
console.log("--------------------ATIVIDADE 4----------------------------");

//atv 4
var a = 2;
var b = 3;
var c = -1;
var delta = b ** 2 - 4 * a * c;
console.log("O valor de delta é:", delta);
console.log("--------------------ATIVIDADE 5----------------------------");

//atv 5
var compra = 450;
var desconto = 0.03;
desconto = compra * desconto;
var total = compra - desconto;
console.log("compra: R$", compra," - desconto R$", desconto," = total:",total);
console.log("-----------------------ATIVIDADE 6----------------------------");

//atv 6
var tempo = 3.5;
var velocidade = 95;
var distancia = tempo * velocidade;
console.log("A distancia percorrida é de:", distancia, "Km");