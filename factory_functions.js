function criarCelular(marcaCelular, tamanhoTela,capacidadeBateria){
    return {
        marcaCelular: 'Asus',
        tamanhoTela: {
            vertical: 155,
            horizontal: 75
        },
        capacidadeBateria: 5000,
        ligar: function (){
            console.log("Fazendo ligação...")
        }
    }
}


//JS aula 34 - Factory Functions (Função de Fábrica)
function criarCelular(marcaCelular, tamanhoTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
}

const celular1 = criarCelular('Samsung', 5.5, 5000)
console.log(celular1)