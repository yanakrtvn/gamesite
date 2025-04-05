// Задание 1
let a = 10;
alert(a);

a = 20;
alert(a);

// Задание 2
let iPhone = 2007;
alert(iPhone);

// Задание 3
let nameCreator = "Brendan Eich";
alert(nameCreator);

// Задание 4
let number1 = 10;
let number2 = 2;

let sum = number1 + number2;
let difference = number1 - number2;
let composition = number1 * number2;
let private = number1 / number2;

let resultString = "Сумма: " + sum + "\n" + "Разность: " + difference + "\n" + "Произведение: " + composition + "\n" + "Частное: " + private;
alert(resultString);

// Задание 5
let degree = 2;
let result = 2 ** 5;
alert(result);

// Задание 6
let A = 9;
let b = 2;
result = 9 % 2;
alert(result);

// Задание 7
let number = 1;
number += 5;
number -= 3;
number *= 7;
number /= 3;
number++;
number--;
alert(number);

// Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

// Задание 9
let user = {
    name: 'Alex',
    age: 35,
    isAdmin: true
}
console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);

// Задание 10
let userName = prompt("Пожалуйста, введите ваше имя:");
if (userName !== null && userName !== "") {
    alert(`Здравствуй, ${userName}!`);
}
else {
    alert("Вы не ввели имя");
}