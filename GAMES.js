function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


// Игра 1 //

function playGame1() {
    const num = getRandomNumber(100);
    let attempts = 10;

    alert('Добро пожаловать в игру! Ваша цель — угадать число от 1 до 100. У вас есть 10 попыток.');

    while (attempts > 0) {
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

        if (answer === num) {
            alert(`Поздравляю! Вы угадали число ${num}!`);
            return;
        } else if (answer < num) {
            alert("Ваше число меньше загаданного. Попробуйте ещё раз.");
        } else {
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

// Игра 3

function playGame3() {
    alert('Привет! Твоя задача — написать любой текст, который я потом переверну. Интересно? Давай начнём!');

    let playing = true;

    while (playing) {
        const answerUser = prompt('Введите текст или нажми "Отмена" для выхода из игры:');

        if (answerUser === null) {
            alert('Игра завершена, ты вышел');
            playing = false;
            continue;
        }

        if (answerUser === "") {
            alert("Вы ничего не ввели. Попробуйте еще раз.");
            continue;
        }

        const reversedText = answerUser.toLowerCase().split("").reverse().join("");
        alert("Перевернутый текст: " + reversedText);
    }
}

// Игра 4

function playGame4() {
    alert('Привет! Тебе предстоит пройти простую викторину с несколькими вопросами и вариантами ответов.');
    alert('Выбери один правильный ответ. Начнем!')

    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },

        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },

        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    function startQuiz() {

        let correctAnswersQuantity = 0;
        const results = [];

        for (let i = 0; i < quiz.length; i++) {
            const question = quiz[i].question;
            const options = quiz[i].options;
            const correctAnswer = quiz[i].correctAnswer;

            const userAnswer = prompt(`${question}\n${options.join("\n")}\n Введите номер вашего ответа:`);

            if (userAnswer === null) {
                alert("Викторина завершена. Вы отменили игру.");
                return;
            }

            const userAnswerNumber = parseInt(userAnswer);

            if (isNaN(userAnswerNumber) || userAnswerNumber < 1 || userAnswerNumber > 3) {
                alert("Некорректный ввод. Пожалуйста, введите число от 1 до 3.");
                i--;
                continue;
            }

            let isCorrect = userAnswerNumber === correctAnswer; 
            if (isCorrect) {
                correctAnswersQuantity++;
            }

            results.push({
                question: question,
                userAnswer: userAnswerNumber,
                correctAnswer: correctAnswer,
                isCorrect: isCorrect
            });
        }

        let resultString = "";

        for (let i = 0; i < results.length; i++) {

            const result = results[i];
            const questionNumber = i + 1;

            resultString += `\nВопрос ${questionNumber}: ${result.question}\n`;

            resultString += `Ваш ответ: ${result.userAnswer} - ${result.isCorrect ? "Верно!" : "Неверно."}\n`;
                if (!result.isCorrect) {
            resultString += `Правильный ответ: ${result.correctAnswer}\n`;
            }
        }

        alert(`Викторина завершена! Вы ответили правильно на ${correctAnswersQuantity} из ${quiz.length} вопросов.` + resultString);
    }
    
    startQuiz();
}