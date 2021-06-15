
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
 // let block = document.querySelector('.block')
 //
 // let btnRed = document.querySelector('.btn-red')
 // let btnYellow = document.querySelector('.btn-yellow')
 // let btnPink = document.querySelector('.btn-pink')
 //
 // let btnBig = document.querySelector('.btn-big')
 // let btnSmall = document.querySelector('.btn-small')
 //
 // btnRed.addEventListener('click', () => {
 //    block.style.background = 'red'
 // })
 //
 // btnYellow.addEventListener('click', () => {
 //    block.style.background = 'yellow'
 // })
 //
 // btnPink.addEventListener('click', () => {
 //     block.style.background = 'pink'
 // })
 //
 // btnBig.addEventListener('click', () => {
 //     block.style.width = '1500px'
 //     block.style.height = '5000px'
 // })
 //
 // btnSmall.addEventListener('click', () => {
 //    block.style.width = '1px'
 //    block.style.height = '1px'
 // })


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


// let graphic = prompt("Номер графика?");
// let x = prompt("Координата x");
// let y = prompt("Координата y");
//
// if (graphic == 1) {
//     if ( x <= -2 && y >= 1 ) {
//         alert('Попал!')
//     } else {
//         alert('Не попал!')
//     }
// }
// else if (graphic == 2) {
//     if ( y >= -2 && y <= 1.5 ) {
//         alert('Попал!')
//     } else {
//         alert('Не попал!')
//     }
// }
// else if (graphic == 3) {
//     if ( x >= 1 && x <= 2 && y <= 4 ) {
//         alert('Попал!')
//     } else {
//         alert('Не попал!')
//     }
// }
// else if (graphic == 4) {
//     if ( y >= 2 && y <= 4 && x >= 1 ) {
//         alert('Попал!')
//     } else {
//         alert('Не попал!')
//     }
// }
// else if (graphic == 5) {
//     if ( ( x >= 2 && y >= 0 ) || ( x >= 1 && y <= -1 ) ) {
//         alert('Попал!')
//     } else {
//         alert('Не попал!')
//     }
// }
// else if (graphic == 6) {
//     if ( ( x >= 2 && y >= 1 ) || ( x >= 2 && y <= -1.5 ) ) {
//         alert('Попал!')
//     } else {
//         alert('Не попал!')
//     }
// }
// else if (graphic == 7) {
//     if ( ( x >= 1 && x <= 3 ) && ( y <= -1 && y >= -2 ) ) {
//         alert('Попал!')
//     } else {
//         alert('Не попал!')
//     }
// }
// else if (graphic == 8) {
//     if ( ( x >= 2 ) || ( y >= 0.5 && y <= 1.5 ) ) {
//         alert('Попал!')
//     } else {
//         alert('Не попал!')
//     }
// } else {
//     alert('График не найден')
// }


// let g = prompt('')
//
// if (g == 1) {
//     // 1
// } else if (g == 2) {
//     // 2
// } else if (g == 3) {
//     // 3
// } else {
//     // error
// }
//
// switch (g) {
//     case 1:
//         // 1
//         break
//     case 2:
//         // 2
//        break
//     case 3:
//         // 3
//         break
//     default:
//         // error
//         break
// }






//с этой задачи (внизу) переписать все, только с циклом for


// let i = 1
// while (i <= 10) {
//     console.log(i)
//     i++ // инкрементация
// }
//
// // Итерация


// let i = 20
// while (i <= 40) {
//     if (i % 2 == 0) {
//      console.log(i)
//     }
//
//     i++ // инкрементация
// }

// let i = 20
// while (i <= 40) {
//     console.log(i)
//
//     i += 2
// }

// let i = 1
// while (i <= 100) {
//     if (i % 2 == 0) {
//         console.log(i + " - это чётное число")
//     } else {
//         console.log(i + " - это нечётное число")
//     }
//
//     i++ // инкрементация
// }

// let i = 100
// while (i >= 1) {
//     if (i % 2 == 0) {
//         console.log(i + " - это чётное число")
//     } else {
//         console.log(i + " - это нечётное число")
//     }
//
//     i-- // декрементация
// }

// let i = 1
// let a = 0
// while (i <= 1000) {
//     if (i % 2 == 0) {
//         a += i
//     }
//
//     i++ // инкрементация
// }
//
// console.log(a)


// let i = 1
// while (i <= 10) {
//     console.log(i)
//     i++ // инкрементация
// }
//
// // Итерация

