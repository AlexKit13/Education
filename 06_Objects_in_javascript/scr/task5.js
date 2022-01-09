/**
 * Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.
 * function getNumber (array) { let result ; //Your code here
 * return result; }
 * getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]) //returns 4 getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]) //returns 13
 */


function getNumberEven (array) {
    for (let result = 0; result < array.length; result++) {
        if (array[result] % 2 == 0) {
            return array[result];
        }
    }
}
console.log(getNumberEven([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]));

function getNumberOdd (array2) {
    for (let result = 0; result < array2.length; result++) {
        if (array2[result] % 2 !== 0) {
            return array2[result];
        }
    }
}
console.log(getNumberOdd([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]));

module.exports = { getNumberEven, getNumberOdd };
