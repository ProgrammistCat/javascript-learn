
// Первое задание - калькулятор.

// let number1 = prompt('Первое число');
// let number2 = prompt('Второе число');
// alert(`
// Числа: ${number1*1} и ${number2*1}
// Сумма этих чисел =  ${number1*1 + number2*1}
// Разность этих чисел = ${number1*1 - number2*1}
// Произведение этих чисел = ${(number1*1) * (number2*1)}
// Частное этих чисел = ${(number1*1) / (number2*1)}
// Число по модулю (результат деления по модулю) этих чисел = ${(number1*1) % (number2*1)}
// `);
//
// // Второе задание - вычисление возраста.
//
// let year = prompt('В каком году ты родился? (Напиши просто число)');
// alert(`Тебе ${2021 - year*1 - 1}-${2021 - year*1} лет!`);
//
// // Третье задание - ФИО.
//
// let name = prompt('Твоё имя?');
// let surname = prompt('Твоя фамилия?');
// let patronymic = prompt('Твоё отчество?');
// alert(`Тебя зовут ${surname} ${name} ${patronymic}!`);

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
* undefined - не определенно
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
* + - конкатанация
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


/*
*
* 1 + '1' + 1
*
* NaN - not a number
*
* 1 + '1' = '1' + '1' = '11'
* 1 + 1 + '1' = 2 + '1' = '21'
*
* */


// let a = prompt('А: ') - 0
// let b = prompt('B: ') - 0
//
// alert(a + b)
// KISS - keep is simple, stupid


// alert((prompt('А: ') - 0) + (prompt('B: ') - 0))

// let age = prompt('Сколько лет?') - 0
//
// if (age < 18) {
//     alert('Доступа нет')
// } else {
//     alert('Доступ есть')
// }


/*
*
* <
* >
* <=
* >=
*
* ==
* !=
*
* "ау" == "ау"
*
*
* || - ИЛИ - or
* && - И - and
* !  - НЕ - not
*
*
* true  && true  = true
* true  && false = false
* false && true  = false
* false && false = false
*
* true  || true  = true
* true  || false = true
* false || true  = true
* false || false = false
*
* !false = true
* !true  = false
*
*
* true && false || true = true
* true && (false || true) = true
*
* !!!!true = true
*
*
* false || true || false || false = true
*
* (false && true) || false && (true && true) = false
*
*
*
*
* */





// let task = prompt('Введите номер задачи')
//
// if (task == 1) {
//     alert('Задача 1')
// } else if(task == 2) {
//     alert('Задача 2')
// } else if (task == 3) {
//     alert('Задача 3')
// } else if (task == 4) {
//     alert('Задача 4')
// } else {
//     alert('Задачи с введенным номером нет')
// }
//
//
// if (task == 1) {
//     alert('Задача 1')
// }
// if (task == 2) {
//     alert('Задача 2')
// }
// if (task == 3) {
//     alert('Задача 3')
// }
// if (task == 4) {
//     alert('Задача 4')
// } else {
//     alert('Задачи с введенным номером нет')
// }


let graphic = prompt("Номер графика?");
let x = prompt("Координата x");
let y = prompt("Координата y");

if (graphic == 1) {
    if ( x <= -2 && y >= 1 ) {
        alert('Попал!')
    } else {
        alert('Не попал!')
    }
}
else if (graphic == 2) {
    if ( y >= -2 && y <= 1.5 ) {
        alert('Попал!')
    } else {
        alert('Не попал!')
    }
}
else if (graphic == 3) {
    if ( x >= 1 && x <= 2 && y <= 4 ) {
        alert('Попал!')
    } else {
        alert('Не попал!')
    }
}
else if (graphic == 4) {
    if ( y >= 2 && y <= 4 && x >= 1 ) {
        alert('Попал!')
    } else {
        alert('Не попал!')
    }
}
else if (graphic == 5) {
    if ( ( x >= 2 && y >= 0 ) || ( x >= 1 && y <= -1 ) ) {
        alert('Попал!')
    } else {
        alert('Не попал!')
    }
}
else if (graphic == 6) {
    if ( ( x >= 2 && y >= 1 ) || ( x >= 2 && y <= -1.5 ) ) {
        alert('Попал!')
    } else {
        alert('Не попал!')
    }
}
else if (graphic == 7) {
    if ( ( x >= 1 && x <= 3 ) && ( y <= -1 && y >= -2 ) ) {
        alert('Попал!')
    } else {
        alert('Не попал!')
    }
}
else if (graphic == 8) {
    if ( ( x >= 2 ) || ( y >= 0.5 && y <= 1.5 ) ) {
        alert('Попал!')
    } else {
        alert('Не попал!')
    }
} else {
    alert('График не найден')
}