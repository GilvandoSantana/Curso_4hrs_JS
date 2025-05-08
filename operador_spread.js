// Operador Spread

const primeiroArray = [1,2,3]
const segundoArray = [4,5,6]

//Outra forma de combinar arrays abaixo:
const combinado = [...primeiroArray,...segundoArray];
//ou
//const combinado = [...primeiro,'a',...segundo,'#'];
console.log(combinado);

// Spread(clonar)

const clonado = [...combinado];
console.log(clonado);