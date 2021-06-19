
// Зробити свій розпорядок дня.

// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.

// Напиклад.
// Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с

// І так далі

function wakeUp(isWorkDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWorkDay) {
                resolve('1 I wake Up for work');
            } else {
                reject('I sleep longer');
            }
        }, 2000)
    })
}

function goToBasroom() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("2 I go to the basroom");
        }, 5000);
    })
}

function haveBreakfast(isFood) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (isFood) {
                resolve("3 I have breakfast");
            } else {
                reject("there is nothing to eat ");
            }
        }, 2000);
    })
}

function driveTOWork() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (levelTank > 5) {
                levelTank -= 5;
                resolve("4 drive to work by car");
            } else {
                reject("go to the car gas station Or drive to work by bus");
            }
        }, 4000)
    })

}
function work() {
    return new Promise((resolve) => {
        setTimeout(() => {
            money += 1000;
            resolve("5 WORK");
        }, 3000)
    })
}
function driveToDiner() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (levelTank > 10) {
                levelTank -= 5;
                resolve("6 drive to dinner to Dinner");
            } else {
                reject("go to diner on foot");
            }
        }, 1000)
    })
}
function dinner() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 100) {
                money -= 100;
                resolve("7 Dinner");
            } else {
                reject("You  have not money");
            }
        }, 3000)
    })
}
function comeBackWork() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (levelTank > 10) {
                levelTank -= 5;
                resolve("8 drive come back to work");
            } else {
                reject("come back to work on foot");
            }

        }, 1000)
    })
}
function workAfteerDinner() {
    return new Promise((resolve) => {
        setTimeout(() => {
            money += 1000;
            resolve("9 Work After Diners");
        }, 3000)
    })
}
function driveToStore() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (levelTank > 10) {
                levelTank -= 5;
                resolve("10 drive  to store");
            } else {
                reject("go to store on foot");
            }
        }, 1000)
    })
}

function store() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (money > 1000) {
                money -= 1000;
                resolve("11 Buy products ");
            } else {
                reject("You  have not money");
            }
        }, 3000)
    })
}
function refuelingTheTank() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (levelTank < 35) {
                levelTank += 60 - levelTank;
                money -= 500;
                resolve("12 refueling the tank ");
            } else {
                reject("Enough gasoline ");
            }
        }, 2000)
    })
}

function driveToHome() {
    return new Promise((resolve) => {
        setTimeout(() => {
            levelTank -= 5;
            resolve("13 drive  to Home");
        }, 1000)
    })
}

let money = 10000;
let levelTank = 50;

wakeUp(true)
    .then(resolve => {
        console.log(` money: ${money} , level Tank ${levelTank}`);
        console.log(resolve);
        return goToBasroom();
    })
    .then(resolve => {
        console.log(resolve);
        return haveBreakfast(true);
    })
    .then(resolve => {
        console.log(resolve);
        return driveTOWork();;
    })
    .then(resolve => {
        console.log(resolve);
        console.log(`level Tank ${levelTank}`);
        return work();
    })
    .then(resolve => {
        console.log(resolve);
        console.log(` money: ${money}`);
        return driveToDiner();
    })
    .then(resolve => {
        console.log(resolve);
        console.log(`level Tank ${levelTank}`);
        return dinner();
    })
    .then(resolve => {
        console.log(resolve);
        console.log(` money: ${money}`);
        return comeBackWork();
    })
    .then(resolve => {
        console.log(resolve);
        console.log(`level Tank ${levelTank}`);
        return workAfteerDinner();
    })
    .then(resolve => {
        console.log(resolve);
        console.log(` money: ${money}`);
        return driveToStore();
    })
    .then(resolve => {
        console.log(resolve);
        console.log(`level Tank ${levelTank}`);
        return store();
    })
    .then(resolve => {
        console.log(resolve);
        console.log(` money: ${money} `);
        return refuelingTheTank();
    })
    .then(resolve => {
        console.log(resolve);
        console.log(` money: ${money} , level Tank ${levelTank}`);
        return driveToHome();
    })
    .then(resolve => {
        console.log(resolve);
        console.log(`level Tank ${levelTank}`);
    })
    .catch(resolve => {
        console.log('-------------------------------------');
        console.log(resolve);
        console.log('-------------------------------------');
    })
    .finally(() => {
        console.log(` money: ${money} , level Tank ${levelTank}`);
        console.log('Sleep');
    })






