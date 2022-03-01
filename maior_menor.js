
let numeros =[98459, 48759589, 5892349240, 32, 95839234, 39835731, 49320523, 3043752];
a = -Infinity;
b = Infinity;

numeros.forEach((element) => {
    if (a < element) {
        a = element
    }
});

console.log('maior valor: '+ a)

numeros.forEach((element) => {
    if (b > element) {
        b = element
    }
});

console.log('menor valor: '+ b)