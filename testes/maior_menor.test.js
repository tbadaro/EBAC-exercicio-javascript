const { maiorMenor } = require("../codigos/maior_menor");

describe('Seleciona o menor e o maior valor de um array', () => {
    it('Maior e menor valor', () => {
        expect(maiorMenor([98459, 48759589, 5892349240, 32, 95839234, 39835731, 49320523, 3043752])).toBe(`Maior = ${5892349240} Menor = ${32}`)
        expect(maiorMenor([3, 4, 19, 35])).toBe(`Maior = ${35} Menor = ${3}`)      
    });    
});