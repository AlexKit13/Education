// 1.	Найти минимальный элемент массива
let arr = [3, 4, 12, 1, -10, 5];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
    return min;
}
// возвращаем максимальное значение
console.log("Min is: " + min);



// 2.	Найти максимальный элемент массива

let array = [2, 5, 6, -7, 12, 15, 0, 3, -8, 9];
let max = getMaxValue(array);
alert(`Максимальный элемент массива ${max}`);
function getMaxValue(array){
    let max = array[0]; // берем первый элемент массива
    for (let i = 0; i < array.length; i++) { // переберем весь массив
// если элемент больше, чем в переменной, то присваиваем его значение переменной
        if (max < array[i]) max = array[i];
    }
// возвращаем максимальное значение
    return max;
}


// 3.	Найти индекс минимального элемента массива

let arr = [ 1, 4, 2, 2, 256, 2255, -1, 0, 345 ];
let maxIndex = arr.indexOf( Math.min.apply(null, arr)); // -1, считается от 0
console.log(maxIndex);


// 4.	Найти индекс максимального элемента массива

let arr = [ 1, 4, 2, 2, 256, 2255, -1, 0, 345 ];
let maxIndex = arr.indexOf( Math.max.apply(null, arr)); // 4, считается от 0
console.log(maxIndex);




// 5.	Посчитать сумму элементов массива с нечетными индексами
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
let even = [];
//arr.forEach(function(item, index){}
for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 != 0){
    }
    console.log();
}


// 6.	Сделать реверс массива (массив в обратном направлении)

function printReverse(array) {
    for (i = array.length-1; i > -1; i--) {
        console.log(array[i]); //4,3,2,1
    }
}
printReverse([1, 2, 3, 4]);
/**
 *  const array = ['one', 'two', 'threa'];
 console.log(array);
 Array.prototype.reverse.call(array);
 console.log(array);

 */



// 7.	Посчитать количество нечетных элементов массива

const mass = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum=0;
let n=0;
for(let x=0; x<mass.length; x++)
{
    if( mass[x]%2===0 )
    {
        n++;
        sum += mass[x];
        console.log("Четный элемент = " + mass[x]);
    }
}


// 8.	Поменять местами первую и вторую половину массива, например, для массива
//1 2 3 4, результат 3 4 1 2





//9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
// Пузырьком (Bubble)

function bubbleSort(array) {
    for (let j = 0; j < array.length - 1; j++) {
        for (let i = 0; i < array.length - 1 - j; i++) {
            if (array[i+1] < array[i]) {
                let k = array[i+1];
                array[i+1] = array[i];
                array[i] = k;
            }
        }
    }

    return array;
}
console.log(bubbleSort());

// Выбором (Select)

function selectSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let k = array[min];
            array[min] = array[i];
            array[i] = k;
        }
    }

    return array;
}

console.log(selectSort());

// Вставками (Insert)

function insertSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        let k = array[i];
        while (j >= 0 && array[j] > k) {
            array[j + 1] = array[j];
            j--
        }
        array[j + 1] = k;
    }

    return array;
}

console.log(insertSort())
// 10.	Отсортировать массив (Quick, Merge, Shell, Heap)

function quickSort(array) {
    if (array.length === 0) return array;
    let a = [];
    let b = [];
    let p = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < p) {
            a[a.length] = array[i];
        } else b[b.length] = array[i];
    }
    return quickSort(a).concat(p,quickSort(b));
}


module.exports = {
    arr
};