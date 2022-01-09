/**
 * Принимая число, ваша функция должна найти следующий
 * положительный палиндром большего размера.
 */

function reverse(nums) {
    let reverse = "";
    for (let i = String(nums).length - 1; i >= 0; i--) {
        reverse = reverse + String(nums)[i];
    }
    return reverse;
}

function Palindrome(num) {
    if(num < 10){
        return 11;
    }
    for (let i = num + 1;  ; i++) {
        if (String(i) === reverse(i)) {
            return i
        }
    }
}
console.log(reverse(200))

module.exports = { Palindrome };