// и до этой (вверху)

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// ещё почитать и понять цикл do {} while()

/*
*
*
*
*
* Java - Oracle
* Python
*
*
*
* C++ / C
* C#  - Microsoft
* SQL
* Kotlin
* Swift
*
* PHP
*
*
* 1C
*
*
* Basic
* Pascal Delphi
*
*
* Game Dev - С++, C# (SQL)
* Mobile (IOS - Apple, Android) - Java, Kotlin, Swift (SQL)
* Desktop (Windows MacOS Linux) - 1C Java C# C++ Python (SQL)
* Web - HTML CSS JavaScript PHP (Python Java C# - шарп) (SQL)
*
* */

// JS
//console.log('Hello world')

// PHP
// echo 'Hello world';

// Python
// print('Hello world')

// Java
// import System;
//
// public class Program {
//     public static void Main(int[] *av, int ac) {
//         System.out.println("Hello world");
//     }
// }

// C#
// import Microsoft.System;
// public class Program {
//     public static void Main() {
//         Console.Write("Hello world");
//     }
// }


// C++
// import System.IO;
//
// using namespace std;
//
// int main(int *av[], int ac) {
//     std::cout << "Hello world";
//     return 0;
// }





// ДОМАШКА (13.06.2021)

// №1 (переписать задачи):

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

for (let i = 20; i <= 40; i++) {
    console.log(i)
}

for (let i = 1; i <= 100; i++) {
     if (i % 2 == 0) {
        console.log(i + " - это чётное число")
     } else {
        console.log(i + " - это нечётное число")
     }
}

for (let i = 100; i >= 1; i--) {
     if (i % 2 == 0) {
        console.log(i + " - это чётное число")
     } else {
        console.log(i + " - это нечётное число")
     }
}

for (let a = 0, let i = 1; i <= 1000; i++) {
     if (i % 2 == 0) {
        console.log(a += i)
     }
}
console.log(a)

for (let i = 1; i <= 10; i++) {
        console.log(i)
}

// №2 (интервал значений):

/*
* Спросить у пользователя интервал значений
* После вывести
*  - сумму всех значений в интервале
*  - сумму всех чётных в интервале
*  - сумму всех нечётных в интервале
*  - произведение чётных в интервале
*  - произведение нечётных в интервале
* (в alert)
* */

let one = prompt("Числа от...");
let two = prompt("до ...");
let summaAll = 0;
let summaChet = 0;
let summaNechet = 0;
let proizvedenieChet = 1;
let proizvedenieNechet = 1;
if (one <= two) {
    while (one <= two) {
        summaAll += one*1

        if (one % 2 == 0) {
            summaChet += one*1
            proizvedenieChet *= one*1
        }
        else {
            summaNechet += one*1
            proizvedenieNechet *= one*1
        }

        one++
    }

    alert (`
        Сумма всех значений в интервале - ${summaAll}
        Сумма всех чётных значений в интервале - ${summaChet}
        Сумма всех нечётных значений в интервале - ${summaNechet}
        Произведение всех чётных значений в интервале - ${proizvedenieChet}
        Произведение всех нечётных значений в интервале - ${proizvedenieNechet}
        `)
} else {
    alert("Ошибка. Первое число должно быть меньше второго, попробуйте ещё раз.")
}

// №3 (таблица умножения):

/*
* Вывести таблицу умножения
* 2 - 100
*
* 2 * 1 = 2
* 2 * 2 = 4
* ...
* 2 * 10 = 20
* ...
* 100 * 10 = 1000
*
* (вывести в консоле)
* */

for (let chart = "", number = 2; number <= 100; number++) {
    chart = `
    
        ${number} * 1 = ${number}
        ${number} * 2 = ${number * 2}
        ${number} * 3 = ${number * 3}
        ${number} * 4 = ${number * 4}
        ${number} * 5 = ${number * 5}
        ${number} * 6 = ${number * 6}
        ${number} * 7 = ${number * 7}
        ${number} * 8 = ${number * 8}
        ${number} * 9 = ${number * 9}
        ${number} * 10 = ${number * 10}
        
    `
    console.log (chart)
}

// №4 (цикл do...while):

/*Тут я всё поняла. Do...while - отличается от просто while тем, что сначала выполняется всё, что в do,
а потом уже проверяются условия. Таким образом, даже если условие будет ложно, цикл do...while всё равно сработает,
поскольку он сначала делает, а потом думает. Прямо как я.
*/

//Домашка сделана!