// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"

//--------------------------
//let contentTxt = document.getElementById('content').innerTex;
//--------------------------

let contentId = document.getElementById('content');
let contentTxt = contentId.innerText;
console.log(contentTxt);

//     b) отримує текст з блоку з id "rules"
let rulesId = document.getElementById('rules');
let rulesTxt = rulesId.innerText;
console.log(rulesTxt);

//     c) замініть текст параграфа з id 'content' на будь-який інший

content.innerText = 'sssssssssssss';

//     d) замініть текст параграфа з id 'rules' на будь-який інший

rulesId.innerText = 'wwwwwwwwwwwwww';

//     e) змініть кожному елементу колір фону на червоний

let p = document.getElementsByTagName('p');
for (const elem of p) {
    elem.style.backgroundColor = 'red';
}

let div = document.getElementsByTagName('div');
for (const elem of div) {
    elem.style.backgroundColor = 'red';
}

let li = document.getElementsByTagName('li');
for (const elem of li) {
    elem.style.backgroundColor = 'green';
}
//----------------------------
/* 
let bod = document.body.getElementsByTagName('*');
for (const elem of bod) {
    elem.style.backgroundColor = 'red';
}
 */
//------------------------------
//     f) змініть кожному елементу колір тексту на синій

let bod = document.body.getElementsByTagName('*');

for (const elem of bod) {
    elem.style.color = 'blue';
}
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
let idRules = document.getElementById('rules');
let classRules = idRules.classList;
for (const elem of classRules) {
    console.log(elem);
}

//     h) отримати всі елементи з класом fc_rules

let fc_rulesClass = document.getElementsByClassName('fc_rules');

//     i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (const elem of fc_rulesClass) {
    elem.style.color='red';
}