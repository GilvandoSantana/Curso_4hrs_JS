// Criar função que retorna os multiplos de 3 e 5
// Por fim, somar todos os multiplos

somar(10);
function somar(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;

    const primeiroMultiplo = 3
    const segundoMultiplo = 5

    for (let i = 1; i <= limite; i++) {
        if (i % primeiroMultiplo === 0)
            multiplosDe3 += i;
        if (i % segundoMultiplo === 0)
            multiplosDe5 += i
    }
    let resultado = multiplosDe3 + multiplosDe5
    console.log(resultado)
}