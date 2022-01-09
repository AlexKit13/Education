const { Palindrome } = require("../task3");

describe('Palindrome', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('Palindrome next number', () => {
        expect(Palindrome(99)).toBe(101);
    });

    test('Palindrome next number', () => {
        expect(Palindrome(7)).toBe(11);
    });

});