// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

/*
let arrNumber = [12, 2, 7, 54, 3];
let arrString = ['qqqq', 'ssss', 'eeee', 'tttt', 'yyyy'];
let arrMix = [12, false, 'true', -12, 's'];

console.log(arrNumber);
for (const elem of arrNumber) {
    console.log(elem);
}
console.log(arrString);
for (const elem of arrString) {
    console.log(elem);
}
console.log(arrMix);
for (const elem of arrMix) {
    console.log(elem);
}
 */

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

/*
let arr = [];
arr[0] = 'www';
arr[1] = 23;
arr[2] = true;
for (const elem of arr) {
    console.log(elem);
}
 */


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

/* for (let i = 0; i < 10; i++) {
    document.write(`
    <div style="color:red">elem </div>
    `)
}
 */

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

/* for (let i = 0; i < 10; i++) {
    document.write(`
    <div style="color:red">elem ${i}</div>
    `)
}
 */

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

/*
let count = 20;

while (count) {

    document.write(`
    <h1> Lorem ipsum dolor sit amet consectetur.</h1>
    `)

    count--;
}
 */

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

/* let count = 20;

while (count) {

    document.write(`
    <h1> Lorem ipsum dolor sit amet consectetur. ${count}</h1>
    `)

    count--;
} */

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

/* 
let a = parseInt(Math.random() * (30));
let arr = [];
for (let i = 0; i < 10; i++) {
    a = parseInt(Math.random() * (30));
    arr[i] = a;
}
for (const elem of arr) {
    console.log(elem);
} 
*/

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
/* 
let arr = ['aaa', 'bbb', 'cccc', 'ffff', 'zzzzz', 'eeee', 'rrrr', 'tttt', 'ee', 'ssss']

for (const elem of arr) {
 console.log(elem);
}
 */
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

/* 
let arr = ['aaa', 34, true, 'ffff', -21, 'eeee', false, 'tttt', 0.3, 'ssss']

for (const elem of arr) {
 console.log(elem);
}
 */

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
/* 
let arr = ['aaa', 34, true, 'ffff', -21, 'eeee', false, 'tttt', 0.3, 'ssss']

for (const elem of arr) {
    if (typeof elem === 'boolean') {
        console.log(elem);
    }
}
 */

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
/* 
let arr = ['aaa', 34, true, 'ffff', -21, 'eeee', false, 'tttt', 0.3, 'ssss']

for (const elem of arr) {
    if (typeof elem === 'number') {
        console.log(elem);
    }
}

 */
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
/* 
let arr = ['aaa', 34, true, 'ffff', -21, 'eeee', false, 'tttt', 0.3, 'ssss']

for (const elem of arr) {
    if (typeof elem === 'string') {
        console.log(elem);
    }
}
 */
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

/* 
let arr = ['aaa', 34, true, 'ffff', -21, 'eeee', false, 'tttt', 0.3, 'ssss']

for (let i = 0; i < arr.length; i++) {

    console.log(arr[i]);

}
 */


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/* 
for(let i = 0; i<10;i++){
    console.log(i);
    document.write(`
        <div style='color:red'>${i}</div>
    `)
}
 */
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

/* 
for(let i = 0; i<100;i++){
    console.log(i);
    document.write(`
        <div style='color:red'>${i}</div>
    `)
}
 */
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

/* 
for (let i = 0; i < 100; i=i+2) {
    console.log(i);
    document.write(`
        <div style='color:red'>${i}</div>
    `)
}
 */
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
/* 
for (let i = 0; i < 100; i++) {

    if (!(i % 2)) {
        console.log(i);
        document.write(`
        <div style='color:red'>${i}</div>
    `)
    }
}
 */

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

/* 
for (let i = 0; i < 100; i++) {

    if (i % 2) {
        console.log(i);
        document.write(`
        <div style='color:red'>${i}</div>
    `)
    }
}
 */
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]



let usersWithId = [{
        id: 1,
        name: 'vasya',
        age: 31,
        status: false
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false
    }
];



let citiesWithId = [{
        user_id: 3,
        country: 'USA',
        city: 'Portland'
    },
    {
        user_id: 1,
        country: 'Ukraine',
        city: 'Ternopil'
    },
    {
        user_id: 2,
        country: 'Poland',
        city: 'Krakow'
    },
    {
        user_id: 4,
        country: 'USA',
        city: 'Miami'
    }
];
let arrNewUser = [];
for (const elemUs of usersWithId) {

    for (const elemCitis of citiesWithId) {

        if (elemUs.id === elemCitis.user_id) {
            let obj = {};

            for (const keyUs in elemUs) {
                obj[keyUs] = elemUs[keyUs];
            }

            obj.address = {};

            for (const keyCitis in elemCitis) {
                obj.address[keyCitis] = elemCitis[keyCitis];
            }

            arrNewUser.push(obj);
        }

    }
}
for (const elem of arrNewUser) {

    for (const key in elem) {
        console.log(elem[key])
    }

}