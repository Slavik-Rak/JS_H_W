// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arrF = [];
for (let i = 0; i < 10; i++) {
    arrF[i] = new User(` ${i}`, `name${i}`, `surname${i}`, `emailF${i}`, `phone${i}`, `order${i}`);
}
console.log(arrF);

// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}


// список товарыв рандом
function listProduct(id) {
    let arrPr = [];
    let listNumber = parseInt(Math.random() * 10);
    for (let i = 0; i < listNumber; i++) {
        arrPr[i] = `${id} - ${i+1}`;
    }
    return arrPr;
}
// список товарыв рандом



let arrC = [];
for (let i = 0; i < 10; i++) {
    arrC[i] = new Client(`idC ${i}`, `nameC${i}`, `surnameC${i}`, `emailC${i}`, `phoneC${i}`, listProduct(i));
}
console.log(arrC);
// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car(model, producer, year, maxSpeed, capacityENgine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.capacityENgine = capacityENgine;
    // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
    this.drive = () => {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    // -- info () - яка виводить всю інформацію про автомобіль
    this.info = () => {
        console.log(`модель: ${this.model}`);
        console.log(`виробник: ${this.producer}`);
        console.log(`рік випуску: ${this.year}`);
        console.log(`максимальна швидкість: ${this.maxSpeed} km/h`);
        console.log(`об'єм двигуна: ${this.capacityENgine}`);
    }

    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = (newSpeed) => {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = newValue => {
        this.year = newValue;
    }

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
    this.addDriver = driv => {
        this.name = driv.name;
        this.yourCAr = driv.yourCAr;
    }
}

let driv = {
    name: 'Oleksandr',
    yourCAr: 'BMW'
}

let mersedes = new Car('EM-clas', 'mersedes', 2020, 260, 3.0);

console.log(mersedes);
mersedes.info();
mersedes.increaseMaxSpeed(20);
mersedes.changeYear(2021);
mersedes.drive();
mersedes.addDriver(driv);
mersedes.info();
console.log(mersedes);


// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class CarClass {
    constructor(model, producer, year, maxSpeed, capacityENgine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.modcapacityENginel = capacityENgine;
    }

    // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    // -- info () - яка виводить всю інформацію про автомобіль
    info() {
        console.log(`модель: ${this.model}`);
        console.log(`виробник: ${this.producer}`);
        console.log(`рік випуску: ${this.year}`);
        console.log(`максимальна швидкість: ${this.maxSpeed} km/h`);
        console.log(`об'єм двигуна: ${this.capacityENgine}`);
    }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue) {
        this.year = newValue;
    }
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

    addDriver(driver) {
        this.name = driv.name;
        this.yourCAr = driv.yourCAr;
    }

}

const carClas = new CarClass('EM-clas', 'mersedes', 2020, 260, 3.0);

console.log(carClas);
carClas.increaseMaxSpeed(23);
carClas.changeYear(2024);
carClas.addDriver(driv);

console.log(carClas);

// 5 Взяти масив з завдання 1.arrF


// - Відфільтрувати , залишивши тільки об'єкти з парними id

let filterParId = arrF.filter(function (user) {
    return !(user.id % 2);
})
console.log(filterParId);

// - Відсортувати його по id. по зростанню

let sortIdUp = arrF.sort(function (user1, user2) {
    return user1.id - user2.id;
})
console.log(sortIdUp);

// - Відсортувати його по id. по спаданню

let sortIdDown = arrF.sort(function (user1, user2) {
    return user2.id - user1.id;
})
console.log(sortIdDown);

// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню
console.log(arrC);
// listProduct

let sortClProd = arrC.sort(function (client1, client2) {
    return client2.order.length - client1.order.length
})