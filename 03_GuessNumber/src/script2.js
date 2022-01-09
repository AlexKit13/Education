const btn_check = document.getElementById("check");
let guess_box = document.querySelector(".main__guess--box");
let all_guesses = document.querySelector(".main__all--guesses");
let high_or_low = document.querySelector(".main__high--or--low");

let random_num = Math.floor(Math.random() * 200) + 1;
let count_guess = 1;



function checkGuess() {
    let your_guess = Number(guess_box.value);
    if(guess_box.value === ''){
        alert ("Будь любезен заполнить поле ввода")
        return false;
    }
    else if(guess_box.value < 1 || guess_box.value > 100){
        alert("Чувак, читай правила!")
        return false;
    }
    if (count_guess < 15) {
        if (your_guess < random_num) {
            all_guesses.textContent += your_guess + " ";
            high_or_low.textContent = `Не угадал, холоднее... Попытка ${count_guess} `;
            count_guess++;
            guess_box.value = '';
        }
        else if (your_guess > random_num) {
            all_guesses.textContent += your_guess + " ";
            high_or_low.textContent = `Не угадал, но теплее!!!Попытка ${count_guess} `;
            count_guess++;
            guess_box.value = '';
        }
        else if (your_guess === random_num) {
            all_guesses.textContent += your_guess + " ";
            high_or_low.textContent = `Поздравляю! Ты угадал задуманное число за ${count_guess} попытки(ок)`;
            high_or_low.classList.add("success");
            guess_box.value = '';
            gameOver();
        }
    }
    else {
        all_guesses.textContent += your_guess + " ";
        high_or_low.textContent = "Игра окончена! Ты использовал все попытки";
        gameOver();
    }
}

function gameOver() {
    btn_check.disabled = true;
    guess_box.disabled = true;
}