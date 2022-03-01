function mdc(a, b){
    var resto;
    while (b != 0){
        resto = a % b;        
        a = b; 
        b = resto;              
    }
    console.log(a)
}
mdc(12, 18)