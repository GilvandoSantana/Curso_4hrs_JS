const celular = {
    
    marcaCelular: 'Asus',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function (){
        console.log("Fazendo ligação...")
     }

}

//Primeira Alternativa
const novoObjeto = Object.assign({Bateria: 5000},celular);
    console.log(novoObjeto);

//repete a função solicitada e ainda permite adcionar mais informação
//Ex: Bateria:5000

//Segunda Alternativa
const objeto2 = {...celular};
    console.log(objeto2);