// Задание 1
function min(a, b) {
    return a > b ? a : b;
}


console.log(min(8, 4));
console.log(min(6, 6));
console.log(min(1, 10));


// Задание 2
function evenOdd(number) {
    return number % 2 === 0 ? 'Число четное' : 'Число нечетное';
}
console.log(evenOdd(8));
console.log(evenOdd(7));
console.log(evenOdd(131));


// Задание 3
function parameter(n) {
    let powerNumber = n **2;
    console.log(powerNumber);
}

parameter(7);
parameter(10);

function squareNumber(n) {
    return n ** 2;
}

const result1 = (squareNumber(7));
const result2 = (squareNumber(10));

console.log(result1);
console.log(result2);


// Задание 4
function age(number) {;
    if (number >= 12 && number < 13) {
        console.log('Привет, друг!');
    } else if (number >=13) {
        console.log('Добро пожаловать!'); 
    } else {
        console.log('Вы ввели неправильное значение');
    }
}

age(33);


// Задание 5

function validNumbers(a, b) {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return 'Одно или оба значения не являются числом.'
    }

    return Number(a) * Number(b);
}

console.log(validNumbers(undefined, 10));
console.log(validNumbers(7, 70));
console.log(validNumbers(99, NaN));


// Задание 6

function number(a) {
    if (isNaN(Number(a))) {
        return 'Переданный параметр не является числом.'
    }

    let cube = a ** 3;
    return `${a} в кубе равняется ${cube}`;
}

for (let a = 0; a <= 10; a++) {
    console.log(number(a));
}


// Задание 7

function getArea() {
    const area = Math.PI * this.radius ** 2;
    return `Площадь круга равна: ${area.toFixed(2)}`;
};

function getPerimeter() {
    const perimetr = 2 * Math.PI * this.radius;
    return `Периметр окружности равен: ${perimetr.toFixed(2)}`;
};

const circle1 = {
    radius: 7,
    getArea,
    getPerimeter
}

const circle2 = {
    radius: 2,
    getArea,
    getPerimeter
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
