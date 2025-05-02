// JS Aula 46 - Conatructor Function (Exercício)

// Criar um objeto postagem
// título, postagem, autor, visualizações, comentários, estaAoVivo

function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = []
    this.estarAoVivo = false
}

let postagem = new Postagem('a', 'b', 'c');
console.log(postagem);

