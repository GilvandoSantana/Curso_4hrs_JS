let permissao; //comum, gerente, diretor
permissao = 'comum'
switch (permissao) {
    case 'comum':
        console.log('Usuário comum');
    break

    case 'gerente':
        console.log('Usuário gerente');
    break

    case 'diretor':
        console.log('Usuário diretor');
    break

    default:
    console.log('Usuario desconhecido');
}