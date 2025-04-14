//If..else

// Se a hora estiver entre 06:00 até 12:00, bom dia!
// Se estiver entre 12:00 até 18:00, boa tarde
// Caso contrário, boa noite

/*
if (condicao) {
    //codigo a ser executado
}
else if (outraCondicao) {
    //codigo a ser executado
}
else {
    //codigo a ser executado
}
*/

let hora = 22;

if (hora>6 && hora < 12) {
    console.log('Bom dia')
}
else if (hora > 12 && hora < 18) {
    console.log('Boa tarde')
}
else {
    console.log('Boa noite')
}