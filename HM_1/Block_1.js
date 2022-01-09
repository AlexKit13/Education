//1.	Если а – четное посчитать а*б, иначе а+б
function isEven (a, b) {
    if ((a % 2) === 0) {
        return a * b;
    } else {
        return a + b;
    }
}

console.log(isEven(2,3))


// 2.	Определить какой четверти принадлежит точка с координатами (х,у)
function coordinate(x,y){
    if(x>0 &&  y>0){
        console.log('точка находится в первой четверти')
    }else if(x<0 &&  y>0){
        console.log('точка находится во второй четверти')
    }else if(x<0 && y<0){
        console.log('точка находится в третьей четверти')
    }else if(x>0 && y<0){
        console.log('точка находится в четвертой четверти')
    }
}

console.log(coordinate(2,3));

// 3.	Найти суммы только положительных из трех чисел
function positiveNumber(a, b, c){
    let num = 0;
    if(a > 0) {
        num = num + a;
    }
    if(b > 0) {
        num = num + b;
    }
    if (c > 0) {
        num = num + c;
    }
    console.log(num)
}
console.log(positiveNumber(-1,5,6));


// 4.	Посчитать выражение (макс(а*б*с, а+б+с))+3

function someExpression(a,b,c){
    let multiply = a * b * c;
    let sum = a + b + c;
    if (sum >= multiply) {
        console.log(sum + 3)
    } else {
        console.log(multiply + 3)
    }
}

console.log(someExpression(1,1,1));


//5.	Написать программу определения оценки студента по его рейтингу, на основе следующих правил

function getReiting(rating) {
    if(rating >= 0 && rating <=19)
    {
        return ('F');
    }else if (rating >= 20 && rating <= 39)
    {
        return ('E');
    }else if (rating >= 40 && rating <= 59)
    {
        return ('D');
    }else if (rating >= 60 && rating <= 74)
    {
        return ('C');
    }else if (rating >= 75 && rating <= 89)
    {
        return ('B');
    }else if (rating >= 90 && rating <= 100)
    {
        return ('A');
    }
}
console.log(getReiting(20))


module.exports = {
    isEven,
    coordinate,
    positiveNumber,
    someExpression,
    getReiting
};