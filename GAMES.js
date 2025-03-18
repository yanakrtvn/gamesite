function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


// Игра 1 //

function playGame1() {
    const num = getRandomNumber(100);
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


// Игра 2

function playGame2() {
    alert("Привет! Предлагаю тебе порешать простые арифметические задачи. Давай приступим!");
    alert("Обрати внимание, что при умножении и делении ответ округляется до сотых.")

    while (true) {
        const number1 = getRandomNumber(10);
        const number2 = getRandomNumber(10);

        const arithmeticOperators = [
            { symbol: '+', calculate: (a, b) => a + b },
            { symbol: '-', calculate: (a, b) => a - b },
            { symbol: '*', calculate: (a, b) => a * b },
            { symbol: '/', calculate: (a, b) => a / b }
        ];

        const randomNumber = Math.floor(Math.random() * arithmeticOperators.length);
        const randomSymbol = arithmeticOperators[randomNumber];

        let answer = prompt(`${number1} ${randomSymbol.symbol} ${number2} = `);

        if (answer === null) {
            alert(`Игра завершена, ты решил выйти.`);
            break;
        }

        const analyzedAnswer = parseFloat(answer);

        if (isNaN(analyzedAnswer)) {
            alert(`Пожалуйста, введи корректное число.`);
            continue;
        }

        const rightAnswer = randomSymbol.calculate(number1, number2);

        let roundedRightAnswer = rightAnswer;

        if (randomSymbol.symbol === '*' || randomSymbol.symbol === '/') {
            roundedRightAnswer = parseFloat(rightAnswer.toFixed(2));
        }

        if (Math.abs(analyzedAnswer - roundedRightAnswer) < 0.001) {
            alert(`Да, верно!`);
        } else {
            alert(`Ответ неверный. Правильный ответ: ${roundedRightAnswer}`);
        }
    }
}