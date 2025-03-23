// Задание 1

const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) break;
    console.log(`Элементы массива, пока не встретилось значение 10: ${numbers[i]}`);
}

// Задание 2

const number = [1, 5, 4, 10, 0, 3];
const index = number.indexOf(4);
console.log(`Индекс цифры 4 равен: ${index}`);

// Задание 3

const emptyLine = [1, 3, 5, 10, 20];
const result = emptyLine.join (' ');
console.log(result);

// Задание 4

const multiArray = [];

for (let i = 0; i < 3; i++) {
  multiArray[i] = [];

  for (let c = 0; c < 3; c++) {
    multiArray[i][c] = 1;
  }
}

console.log(multiArray);

// Задание 5

const arr = [1, 1, 1];
console.log(arr.push(2, 2, 2));
console.log(arr);

// Задание 6

const sorting = [9, 8, 7, 'a', 6, 5];
sorting.sort();
const filteredSort = sorting.filter(item => item !== 'a');
console.log(filteredSort);

// Задание 7

const array = [9, 8, 7, 6, 5];
const guessed = prompt("Угадайте число:");

if (guessed !== null && array.includes(Number(guessed))) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

// Задание 8

const row = 'abcdef';

const splitRow = row.split('').reverse();
const reverseRow = splitRow.join('');
console.log(reverseRow);

// Задание 9

const  unification = [[1, 2, 3],[4, 5, 6]]
const concat = [...unification[0], ...unification[1]];
console.log(concat);

// Задание 10

const randomArray = [3, 5, 8, 1, 4];

for (let i = 0; i < randomArray.length-1; i++) {
    let sum = randomArray[i] + randomArray[i+1];
    console.log(`Сумма текущего (${randomArray[i]}) и следующего (${randomArray[i + 1]}) элемента: ${sum}`);
}

// Задание 11

function power(num) {
    return num.map(el => el ** 2);
}
  
const inputArray = [6, 5, 3, 4, 7];
const res = power(inputArray);
console.log(res);

// Задание 12

function getStringLengths(strings){
    return strings.map(item => item.length);
}
  
const randomWords = ["pipette", "table", "game", "prefix"];
const wordLengths = getStringLengths(randomWords);

console.log(wordLengths);

// Задание 13

function filterNegativeNumbers(numeric) {
    return numeric.filter(item => item < 0);
}

const numberArray = [6, -7, -1, 2, 4, -9];
const negativeNumbers = filterNegativeNumbers(numberArray);
console.log(negativeNumbers);

// Задание 14

const randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 10));
}

const evens = randomNumbers.filter(num => num % 2 === 0);

console.log(`Исходный массив: , ${randomNumbers}`);
console.log(`Массив четных чисел: , ${evens}`);


// Задание 15

const numbersArray = [];

for (let i = 0; i < 6; i++) {
    let randomValue = Math.floor(Math.random() * 10) + 1;
    numbersArray.push(randomValue);
}

const sum = numbersArray.reduce((total, number) => total + number, 0);
let average = sum / numbersArray.length;
const roundingNumber = average.toFixed(2);

console.log(`Массив: ${numbersArray}`);
console.log(`Среднее арифметическое всех цифр равно: ${roundingNumber}`);