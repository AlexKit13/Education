// Напишите функцию, которая получает два бесконечных числа в виде строк. Вы должны вернуть результат суммы этих двух
//  чисел в виде строки. Математическая работа с этими двумя числами недоступна. Не используйте BigInt.
// getSum(‘123’, ‘324’)  ->  ‘447’

// getSum(‘111111111111111111111111111111111111111111111111111’, ’23333333333333333333333333333333333333333333333333’)
// -> ‘3444444.......4444444’


function getSum(x , y){


  const z = Number(x);
  const b = Number(y);


    const firstArr = new Array(z);
    const secondArr = new Array(b);

    return firstArr.concat(secondArr).length
}
console.log(getSum('123', '324'));

function getInfinity(x, y){

  // const x = '111111111111111111111111111111111111111111111111111'
  // const y = '23333333333333333333333333333333333333333333333333'
  const sumArr = x.split('');
  const newArr = sumArr.map(Number) // создаем массив с типом Number

  const sumArr2= y.split('');
  const  newArr2 = sumArr2.map(Number)

  const sum =  newArr2.map(function (num, ind) {
    return num + newArr[ind];
  });
  let a = sum.join('')
 return a;
}

console.log( getInfinity('111111111111111111111111111111111111111111111111111', '23333333333333333333333333333333333333333333333333')); //  объединяет все элементы массива
console.log(getSum('999',  '999'))
module.exports = { getSum, getInfinity  }



