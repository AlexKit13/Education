const { getSum } = require("../task2");
const { getInfinity } = require("../task2");

describe('getSum', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('concat string to number', () => {
        expect(getSum('123' ,  '324')).toBe(447);
    });

});

