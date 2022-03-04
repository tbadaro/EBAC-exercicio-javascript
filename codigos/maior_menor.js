function maiorMenor (arrayDeInteiros){

    let numeros = arrayDeInteiros
    maior = -Infinity;
    menor = Infinity;
    
  
    numeros.forEach((element) => {
        if (maior < element) {
            maior = element
        }
    });        
    numeros.forEach((element) => {
        if (menor > element) {
            menor = element
        }
    });
    return (`Maior = ${maior} Menor = ${menor}`)  
}

module.exports = { maiorMenor }