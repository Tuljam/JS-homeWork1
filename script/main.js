'use strict'

// Создайте переменные, затем сложите их и выведите результат в консоль разработчика.
    
    let x = 20;
    let y = 58;
    let z = 42;
    let summ = x + y + z;
    console. log(summ);

    
    // let x = 20;
    // let y = 58;
    // let z = 42;
    // console. log(x + y + z);

//     Создайте переменные:

//     - количество секунд в минуте
//     - количество минут в часу
//     - количество часов в сутках
//     - количество суток в году
    
// Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`**

let secInMinut = 60;
let minInHour = 60;
let hoursInDay = 24;
let dayInYear = 365;
let age = 45;

let myAgeInSeconds = age * dayInYear * hoursInDay * minInHour * secInMinut ;
console. log(myAgeInSeconds);

    // alert (`Мой возраст в секундах равен ${myAgeInSeconds}`);





// #### Task 3 💻
// Создайте две переменные. Поместите в них переменную **`count`** и превратите в строку, а **`userName`** наоборот в число. Попробуйте реализовать задачу двумя разными способами.
// ```javascript
    let count = 42;
    let count1 = '42';
    let userNameK = 52;
    let userNameL = '63';

    console. log (count);
    console. log (userNameK);
    console. log (+count);
    console. log (parseInt(count1));
    console. log (count.toString());
    console. log (Number(userNameL));
    console.log (String(count));
    console.log (`${userNameK}`);


// ```


// #### Task 4 💻
// Имеется три переменные:

// ```javascript
  let a = 1;
  let b = 2;
  let c = "белых медведей";
  console. log(''+a + b + ' '+c);


// ```

// Сложите переменные так, чтобы в результате получилось выражение: **`12 белых медведей`** и результат выведите в консоль.

// #### Task 5 💻

// Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную **`lengthWords`** и посчитайте в ней длинну всех слов из списка:

//     - доступ 
//     - морпех
//     - наледь
//     - попрек
//     - рубило

let itemOne = 'доступ';
let itemTwo = 'морпех';
let itemTree = 'наледь';
let itemFoure = 'попрек';
let itemFive = 'рубило';
let lengthWords = itemOne + itemTwo+ itemTree+ itemFoure + itemFive;
console.log(lengthWords.length);
// alert (`Длинна слов в предложении ${lengthWords.length}`);




// #### Task 6 💻
    
// Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:    

//     `Variable: %variable name% have type: %type variable%`

let variableA = 'some string';
let variableAType= `type variable`;
console. log(`Variable: ${variableA} have type: ${variableAType}`);



// #### Task 7 💻

// Запросить у пользователя имя и возраст и вывести их в консоль.

// let name = prompt(`What is your name?`);
// let age =prompt(`What is your age?`);
// console. log(`Your name is ${name}. Your age is ${age}`);


// ### ADVANCED level

// #### Task 1 👨‍🏫 

// Поменяйте значение переменных местами не создавая дополнительной переменной:

// ```javascript
    let h = 4;
    let f = 3;
    console.log(h,f);
    h = (f+h)-(f=h);
    console.log(h,f);


    


// ```

// #### Task 2 👨‍🏫 

// В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!

// ```javascript
    let codeWord1 = "обернись";
    let codeWord2 = "неужели";
    let codeWord3 = "огурцы";
    let codeWord4 = "липкие";
    let codeWord5 = "?!";

    let cipher = (`${codeWord1[1]},${codeWord2[1]},${codeWord3[1]},${codeWord4[1]},${codeWord5[1]}`);
   alert(`${codeWord1[1]},${codeWord2[1]},${codeWord3[1]},${codeWord4[1]},${codeWord5[1]}`);
console. log(cipher);

// ```

// Создайте переменную **`cipher`** и поместите туда необходимые символы


