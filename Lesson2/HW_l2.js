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

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
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
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x=29;

if (x>0){
    console.log(true)
} else {
    console.log(false)
}
let a
