const { getInputValue, addListener, setHTMLValue } = require('./utils')



const resultArr = [];
let resultCount = 1;

function randomNumber() {
    const minValue = Number.parseInt(getInputValue('min'));
    const maxValue = Number.parseInt(getInputValue('max'));


    if(!maxValue  || !minValue){
        setHTMLValue('genNumber','Заполните поля')
        return;
    }

    if (maxValue < minValue) {
        setHTMLValue('genNumber','Минимальное число не должно превышать максимальное') ;
        return;
    }

    const result = Math.round(minValue - 0.5 + Math.random() * (maxValue - minValue + 1));

    if (resultArr.length === maxValue - 1){
        document.getElementById('commit').disabled = true;
        setHTMLValue('genNumber','Игра окончена!');
        return;
    }

    if(resultArr.includes(result)) {
        randomNumber();
        return;
    }

    if(resultCount === 1) {
        setHTMLValue('genNumber','Generated number: ');
    }
    document.getElementById('genNumber').textContent += result + ' ';

    resultArr.push(result);
    resultCount++;
}
addListener('commit', 'click', randomNumber)


module.exports = { randomNumber };