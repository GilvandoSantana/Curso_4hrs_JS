// Criar uma função que exibe a quantidade de * que possui em cada linha

exibirAsteriscos(10)

function exibirAsteriscos(linhas) {
    let padrao = '';
    for(let linha = 0; linha <= linhas; linha++) {
        padrao += '*';
        console.log(padrao)
    }
}