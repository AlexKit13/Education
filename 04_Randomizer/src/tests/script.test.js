const { randomNumber }  = require('../script');
const { min }  = require('../script');
const { max }  = require('../script');

jest.mock('../utils', () => {
    return {
        __esModule: true,
        getInputValue: jest.fn(() => true),
        setHTMLValue: jest.fn(() => true),
        addListener: jest.fn(() => true)
    };
});

describe('tests for random function', () => {
    test('defined', () => {
        expect(randomNumber()).toBeUndefined();
    })

    describe('tests for random function', () => {
        test('defined', () => {
            expect(min < max).toBe(false);
        })
})
})