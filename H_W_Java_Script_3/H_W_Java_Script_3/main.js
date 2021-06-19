

// 1) створити функцію яка приймає масив та виводить його

/* 
let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function fun(arr) {
    for (const elem of arr) {
        console.log(elem);
    }
}
fun(mas);
 */

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

/* 
pushRandomNumber(20)
function pushRandomNumber(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(Math.random() * 10);
    }
    fun(arr);
}
 */

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

/* 
let a = prompt('Enter first Number');
let b = prompt('Enter second Number');
let c = prompt('Enter three Number');
document.write(`-${a}-${b}-${c}<br>`);
funMin(a, b, c);


function funMin(a, b, c) {


    if (a < b && a < c) {
        document.write(`a-min ${a}`)
    } else if (b < a && b < c) {
        document.write(`b-min ${b}`)

    } else if (c < a && c < b) {
        document.write(`c - min ${c}`)
    }

}
document.write(`<br>-----------------------------------<br>`)
 */

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
/* 
funMax(a,b,c);

function funMax(a, b, c) {


    if (a > b && a > c) {
        document.write(`a-max ${a}`)
    } else if (b > a && b > c) {
        document.write(`b-max ${b}`)

    } else if (c > a && c > b) {
        document.write(`c - max ${c}`)
    }

}
document.write(`<br>-----------------------------------<br>`)
 */

// 5) створити функцію яка повертає найбільше число з масиву
function creatArrRundom(n) {
    let arrRund = [];
    for (let i = 0; i < n; i++) {
        arrRund[i] = parseInt(Math.random() * 10);
    }
    console.log(arrRund);
    return arrRund;
}

// creatArrRundom(15);

function maxNumberArr(arr) {
    let addVar = arr[0];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j] && j == (arr.length - 1)) {

                if (arr[i] > addVar) { addVar = arr[i]; }

            }
        }
    }
    return addVar;
}
console.log(maxNumberArr(creatArrRundom(15)));


// 6) створити функцію яка повертає найменьше число з масиву

function minNumberArr(arr) {
    let addVar = arr[0];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j] && j == (arr.length - 1)) {

                if (arr[i] < addVar) { addVar = arr[i]; }

            }
        }
    }
    return addVar;
}
console.log(minNumberArr(creatArrRundom(15)));

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

function sumNumbersArr(arr) {
    let sum = 0;
    for (const elem of arr) {
        sum = sum + elem;
    }
    return sum;
}

console.log(sumNumbersArr(creatArrRundom(10)));



// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function meddleAref(arr) {
    return sumNumbersArr(arr) / arr.length;

}

console.log(meddleAref(creatArrRundom(10)))
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let arrOBj = [
    { name1: 'Dima', age: 13 },
    { name2: `foreword`, pageCount1: 14 },
    { name3: `boyWhoLived`, pageCount2: 18 },
    { name4: `vanishingGlass`, pageCount3: 13 },
    { name5: `lettersFromNoOne`, pageCount4: 17 },
    { name5: `afterword`, pageCount5: 19 }

];
function arrKeyObjs(arrObj) {

    let arrKey = [];
    for (const elem of arrObj) {


        for (const key in elem) {
            arrKey.push(key);
        }
    }
    return arrKey;
}


console.log(arrKeyObjs(arrOBj));

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function arrContentObjs(arr) {
    let arrContent = [];
    for (const elem of arr) {


        for (const key in elem) {
            arrContent.push(elem[key]);
        }
    }
    return arrContent;
}
console.log(arrContentObjs(arrOBj));
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

let arr1 = creatArrRundom(10);
let arr2 = creatArrRundom(10);
console.log(`${arr1}--------------------------------${arr2}`);
indexSame(arr1, arr2);
function indexSame(arr1, arr2) {
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        let count = 0;
        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j]) {


                if (newArr.length > 0) {

                    for (const elem of newArr) {
                        if (arr1[i] === elem) {
                            count = 1
                        }
                    }
                    if (count === 0) {


                        newArr.push(arr1[i]);
                    }
                } else {
                    newArr.push(arr1[i]);
                }

            }

        }

    }
    console.log(newArr);
}
