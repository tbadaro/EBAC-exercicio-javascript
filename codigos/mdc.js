function mdc(valor1, valor2){
    var resto;
    while (valor2 != 0){
        resto = valor1 % valor2;        
        valor1 = valor2; 
        valor2 = resto;              
    }
    return valor1    
}

module.exports = { mdc }