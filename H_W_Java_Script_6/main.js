
let users = [{
  name: 'vasya',
  age: 31,
  status: false,
  address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
  name: 'petya',
  age: 30,
  status: true,
  address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
  name: 'kolya',
  age: 29,
  status: true,
  address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
  name: 'olya',
  age: 28,
  status: false,
  address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
  name: 'max',
  age: 30,
  status: true,
  address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
  name: 'anya',
  age: 31,
  status: false,
  address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
  name: 'oleg',
  age: 28,
  status: false,
  address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
  name: 'andrey',
  age: 29,
  status: true,
  address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
  name: 'masha',
  age: 30,
  status: true,
  address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
  name: 'olya',
  age: 31,
  status: false,
  address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
  name: 'max',
  age: 31,
  status: true,
  address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];
// 1 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
// 2 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості


let wrapUsersBlocks = document.createElement('div');
wrapUsersBlocks.classList.add('wrapUsersBlocks');
document.body.appendChild(wrapUsersBlocks);

for (let elem of users) {

  let divWrapUser = document.createElement('div');
  divWrapUser.classList.add('divWrapUser');

  // ---name block-------------
  let divName = document.createElement('div');
  divName.classList.add('divName');
  divName.innerText = elem.name;
  // ---name block-------------

  // ---age block-------------
  let divAge = document.createElement('div');
  divAge.classList.add('divAge');
  divAge.innerText = elem.age;
  // ---age block-------------

  // ---status block-------------
  let divStatus = document.createElement('div');
  divStatus.classList.add('divStatus');
  divStatus.innerText = elem.status;
  // ---status block-------------


  // ---adress block-------------

  let divAdres = document.createElement('div');
  divAdres.classList.add('divAdres');

  divAdres.innerText = 'address: ';
  let objAdress = elem.address;

  let divAdressDescription = document.createElement('div');
  divAdressDescription.classList.add('divStatus');

  for (const key in objAdress) {


    divAdressDescription.innerHTML += `${key} : ${objAdress[key]} <br>`
    console.log(objAdress[key])
  }
  // ---adres block-------------

  divWrapUser.appendChild(divName);
  divWrapUser.appendChild(divAge);
  divWrapUser.appendChild(divStatus);
  divWrapUser.appendChild(divAdres);
  divAdres.appendChild(divAdressDescription);
  wrapUsersBlocks.appendChild(divWrapUser);
}


// 3 Є масив котрий характеризує правила.

let rules = [
  {
    title: 'Первое правило Бойцовского клуба.',
    body: 'Никому не рассказывать о Бойцовском клубе.'
  },
  {
    title: 'Второе правило Бойцовского клуба.',
    body: 'Никогда никому не рассказывать о Бойцовском клубе.'
  },
  {
    title: 'Третье правило Бойцовского клуба.',
    body: 'В схватке участвуют только двое.'
  },
  {
    title: 'Четвертое правило Бойцовского клуба.',
    body: 'Не более одного поединка за один раз.'
  },
  {
    title: 'Пятое правило Бойцовского клуба.',
    body: 'Бойцы сражаются без обуви и голые по пояс.'
  },
  {
    title: 'Шестое правило Бойцовского клуба.',
    body: 'Поединок продолжается столько, сколько потребуется.'
  },
  {
    title: 'Седьмое правило Бойцовского клуба.',
    body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
  },
  {
    title: 'Восьмое и последнее правило Бойцовского клуба.',
    body: 'Новичок обязан принять бой.'
  }
];
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html


let wrapRuls = document.createElement('div');
wrapRuls.classList.add('wrapRuls');

for (const elem of rules) {

  let wrapRulSingle = document.createElement('div');
  wrapRulSingle.classList.add('wrapRulSingle');

  for (const key in elem) {
    let divNumberRul = document.createElement('div');
    divNumberRul.classList.add('divNumberRul');
    divNumberRul.innerText = elem[key]

    if(key === 'body'){
      divNumberRul.classList.add('divTxtRul');
    }

    wrapRulSingle.appendChild(divNumberRul);
  }





  wrapRuls.appendChild(wrapRulSingle);
}

document.body.appendChild(wrapRuls);

