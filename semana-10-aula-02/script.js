/* 
No desafio anterior criamos uma calculadora, usando uma outra abordagem 
- crie uma função "calculator" que recebe dois valores (números) por parâmetro.
- essa funçao deve retornar uma outra função, que recebe um parâmetro chamado "callback".
- esse "callback" será uma função, que passaremos por parâmetro ao invocar o retorno de "calculator"
- o retorno dessa segunda função deve receber a função de "callback" passada por parâmetro, INVOCADA, e passando a ela por parâmetro os dois valores que foram passadas para a primeira função "calculator".
 
*/

function calculator(number1, number2) {
  return function (callback) {
    return callback(number1, number2);
  };
}

/* 
 - declare uma variável chamada "sum", e atribua a ela a função "calculator", passando dois números por parâmetro
*/
var sum = calculator(10, 2);

/* 
 - sabemos que "sum" agora tem uma função atribuida a ela, que é o retorno de "calculator". E essa função espera um parâmetro "callback". O "callback" tem dois parâmetros disponíveis, que são os números que você acabou de passar para a chamada à "calculator" acima.
 - mostre no console o retorno da invocação de "sum", passando por parâmetro uma função anônima que iria retornar a soma dos dois números que essa função anônima tem como seus argumentos.
*/

console.log("O resultado da soma é: ");

console.log(sum((number1, number2) => number1 + number2));

/* 
 - agora declare outras variáveis chamadas 
 "subtraction", "multiplication", "division" e "mod", 
 e atribua à elas "calculator", passando números diferentes para cada chamada. 

*/

var subtraction = calculator(5, 2);

var multiplication = calculator(5, 2);

var division = calculator(5, 2);

var mod = calculator(5, 2);

/* 
 - mostre as variáveis acima no "console" (uma chamada de console por variável ), criando a função de "callback" que faz o cálculo para 
 subtração, multiplicação, divisão e módulo (resto de divisão), conforme a função utilizada.
 as respostas devem estar abaixo dos "console.log" referentes à cada chamada. 

*/

/* 
- subtração:
*/

console.log("O resultado da subtração é: ");

subtraction = (number1, number2) => number1 - number2;

console.log(subtraction(40, 30));

/* 
- multiplicação:
*/

console.log("O resultado da multiplicação é: ");

multiplication = (number1, number2) => number1 * number2;

console.log(multiplication(50, 2));

/* 
divisão:
*/

console.log("O resultado da divisão é: ");

division = (number1, number2) => number1 / number2;

console.log(division(50, 2));

/* 
mod:
*/

console.log("O resultado de mod é: ");

mod = (number1, number2) => number1 % number2;

console.log(mod(5, 2));
