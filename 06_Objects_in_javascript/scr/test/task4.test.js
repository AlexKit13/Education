const { getCookingTime } = require("../task4");

describe('getCookingTime', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('egs evenly 5 Cook Time =', () => {
        expect(getCookingTime(5)).toBe(5);
    });

    test('egs more 5 Cook Time =', () => {
        expect(getCookingTime(6)).toBe(10);
    });

    test('Check for absence of eggs', () => {
        expect(getCookingTime(-1)).toBe("Зачем варит воду без яиц?");
    });

});