// Criar um método para ler propriedades de um objeto
// Exibir somente as propriedades do tipo string que estilo nesse objeto

const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    diretor : 'Robin',
    personagem : 'Thor'
}

exibirProprieades(filme);
function exibirProprieades(obj){
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}