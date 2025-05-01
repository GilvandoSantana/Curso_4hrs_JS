// JS Aula 45 - Objetos de Blog (Exercício)

//Postagem
/*
titulo
mensagem
autor
visualizações
comentarios
    (autorCom, mensagemCom)
estarAoVivo
*/

//Minha tentativa
/*
function postagem(titulo,mensagem,autor,visualizações,comentarios,estarAoVivo) {
    return {
        titulo,
        mensagem,
        autor,
        visualizações,
        comentarios,
        estarAoVivo
    }
}

const dados = postagem('JavaScript','Estou aprendendo JS','Gilvando','1M','Fulano','Parabéns','Sim')
console.log(dados)

*/
//Dele
let postagem = {
    titulo:'a',
    mensagem:'b',
    autor:'c',
    visualizacoes: 10,
    comentarios : [
        {autor: 'ab', mensagem: 'aabb'},
        {autor: 'cd', mensagem: 'ccdd'}
    ],
    estarAovivo: true
}
console.log(postagem);