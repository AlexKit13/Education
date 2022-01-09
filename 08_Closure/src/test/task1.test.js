const { tickets } = require("../task1");

describe('tickets', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('takes an array of money return answer', () => {
        expect(tickets([25, 25, 50, 100])).toBe('YES');
    });

    test('takes an array of money return answer', () => {
        expect(tickets([25, 50, 100])).toBe('NO');
    });

    test('Check for invalid data entry', () => {
        expect(tickets('')).toBe(false);
    });

});