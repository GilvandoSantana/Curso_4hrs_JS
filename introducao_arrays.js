// JS aula 52 - Introdução a ARRAYS
// 1 - Add novos elementos
// 2 - Encontrar elementos
// 3 - Remover elementos
// 4 - Esvaziar elementos
// 5 - Combinar arrays
// 6 - Dividir arrays

// 1 - Add novos elementos
const numeros1 = [1,2,3];

// Início
numeros1.unshift(0);
console.log(numeros1);
// Meio
numeros1.splice(1,0,'a');
console.log(numeros1);
// Final
numeros1.push(5);
console.log(numeros1);


// 2 - Encontrar elementos

// Tipo primitvo
const numeros2 = [1,2,3,4];
//numeros2.indexOf(2)
console.log(numeros2.indexOf(2));
// OU
//numeros2.includes(2)
console.log(numeros2.includes(2));

// Tipo referência
const marcas1 = [
    {id:1, nome: 'a'},
    {id:2, nome: 'b'}
];
const marca1 = marcas1.find(function(marca1){
    return marca1.nome === 'a'
})
console.log(marca1);
// OU (ARROW FUNCTIONS)
const marcas2 = [
    {id:1, nome: 'a'},
    {id:2, nome: 'b'}
];
console.log( marcas2.find(marca2 => marca2.nome === 'a'))


// 3 - Remover elementos
const numeros3 = [1,2,3,4,5,6];

// Início
const primeiro = numeros3.shift();
console.log(primeiro);
console.log(numeros3);
// Meio
const meio = numeros3.splice(2,1);
console.log(meio);
console.log(numeros3);
// Final
const ultimo = numeros3.pop();
console.log(ultimo);
console.log(numeros3);


// 4 - Esvaziar elementos
let numeros4 = [1,2,3,4,5,6];
let outros = numeros4

//Solução 1
/*
numeros4 = [];
console.log(outros);
*/

//Solução 2 (MELHOR MÉTODO)
/*
numeros4.length = 0;
console.log(numeros4);
console.log(outros);
*/

//Solução 3
/*
numeros4.splice(0,numeros4.length);
console.log(numeros4);
console.log(outros);
*/

//Solução 4
/*
while (numeros4.length > 0)
    numeros4.pop();
console.log(numeros4);
console.log(outros);
*/

// 5 - Combinar arrays

const primeiroArray = [1,2,3]
const segundoArray = [4,5,6]

const combinado = primeiroArray.concat(segundoArray);
console.log(combinado);

// 6 - Dividir arrays

const cortado = combinado.slice(1,3);
console.log(cortado);

// Operador Spread
