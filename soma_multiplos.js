function somarMultiplosAteMil(){
    let multiplosDeCinco = 0;
    let multiplosDeSete = 0;

    for(i = 0; i <= 10; i++){
        if(i % 2 == 0)
            multiplosDeCinco += i;
            if(i % 3 == 0)
            multiplosDeSete += i;
    }
    console.log(multiplosDeCinco+multiplosDeSete)
}
somarMultiplosAteMil()


function somarMultiplosAteLimite(valor1, valor2, limite){
    let multiplosDeValor1 = 0;
    let multiplosDeValor2 = 0;

    for(i = 0; i <= limite; i++){
        if(i % valor1 == 0)
            multiplosDeValor1 += i;
            if(i % valor2 == 0)
            multiplosDeValor2 += i;
    }
    return multiplosDeValor1+multiplosDeValor2
    
}

module.exports = { somarMultiplosAteLimite }
