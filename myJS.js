
// Тернарный оператор
const age = 6;
const tempCar = 5 === age ? 'small' : 'big';
console.log(tempCar);


// function calculateTotal(num1, num2) {
//     return num1 * num2;
// }

// const calculateTotal = function(num1, num2) {
//     return num1 + num2
// }

// const calculateTotal = (num1, num2) => {
//     return num2 + num1
// }

const calculateTotal = (num1, num2) => num1 + num2

console.log(calculateTotal(5, 5))


const students = ['name1', 'name2', 'name3']

console.log(students[0])
// to last
students.push('sveta')
console.log(students)
// to first
students.unshift('vov')
console.log(students)
// Проверка на принадлежность
students.includes('name1')

const welcome = students.map(
    (student) => {
        return `Welcome ${student}`;
    }
)
console.log(welcome)


// object

const year = 2022;
const car = {
    color: 'black',
    brand: 'qq',
    year: year,
    options: ['1', '2'],
    drive: function() {
        return `${this.brand} gogo`;
    }
};

delete car.color

console.log(car);


const temp = []

for (let i = 0; i < 10; i++) {
    temp.push(`name${i}`);
}
console.log(temp)


temp.forEach(function(name) {
    return 'welcome ' + name
})


const wrapper = document.querySelector('.wrapper')
code = wrapper.innerHTML
for (let i = 0; i < 15; i++) {
    code += `<p id="${i}">Simple text</p>`
}
wrapper.innerHTML = code

const myPic = document.querySelector('.myPic')
// console.dir(myPic)


myPic.addEventListener('click', function() {
    myPic.classList.toggle('circle');
})


function makeBurger() {
    const burgerPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            //Бургер готов
            resolve('Done');
            //Сгорел
            // reject('Failed');
        }, 3000)
    });
    return burgerPromise;
}

// асинхронность
const burger = makeBurger();
console.log(burger)

burger.then(function(myBurger) {
    console.log('my burger')
})
