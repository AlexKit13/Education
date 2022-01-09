const { countCharacters } = require("../task2");

describe('countCharacters', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('return str + key duplicate characters', () => {
        expect(countCharacters('sparrow')).toEqual({ s: 1, p: 1, a: 1, r: 2, o: 1, w: 1 } );
    });

});