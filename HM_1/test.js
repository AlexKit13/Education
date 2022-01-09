//const {expect} = require('chai')
const assert = require('assert');
const {isEven} = require('../HM_1/Block_1');
const {coordinate} = require('../HM_1/Block_1');
const {positiveNumber} = require('../HM_1/Block_1');
const {someExpression} = require('../HM_1/Block_1');
const {getReiting} = require('../HM_1/Block_1');
////////////////////////////////////////////////////
const {getSum} = require('../HM_1/Block_2');
const {primeNumber} = require('../HM_1/Block_2');
const {factorial} = require('../HM_1/Block_2');
const {sumDigits} = require('../HM_1/Block_2');
////////////////////////////////////////////////////
const {arr} = require('../HM_1/Block_2');

describe("Block_1 Test", function () {

    it('Если а – четное посчитать а*б, иначе а+б', ()  => {
        const bt1 = isEven(2,3);
    });
    it('Определить какой четверти принадлежит точка с координатами (х,у)', ()  => {
        const bt1_1 = coordinate(2,3);
    });
    it('Найти суммы только положительных из трех чисел', ()  => {
        const bt1_2 = positiveNumber(-1,5, 6);
    });
    it('осчитать выражение (макс(а*б*с, а+б+с))+3', ()  => {
        const bt1_3 = someExpression(1,1, 1);
    });
    it('Написать программу определения оценки студента по его рейтингу, на основе следующих правил', ()  => {
        const bt1_4 = getReiting(20);
    });
});

describe("Block_2 Test", function () {
    it('Найти сумму четных чисел и их количество в диапазоне от 1 до 99', ()  => {
        const bt2 = getSum(20);
    });
    it('Проверить простое ли число?', ()  => {
        const bt2_1 = primeNumber(4);
    });
    it('Вычислить факториал числа n. n! = 1*2*…*n-1*n', ()  => {
        const bt2_2 = factorial(6);
    });

    it('Посчитать сумму цифр заданного числа', ()  => {
        const bt2_3 = sumDigits(6);
    });
});
describe("Block_3 Test", function () {

    it('Найти минимальный элемент массива', ()  => {
        const bt3 = arr(3);
    });
});