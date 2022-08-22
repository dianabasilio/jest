const {sum, returnHello} = require('./sum');

describe('sum', () =>{
    test('suma de manera correcta', () => {
        expect(sum(1,2)).toBe(3);
    });
    
    it('does the sum right when a = 5', () => {
        expect(sum(5,2)).toBe(7);
    });
});

describe('hello', () => {
    it('should have length of 5', () =>{
        expect(returnHello()).toHaveLength(5);
    });

    it('should return hello', () => {
        expect(returnHello()).toBe('hello');
    });
});
