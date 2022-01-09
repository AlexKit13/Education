const { getNumberEven, getNumberOdd } = require("../task5");

describe('getNumberEven', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    describe('getNumberOdd', () => {
        test('test', () => {
            expect(true).toBe(true);
        })

    test('find even number', () => {
        expect(getNumberEven([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).toEqual(4);
    });

        test('find odd number', () => {
            expect(getNumberOdd([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).toEqual(13);
        });

});

});