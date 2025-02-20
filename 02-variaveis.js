// Criando variáveis com "var" (var nome_variavel = <valor>;)
var nome = "Tibúrcio";
console.log("Meu nome é", nome);
var idade = 23;
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos");
idade = idade + 1;
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos");
console.log("-----------------------------------------");

//JavaScript trabalha com sistemas case sensitive (maiúscula são diferentes de minúsculas)
console.log("Criando uma variável Teste e tentando acessar como testE.");
let Teste = "variável teste!";
//console.log(testE);
console.log(Teste);

//REGRAS PARA NOMEAR INDENTIFICADORES (VARIAVEIS)
//Podem iniciar com 'A' - 'Z', 'a' - 'z', '_' ou '$'
let Minhavariavel = 10;
let Outravariavel = 2.65;
const _minhaConstante = "Uma constante qualquer!";
var $minhaVariavel = -5;

//Variaveis logicas (boolean)
var nome = "Hillary";
var rica = false;
var eBonita = true;
console.log("Nome:", nome, "| É bonita?", eBonita, "| É rica?", rica);
