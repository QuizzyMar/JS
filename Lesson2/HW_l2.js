// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let products=[
    'milk',
    'butter',
    'eggs',
    'bread',
    'cheese',
    'fish',
    'meat',
    'cabbage',
    'tomato',
    'onion'
]
console.log(products[0]);
console.log(products[1]);
console.log(products[2]);
console.log(products[3]);
console.log(products[4]);
console.log(products[5]);
console.log(products[6]);
console.log(products[7]);
console.log(products[8]);
console.log(products[9]);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let myBook={
    title:'Little women',
    pageCount: 664,
    genre: 'drama'
}
let daughterBook={
    title:'Harry Potter and the Philosopher Stone',
    pageCount: 223,
    genre: 'fantasy novel'
}
let sisterBook={
    title:'The Green Mile',
    pageCount: 544,
    genre: 'thriller'
}

//- Створити 3 об'єкти які описують книги.
// Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let oneBook={
    title:'The Vanishing Half',
    pageCount: 352,
    genre:'historical fiction',
    authors: [{
        name:'Brit Bennett',
        age:33
    }
    ]
}
let twoBook={
    title:'The Book Thief',
    pageCount: 584,
    genre:'Bildungsroman',
    authors: [{
        name:'Markus Zusak',
        age:48
    }
    ]
}
let threeBook={
    title:'Beyond the wand',
    pageCount: 304,
    genre:'Аutobiography',
    authors: [{
        name:'Tom Felton',
        age:35
    }
    ]
}

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача
let user=[
    {name:'Maryna', username:'MaryBE',password:'qwe10'},
    {name:'Alex', username:'coolAl',password:'asd5r'},
    {name:'Maria', username:'MyPonny',password:'789lpo'},
    {name:'Dasha', username:'Limbo',password:'zxc4bo'},
    {name:'Anna', username:'Dybik',password:'tgb8rfd'},
    {name:'Olga', username:'Urtaka',password:'35Urt'},
    {name:'Natasha', username:'Bulava',password:'bhu59'},
    {name:'Irina', username:'Mylia',password:'304ever'},
    {name:'Oleg', username:'Levchek',password:'kym305k'},
    {name:'Valera', username:'Kyrkyma',password:'cvb58ljb'}
]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);
//-------------------------------------------------------------------------------------------------//
//  Логічні розгалуження:
//- Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю,виведіть 'Вірно',інакше виведіть 'Невірно'.

let x=29;
if ('x!==0'){
    console.log(true);
} else {
    console.log(false);
}


//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число (в першу, другу, третю или четверту частину години).

//let time=+prompt('what quarter?');
//if (time >= 0 && time <= 14){
    //console.log('oneQuarter');
//} else if (time>= 15 && time<= 30){
    //console.log('twoQuarter');
//} else if (time>= 31 && time<= 45){
    //console.log('threeQuarter');
//} else if (time>= 46 && time<= 59){
   // console.log('fourQuarter');
//} else {
    //console.log('!!!!!');
//}


//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).

//let day=+prompt('what decade?');
//if (day>=0&&day<=10){
    //console.log('oneDecade');
//} else if(day>=11&&day<=20){
    //console.log('twoDecade');
//} else if(day>=21&&day<=31){
    //console.log('threeDecade');
//} else {
    //console.log('!!!!!!!');
//}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

//let week=prompt('what is planned?')
//switch (week) {
    //case '1':
       // console.log('Monday');
       // break;

   // case '2':
      //  console.log('Tuesday');
      //  break;

   // case '3':
       // console.log('Wednesday');
       // break;

   // case '4':
       // console.log('Thursday');
      //  break;

   // case '5':
        //console.log('Friday');
       // break;

   // case '6':
       // console.log('Saturday');
       // break;

   // case '7':
       // console.log('Sunday');
        //break;

   // default:
       // console.log('!!!!!!!!!');
//}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let a=2;
let b=4;
if(a>b){
    console.log(a);
} if(a<b){
    console.log(b);
} else {
    console.log(a=b);
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення
// змінної х являється falsy (хибноподібні, тобто приводиться до false)

let X='hello';
let re
console.log()





//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
// кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
if(coursesAndDurationArray[0]){
    console.log('');
}
else if(coursesAndDurationArray[1]){
    console.log('');
}
else if(coursesAndDurationArray[2]){
    console.log('');
}
else if(coursesAndDurationArray[3]){
    console.log('');
}
else if(coursesAndDurationArray[4]){
    console.log('');
}
else if(coursesAndDurationArray[5]){
    console.log('');
}
else if([0],[1],[2],[3],[4],[5]>5){
    console.log('Super');
}
else {
    console.log('!!!!!!');
}
