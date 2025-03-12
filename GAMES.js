function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


// Игра 1 //
function playGame1() {
    const num = getRandomNumber();
    let attempts = 10;

    alert('Добро пожаловать в игру! Ваша цель — угадать число от 1 до 100. У вас есть 10 попыток.');

    while(attempts > 0) {
        let answer = prompt(`Введите число`);

        if (answer === null) {
            alert('Вы решили выйти из игры');
            return;
        }

        answer = parseInt(answer);

        if (isNaN(answer)) {
            alert('Пожалуйста, введи корректное число.');
            continue; 
        }

        if(answer === num) {
            alert(`Поздравляю! Вы угадали число ${num}!`);
            return;
        }else if(answer < num) {
            alert("Ваше число меньше загаданного. Попробуйте ещё раз.");
        }else{
            alert("Ваше число больше загаданного. Попробуйте ещё раз.");
        }
        attempts--;
    }
    
     alert(`К сожалению, вы использовали все попытки. Загаданное число было ${num}.`);
        return;
}
