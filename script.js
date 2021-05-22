

// alert('Hello world')

let name = prompt('Как тебя зовут?', "Вася Иванов");

alert(`Тебя зовут ${name}!`); // Тебя зовут Вася Иванов!

let age = prompt('Сколько тебе лет?', "100");

alert(`Тебе ${age} лет!`); // Тебе 100 лет!

let isBoss = confirm("Ты здесь главный?");

alert( isBoss ); // true, если нажата OK

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
     block.style.width = '500px'
     block.style.height = '500px'
 })

 btnSmall.addEventListener('click', () => {
    block.style.width = '50px'
    block.style.height = '50px'
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
* */

