const subtract = require('./subtract');

test('resta de manera correcta', () => {
    expect(subtract(1,2)).toBe(-1);
});