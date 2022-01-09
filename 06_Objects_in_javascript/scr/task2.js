/**
 * Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение –
 * количество повторений символов в строке
 */

function countCharacters(string) {
    let count = {};

    for (let result = 0; result < string.length; result++) {
        if (count[string[result]]) {
            count[string[result]]++;

        }
        else {
            count[string[result]] = 1;

        }
    }
    return count;
}
// console.log(countCharacters('sparrow'));
// console.log(countCharacters('aabcddeffge'));
// console.log(countCharacters('a 2ab !d'.replace(/\s/g, '').replace(/[^a-zа-яё0-9\s]/gi, '')));

module.exports = { countCharacters };