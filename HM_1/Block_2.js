//Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function getSum(sum){
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0)
            sum += i;
    }
}
console.log(getSum(2));


// 2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function primeNumber(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            console.log('это составное число');
            return false;
        }else {
            console.log('Это простое число')
        }
    }
    return num > 1;
}
console.log(primeNumber(4))

// 3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
// 4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;

function factorial(num) {
    let result = num;
    if(num ===0 || num===1){
        return 1;
    }
    while(num > 1){
        num--;
        result =num*result;
    }
    return result;
}
console.log(factorial(6));

// 5.	Посчитать сумму цифр заданного числа
function sumDigits(number) {
    let str = number.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum = sum + parseInt(str.charAt(i), 10);
    }
    return sum;
}
console.log(sumDigits(123))

module.exports = {
    getSum,
    primeNumber,
    factorial,
    sumDigits
};