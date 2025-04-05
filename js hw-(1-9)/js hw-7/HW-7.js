// Задание 1

let string = 'js';
console.log(string.toUpperCase());

// Задание 2

function sample(products, search) {
    const lowerSearch = search.toLowerCase();
    return products.filter(product => product.toLowerCase().startsWith(lowerSearch));  
}

const products = ['Яблоко Голден', 'Лайм Кейн', 'Глостер Яблоко', 'Яблоко Айдаред', 'Апельсин Валенсия'];
const search = 'яблоко';

const result = sample(products, search);
console.log(result);


// Задание 3

const numbers = 32.58884;

console.log(Math.floor(numbers));
console.log(Math.ceil(numbers));
console.log(Math.round(numbers));

// Задание 4

const num = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...num);
const maxValue = Math.max(...num);

console.log("Минимальное значение:", minValue); 
console.log("Максимальное значение:", maxValue); 

// Задание 5

const generation = () => Math.floor(Math.random() * 10) + 1; {
}

const resultGenerations = generation();
console.log(resultGenerations);

// Задание 6

function generateRandomArray(a) {

    const arrayLength = Math.floor(a / 2);
    const random = [];

    for (let i = 0; i < arrayLength; i++) {
        let generateRandom = Math.floor(Math.random() * (a + 1));
        random.push(generateRandom);
    }

    return random;
}

console.log(generateRandomArray(14));

// Задание 7

function randomTwoNumbers(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      console.log("Параметры должны быть числами!");
      return NaN;
    }
  
    const min = Math.ceil(Math.min(num1, num2));
    const max = Math.floor(Math.max(num1, num2));
  
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}
  
console.log(randomTwoNumbers(7, 9));
console.log(randomTwoNumbers(9, 7));
console.log(randomTwoNumbers(7.5, 9.8));
console.log(randomTwoNumbers(7, 'df'));

// Задание 8

let currentDates = new Date();
console.log(currentDates);

// Задание 9


let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

// Задание 10

function fullTimeDate() {

    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let myDate = new Date();

    let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " — это " + days[myDate.getDay()]; 
    let fullTime = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds(); 

    return [fullDate, fullTime];
}

let resulT = fullTimeDate();
console.log(resulT[0]);
console.log(resulT[1]);