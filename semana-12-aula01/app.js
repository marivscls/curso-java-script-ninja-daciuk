(function () {
  /* 
envolva todo o conteúdo em um IIFE
*/

  /* 
crie um objeto chamado "person", com 
as propriedades:
  `name`: string
  `lastname`: string
  `age`: number
preencha cada propriedade com os seus
dados pessoais, respeitando o tipo 
de valor para cada propriedade
*/

  const person = {
    name: "mariana",
    lastname: "vasconcelos",
    age: 22,
  };
  console.log("propriedades de 'person':");
  console.log(person);

  /* 
mostre no console, em um array, todas as 
propriedades do objeto acima.
não use nenhuma estrutura de repetição,nem
crie o array manualmente.

console.log(Object.keys(person));
*/

  /* 
crie um array vazio chamado "books"

*/
  let books = [];

  /* 
adicione nesse array 3 objetos, que serão 
3 livros. cada livro deve ter a seguintes
propriedades:
"name": string
"pages": number

  const books = [
    {
      name: "harry potter",
      pages: 200,
    },

    {
      name: "senhor dos anéis",
      pages: 500,
    },

    {
      name: "cidade dos ossos",
      pages: 400,
    },
  ];

  console.log("\nLista de livros:");
  console.log(books);
*/

  books.push({ name: "harry potter", pages: 200 });
  books.push({ name: "senhor dos anéis", pages: 500 });
  books.push({ name: "cidades dos ossos", pages: 400 });
  console.log("\nLista de livros:");

  /* 
mostre no console todos os livros.
*/

  console.log(books);
  console.log("\nlivro que está sendo removido:");

  /* 
remova o último livro, e mostre-o no console.
*/

  console.log(books.pop());

  /* 
mostre no console os livros restantes.
*/

  console.log(books);

  /* 
converta os objetos que ficaram em "books"
para strings.
*/
  books = JSON.stringify(books);
  console.log("\nLivros em formato string:");

  /*
mostre os livros nesse formato no console:
*/

  console.log(books);

  /* 
converta os livros novamente para objeto.
*/
  books = JSON.parse(books);
  console.log("\nAgora os livros são objetos novamente:");
})();
