// JS Aula 47 - Faixa de preço(Exercício)
// Crie um array de objetos de faixa de preço para que ele possa ser usado em um site igual o mercado livre

// Primeira opção
let faixas1 = [
    {tooltip: 'até R$699', minimo: 0, maximo: 699},
    {tooltip: 'de R$700 a R$999', minimo: 700, maximo: 999},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 10000}
]
console.log(faixas1)

// Segunda opção(Factory Function)

function criarFaixaPreco(tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixaPreco('até R$699',0,699),
    criarFaixaPreco('de R$700 a R$999',700,999),
    criarFaixaPreco('R$1000 ou mais',1000,10000)
]
console.log(faixas2)

// Terceira Opção (Constructor Function)

function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixaPreco('até R$699',0,699),
    new FaixaPreco('de R$700 a R$999',700,999),
    new FaixaPreco('R$1000 ou mais',1000,10000)
]
console.log(faixas3)