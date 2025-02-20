function somar2mais2() {
  return 2 + 2;
}
console.log(somar2mais2());

//Criando uma funcao que soma dois valores e retorna o resultado
function somar(val1, val2) {
  return val1 + val2;
}
console.log("5 + 3 =", somar(5, 3));
console.log("12 + 8 =", somar(12, 8));
console.log("6,5 + 2,12 =", somar(6, 5, 2, 12));

var var1 = 9;
var var2 = 6;
console.log("var1 + var2 =", somar(var1, var2));

//Criando uma funcao que escreve "bom dia!"
function bomDia(nome) {
  console.log("Olá", nome, "\nmuito bom dia para você!");
}

bomDia("Hillary");

// Criando uma função que calcula e retorna o desconto em uma venda
function desconto(valor) {
  return valor * 0.05;
}
//console.log("O desconto do produto no valor de R$100,00 é R$", desconto(100));
var totalPedido = 300;
var totalDesconto = desconto(totalPedido);
var valorFinal = totalPedido - totalDesconto;

console.log("-------------------------------");
console.log("Total do pedido: R$", totalPedido);
console.log("Total do desconto: R$", totalDesconto);
console.log("Valor liquido: R$", valorFinal);
console.log("-------------------------------");

//Criando uma função que apresenta pessoas com arrow function
const apresentaPessoas = (nomePessoa, idade, cidade) => {
  //Apresento a vocês: "Nome_Pessoa", que tem "XX" anos e mora em "Cidade"
  console.log(
    "Apresento a vocês:",
    nomePessoa,
    "que tem",
    idade,
    "anos e mora em",
    cidade
  );
};

apresentandoPessoas("Zuleika", 19, "Brotas");
apresentandoPessoas("Pafúncio", 21, "Jaú");
apresentandoPessoas("Epaminondas", 16, "Barra Bonita");
