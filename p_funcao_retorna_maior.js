//Escrever uma função que usa dois números e retorna o maior


/*
//Que eu fiz
function maior(){
    let primeiro = 2
    let segundo = 3
    if (primeiro > segundo){
        console.log('primeiro');
    } else {
        console.log('segundo');
    }
}
*/

//1° Resultado correto

/*
let valorMaior = max(10,9)
console.log(valorMaior)

function max(numero1,numero2) {
    if (numero1 > numero2){
        return numero1;
    } else {
        return numero2;
    }
}
*/

//2° Resultado correto (Mais limpo o código)


let valorMaior = max(10,9)
console.log(valorMaior)

function max(numero1,numero2) {
    return numero1>numero2 ? numero1:numero2;
}