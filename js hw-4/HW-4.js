// Задание 1
for (let i = 0; i < 2; i++) {
    console.log('Привет!');
}

// Задание 2
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3
for (let i = 7; i <= 22; i++) {
    console.log(i); 
}

// Задание 4
const obj = {
    Коля : '200',
    Вася : '300',
    Петя : '400' 
}
for (const key in obj) {
    console.log(`${key} - ${obj[key]} долларов`);
}

// Задание 5 
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    console.log(n);
    num++;
}
console.log(`Количество итераций: ${num}`);

// Задание 6
let Friday = 6;
let allDay = 31;
for (let i = Friday; i <= allDay; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}