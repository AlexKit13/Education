/**
 * 1.Составьте алгоритм, который считает, сколько времени вам нужно на
 * приготовление яиц.
 * Правила:
 * -Яйца варить 5 минут
 * -Вместительность емкости не более 5 яиц одновременно
 */
let emcost = 5;
let time = 5;
function getCookingTime(eggsAmount) {
    if (eggsAmount < 0){
        return ("Зачем варит воду без яиц?")
    }
    if (eggsAmount === 0) {
        return 0;
    }
    if (eggsAmount <= emcost) {
        return time;
    }
    if (eggsAmount > emcost) {
        return time * 2;
    }
}
 // console.log(getCookingTime());

module.exports = { getCookingTime };