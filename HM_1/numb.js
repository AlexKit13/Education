document.querySelector('.start').onclick = randomNumber; // кнопка старт
let a = document.querySelector('.help').innerHTML // подсказка


let numberOfGuss = 0; // количество попыток
let rand = Math.floor(Math.random() * 100) + 1;
function randomNumber(){
    if(numberOfGuss >= 5){
        a.textContent = 'Вы использовали 5 попыток'
        return;
    }
    let numb = parseInt(document.querySelector('.field_input').value); // получаем значение с поля ввода

    if(numb > rand){
        a.textContent = "Не угадал, холоднее.  Осталось " + (numberOfGuss)+ ' попытки(ок)';
        numberOfGuss++;
    }
    if(numb < rand){
        a.textContent = "Не угадал, но тепле. Осталось " + numberOfGuss + ' попытки(ок)';
        numberOfGuss++;
    }
    document.querySelector('.help').innerHTML('Поздравляю! Это число' + rand + 'Ты угадал задуманное число за ' +  numberOfGuss + 'попытки(ок)');
    return;
}

