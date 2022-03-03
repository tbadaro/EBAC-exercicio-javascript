const { mdc } = require('./mdc')

describe('Teste da unidade mdc', () => {
    it('MDC', () => {
        expect(mdc(12, 18)).toBe(6)
        expect(mdc(15, 35)).toBe(5)
        expect(mdc(35, 21)).toBe(7)
    });
    
});