// Receber uma quantia de vslores para avliar
// Função exibe se cada valor é par ou impar

exibirTipo(5)

function exibirTipo(limite) {

    for ( let i = 1; i <= limite; i++)
        if (i % 2 === 0){
            console.log(i, 'PAR');
        } else {
            console.log(i, 'IMPAR');
        }

}