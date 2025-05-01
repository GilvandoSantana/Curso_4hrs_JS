// JS - Objeto Endereço

function enderecoJr(Rua, Cidade,CEP){
    return {
        Rua,
        Cidade,
        CEP 
    }
}

const meuLocal = enderecoJr('Travessa Catete Velho', 'Rosário do Catete', '49760-000');
console.log(meuLocal)

//ou

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
}

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave,endereco[chave]);
}

exibirEndereco(endereco)