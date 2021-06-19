/* - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
 */

let elem1 = 'hello';
let elem2 = 'owu';
let elem3 = 'com';
let elem4 = 'ua';
let elem5 = 1;
let elem6 = 123;
let elem7 = 10;
let elem8 = -999;
let elem9 = 3.14;
let elem10 = 2.7;
let elem11 = 16;
let elem12 = true;
let elem13 = false;

// Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(elem1);
console.log(elem2);
console.log(elem3);
console.log(elem4);
console.log(elem5);
console.log(elem6);
console.log(elem7);
console.log(elem8);
console.log(elem9);
console.log(elem10);
console.log(elem11);
console.log(elem12);
console.log(elem13);

//alert
alert(elem1);
alert(elem2);
alert(elem3);
alert(elem4);
alert(elem5);
alert(elem6);
alert(elem7);
alert(elem8);
alert(elem9);
alert(elem10);
alert(elem11);
alert(elem12);
alert(elem13);

//document.write('')

document.write(elem1);
document.write(elem2);
document.write(elem3);
document.write(elem4);
document.write(elem5);
document.write(elem6);
document.write(elem7);
document.write(elem8);
document.write(elem9);
document.write(elem10);
document.write(elem11);
document.write(elem12);
document.write(elem13);

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
let elem1 = 12;
let elem2 = 3;
let elem3 = true;
let elem4 = 34.45;
let elem5 = 0;
let elem6 = NaN;
let elem7 = false;
let elem8 = 999;
let elem9 = 'asdsd';
let elem10 = '2.7';
let elem11 = 'wwww';
let elem12 = 1;
let elem13 = 900;
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log(elem1);
console.log(elem2);
console.log(elem3);
console.log(elem4);
console.log(elem5);
console.log(elem6);
console.log(elem7);
console.log(elem8);
console.log(elem9);
console.log(elem10);
console.log(elem11);
console.log(elem12);
console.log(elem13);

//alert
alert(elem1);
alert(elem2);
alert(elem3);
alert(elem4);
alert(elem5);
alert(elem6);
alert(elem7);
alert(elem8);
alert(elem9);
alert(elem10);
alert(elem11);
alert(elem12);
alert(elem13);

//document.write('')

document.write(elem1);
document.write(elem2);
document.write(elem3);
document.write(elem4);
document.write(elem5);
document.write(elem6);
document.write(elem7);
document.write(elem8);
document.write(elem9);
document.write(elem10);
document.write(elem11);
document.write(elem12);
document.write(elem13);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.

let firstName = 'Rak';
let middleName = 'Yaroslav';
let lastName = 'Romanovuch';

let person = {
  firstName: 'Rak',
  middleName: 'Yaroslav',
  lastName: 'Romanovuch'
}

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.

let firstName = prompt("Enter firstName");
let middleName = prompt("Enter middleName");
let lastName = prompt("Enter lastName");

console.log(firstName);
console.log(middleName);
console.log(lastName);

//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let firstName = prompt("Enter firstName");
let age = prompt("Enter your age");
alert("Вітаю " + firstName + " Тобі " + age + " років");


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));

/* - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
В однакових виразаї не використовувати однакові оператори!!!
  5 < 6 -> true
  5 > 6 -> false
  5 == 6 -> false
  5 === 6 -> false
  10 == 10 -> true
  10 === 10 -> true
  10 !== 10 -> false
  10 > 10 -> false
  10 < 10 -> false
  123 === '123' -> false
  123 == '123' -> true

Додатково:
- Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
console.log(132 > 100 && 45 < 12 );                                     false
console.log(34 > 33 && 23 < 90 );                                           true
console.log(99 > 100 && 45 > 12 );                                      false
console.log(132 > 100 || 45 < 12 );                                      true
console.log(111 > 11 || 45 < 111 );                                         true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );          false       
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );            false  
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );           false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));              true
console.log(!!'-1');                                                        true                     
console.log(!!-1);                                                          true  
console.log(!!'0');                                                         true
console.log(!!'null');                                                       true                         
console.log(!!'undefined');                                                 true
console.log(!!(3/'owu'));                                                    false
console.log((111 > 11 || 45 < 111) ||  !!'0');                               true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));       false
*/