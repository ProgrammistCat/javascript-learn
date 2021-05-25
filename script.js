
// Первое задание - калькулятор.

let number1 = prompt('Первое число');
let number2 = prompt('Второе число');
alert(`
Числа: ${number1*1} и ${number2*1}
Сумма этих чисел =  ${number1*1 + number2*1}
Разность этих чисел = ${number1*1 - number2*1}
Произведение этих чисел = ${(number1*1) * (number2*1)}
Частное этих чисел = ${(number1*1) / (number2*1)}
Число по модулю (результат деления по модулю) этих чисел = ${(number1*1) % (number2*1)}
`);

// Второе задание - вычисление возраста.

let year = prompt('В каком году ты родился? (Напиши просто число)');
alert(`Тебе ${2021 - year*1 - 1}-${2021 - year*1} лет!`);

// Третье задание - ФИО.

let name = prompt('Твоё имя?');
let surname = prompt('Твоя фамилия?');
let patronymic = prompt('Твоё отчество?');
alert(`Тебя зовут ${surname} ${name} ${patronymic}!`);

// Домашка сделана!)








// alert('Hello world')

/*let name = prompt('Как тебя зовут?', "Вася Иванов");
alert(`Тебя зовут ${name}!`); // Тебя зовут Вася Иванов!

let age = prompt('Сколько тебе лет?', "100");

alert(`Тебе ${age} лет!`); // Тебе 100 лет!

let isBoss = confirm("Ты здесь главный?");

alert( isBoss ); // true, если нажата OK
*/

 //Пример JS
 let block = document.querySelector('.block')

 let btnRed = document.querySelector('.btn-red')
 let btnYellow = document.querySelector('.btn-yellow')
 let btnPink = document.querySelector('.btn-pink')

 let btnBig = document.querySelector('.btn-big')
 let btnSmall = document.querySelector('.btn-small')

 btnRed.addEventListener('click', () => {
    block.style.background = 'red'
 })

 btnYellow.addEventListener('click', () => {
    block.style.background = 'yellow'
 })

 btnPink.addEventListener('click', () => {
     block.style.background = 'pink'
 })

 btnBig.addEventListener('click', () => {
     block.style.width = '1500px'
     block.style.height = '5000px'
 })

 btnSmall.addEventListener('click', () => {
    block.style.width = '1px'
    block.style.height = '1px'
 })


/*
* Переменные
*
* */

//let a = 1      // number
//let b = "str"  // string
//let c = true   // boolean (true, false)

/*
* Типы данных:
* number
* string
* boolean
* null
* undefined
*
*
* typeof - функция определения типа данных
*
*
* Операторы
*
* +
* -
* *
* /
* % - деление по модулю
*
* +
*
* */


// let day = 1
// let month = 1
// let year = 2008
//
// let result = (2021 - 2008)

// let name = 'abc'
//
// let result = name + ' ' + name
