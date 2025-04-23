/*
////CamelCase - umDoisTresQuatro
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
*/

//Pacal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Fazendo Ligação...");
    }
}

//O 'new' é a chave

const celular = new Celular('Asus', 5.5, 5000);
console.log(celular);