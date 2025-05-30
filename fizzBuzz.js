//Divisível por 3 => Fizz
//Divisível por 5 => Buzz
//Divisível por 3 e 5 => FizzBuzz
//Não divisível por 3 e 5 => FizzBuzz
//Não é um número => 'Não é um número'

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada) {
    if ((entrada % 3 === 0) && ( entrada % 5 ===0)) {
        return 'FizzBuzz';
    }
    if (entrada % 3 === 0) {
        return 'Fizz';
    }
    if (entrada % 5 === 0) {
        return 'Buzz';
    }
    if (typeof entrada !== 'number'){
        return 'Não é um número';
    }

    return entrada;
}