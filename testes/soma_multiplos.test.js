const { somarMultiplosAteLimite } = require('../codigos/soma_multiplos')
describe('Soma os múltiplos de dois números até o valor limite', () => {
    it('Soma multiplos', () => {
        expect(somarMultiplosAteLimite(5,7,1000)).toBe(171571)
        expect(somarMultiplosAteLimite(2,3,10)).toBe(48)
        expect(somarMultiplosAteLimite(3,2,5)).toBe(9)
    });
    
});