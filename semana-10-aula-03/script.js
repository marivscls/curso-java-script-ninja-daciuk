(function () {
  /* 
 - crie uma IIFE que envolva todo esse arquivo (inclusive esse comentário), e faça a identação correta.
*/

  /* 
 - sem alterar os códigos nos "console.log" abaixo, faça 
 com que o retorno deles seja "true", usando os wrapper objects 
 como "conversores" nos valores das variáveis. analise oque está 
 sendo impresso no console para saber como resolver o problema 
 corretamente.
*/

  var five = "5";
  console.log(five + " é número?", typeof five === "number");

  var concat = String(10) + 10;
  console.log(
    '"' + concat + '" é uma string? E é igual a "1010"?',
    typeof concat === "string"
  );
})();

var six = "6";

console.log(six + " é um número?", typeof six === "number");

/* 
 voltando ao exemplo da calculadora, vamos utilizar mais uma abordagem 
 funcional, mas dessa vez, separando algumas responsabilidades.
 - primeiro, crie um objeto chamado "operation" que terá as propriedades:
 "+" "-" "*" "/" e "%"

 - cada propriedade vai receber uma função (logo, elas serão métodos), 
 e essa função receberá dois parâmetros e retornará a operação referente 
 à sua propriedade, usando os valores passados por parâmetro.
 */

var operation = {
  "+": (x, y) => x + y,
  "-": (x, y) => x + y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
  "%": (x, y) => x % y,
};

/* 
 agora vamos criar uma calculadora.
 - crie uma função chamada "calculator", que
 receberá como parâmetro um operador;

 - se o operador não for válido, a função deve retornar "false";
 - se o operdaor for válido, retornar uma segunda função que receberá 
 dois parâmetros;
 - se algum dos parâmetros não for número, retornar "false";
 - senão, retornar o método do objeto "operation" criado acima, 
 baseado no operador passado para a função "calculator", e passando
 passando para esse método os dois parâmetros da função de retorno de "calculator".
*/

/* 
 - crie uma função chamada "isOperatorValid", 
 que receberá um operador por parâmetro.
 
 - essa função será responsável por verificar se 
 o operador passado por parâmetro a ela é válido,
 ou seja, se ele é igual a "+", "-", "*", "/" ou
 "%".
 - se for igual a qualquer um desses, ela deverá 
 retornar "true". caso contrário, "false".
 - o desafio é fazer o retorno sem usar "if" ou
 "switch"
*/
function calculator(operator) {
  if (!isOperatorValid(operator)) {
    return false;
  }
  return function (x, y) {
    if (typeof x !== "number" && typeof y !== "number") {
      return false;
    }
    return operation[operator](x, y);
  };
}

console.log(calculator(10, 9));

/*
crie uma função chama "showOperationMessage" que recebe três parâmetros: 
 - o operador, o primeiro número e o segundo número. o retorno da função 
 deve ser a seguinte frase:
 "a operação [NUMBER] [OPERADOR] [NUMBER2] =";
*/

function showOperationMessage(operator, number1, number2) {
  return "a operação ' + number1 + ' ' + operator + ' ' + number2 + ' =";
}

/* 
crie uma função chamada "showErrorMessage" que recebe um parâmetro: 
o operador da operação calculo, quando a operação não for válida.
essa função deverá retornar a frase:
"operação "[OPERATOR]" não permitida!"
*/

function showErrorMessage(operator) {
  return "operação  ' + operator + '  não permitida!";
}

/* 
nossa calculadora está pronta: agora vamos testá-la:
PASSO 1:
- declare a variável: "number1" e "number2", iniciando com valor zero, e 
"operationSignal", sem valor por enquanto.
*/
var number1 = 0;
var number2 = 0;
var operactionSignal;

/* 
PASSO 2:
- atribua à variável operactionSignal o operador de soma, e declare uma variável chamada 
"sum", que receba a função "calculator", passando por parâmetro a variável que recebeu 
o sinal de operação.
*/

operactionSignal = "+";
var sum = calculator(operactionSignal);

/* 
PASSO 3:
"sum" agora é uma função, e, se o sinal correto não foi passado
para a função "calculator", "sum" será false. certifique-se de que "sum"
não é false, e então atribua às variáveis "number1" e "number2", dois números
que serão os operandos da operação de soma.
após isso, mostre no console o resultado da operação, passando dois parâmetros 
para o método "log" de "console";
 
 - o primeiro será a mensagem da operação (usando a função criada acima);
 - segundo, a função de soma, passando os dois operandos.
 - se "sum" for "false", mostrar no console a mensagem de erro. 
*/

if (sum) {
  number1 = 10;
  number2 = 12;
  console.log(
    showErrorMessage(operactionSignal, number1, number2),
    sum(number1, number2)
  );
} else {
  console.log(showErrorMessage(operactionSignal));
}

/* 
 - repita desde o "PASSO 2" com as operações de subtração, 
 multiplicação, divisão e resto. crie variáveis com os nomes
 "subtraction", "multiplication", "division", "mod"
*/

operactionSignal = "-";
var subtraction = calculator(operactionSignal);
if (subtraction) {
  number1 = 8;
  number2 = 11;
  console.log(
    showOperationMessage(operactionSignal, number1, number2),
    subtraction(number1, number2)
  );
} else {
  console.log(showErrorMessage(operactionSignal));
}

operactionSignal = "*";
var multiplication = calculator(operactionSignal);
if (multiplication) {
  number1 = 5;
  number2 = 2;
  console.log(
    showOperationMessage(operactionSignal, number1, number2),
    multiplication(number1, number2)
  );
} else {
  console.log(showErrorMessage(operactionSignal));
}

operactionSignal = "/";
var division = calculator(operactionSignal);
if (division) {
  number1 = 150;
  number2 = 3;
  console.log(
    showOperationMessage(operactionSignal, number1, number2),
    division(number1, number2)
  );
} else {
  console.log(showErrorMessage(operactionSignal));
}

operactionSignal = "%";
var mod = calculator(operactionSignal);
if (mod) {
  number1 = 150;
  number2 = 7;
  console.log(
    showOperationMessage(operactionSignal, number1, number2),
    mod(number1, number2)
  );
} else {
  console.log(showErrorMessage(operactionSignal));
}
