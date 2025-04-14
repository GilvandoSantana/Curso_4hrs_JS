//Velocidade máxima até 70
//A cada 5km/h, acrescenta 1 ponto na carteira
//Math.floor()
//Caso pontos maior que 12, perde a carteira

let velocidade = velocimetro(75

)
console.log(velocidade)

function velocimetro(radar) {
    if (radar > 75 && radar < 80 ){
        return '1 ponto'
    }
    if (radar >= 80 && radar < 85 ){
        return '2 ponto'
    }
    if (radar >= 85 && radar < 90 ){
        return '3 ponto'
    }
    if (radar >= 90 && radar <95 ){
        return '4 ponto'
    }
    if (radar >= 95 && radar <100 ){
        return '5 ponto'
    }
    if (radar >= 100 && radar <105 ){
        return '6 ponto'
    }
    if (radar >= 105 && radar <110 ){
        return '7 ponto'
    }
    if (radar >= 110 && radar <115 ){
        return '8 ponto'
    }
    if (radar >= 115 && radar <120 ){
        return '9 ponto'
    }
    if (radar >= 120 && radar <125 ){
        return '10 ponto'
    }
    if (radar >= 125 && radar <130 ){
        return '11 ponto'
    }
    if (radar >= 130 && radar <135 ){
        return '12 ponto'
    }
    if (radar >= 135 ){
        return 'Carteira Suspensa'
    }
}
