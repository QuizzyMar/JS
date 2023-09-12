// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1='hello world';
console.log(str1.length);

let str2='lorem ipsum';
console.log(str2.length);

let str3='javascript is cool';
console.log(str3.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str4='hello world';
let case1=(str4.toUpperCase());
console.log(case1);

let str5='lorem ipsum';
let case2=(str5.toUpperCase());
console.log(case2);

let str6='javascript is cool';
let case3=(str6.toUpperCase());
console.log(case3);

let arr=['hello world', 'lorem ipsum', 'javascript is cool'];
let result =arr .map((str)=> str.toUpperCase() );
console.log(result);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str7='hello world';
let case4=(str7.toLowerCase());
console.log(case4);

let str8='lorem ipsum';
let case5=(str8.toLowerCase());
console.log(case5);

let str9='javascript is cool';
let case6=(str9.toLowerCase());
console.log(case6);

let arr1=['hello world', 'lorem ipsum', 'javascript is cool'];
let result1 =arr1 .map((str)=> str.toLowerCase() );
console.log(result1);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let strVer1=str.replaceAll(' ');
// console.log(strVer1);
let str = ' dirty string   ';
console.log(str.trim());
let result2=str.split(' ').filter((c)=>c.length).join(' ');
console.log(result2);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str10 = 'Ревуть воли як ясла повні';
let stringToarray = (str)=>str.split(' ');
console.log(stringToarray(str10));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі
// об'єкти в масиві на стрінгові.
let arrOfNums= [10,8,-7,55,987,-1011,0,1050,0];
let result3=arrOfNums.map((num) =>num.toString());
console.log(result3);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від
// більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
    let sortNums=(nums, direction)=>{
        switch (direction) {
            case'ascending':
                return nums.sort((a,b) => a-b)
            case 'descending':
                return nums.sort((a,b) => b-a)
        }
}
console.log(sortNums(nums,'ascending')); // [3,11,21]
console.log(sortNums(nums,'descending')); // [21,11,3]

// ==========================
// - є масив
// -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((a,b)=> b.monthDuration-a.monthDuration);
console.log(coursesAndDurationArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredArr=coursesAndDurationArray.filter((c)=>c.monthDuration>5)
console.log(filteredArr);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mappedArr= coursesAndDurationArray.map((value, index)=>{
    return{
        id:index +1,
        title: value.title,
        monthDuration: value.monthDuration,
    }
});
console.log(mappedArr);

// =========================

//     описати колоду карт (від 6 до туза без джокерів)
let cards=[
    {cardSuit:'space', value:'6', color:'black'},
    {cardSuit:'space', value:'7', color:'black'},
    {cardSuit:'space', value:'8', color:'black'},
    {cardSuit:'space', value:'9', color:'black'},
    {cardSuit:'space', value:'10', color:'black'},
    {cardSuit:'space', value:'ace', color:'black'},
    {cardSuit:'space', value:'jack', color:'black'},
    {cardSuit:'space', value:'queen', color:'black'},
    {cardSuit:'space', value:'king', color:'black'},
    {cardSuit:'clubs', value:'6', color:'black'},
    {cardSuit:'clubs', value:'7', color:'black'},
    {cardSuit:'clubs', value:'8', color:'black'},
    {cardSuit:'clubs', value:'9', color:'black'},
    {cardSuit:'clubs', value:'10', color:'black'},
    {cardSuit:'clubs', value:'ace', color:'black'},
    {cardSuit:'clubs', value:'jack', color:'black'},
    {cardSuit:'clubs', value:'queen', color:'black'},
    {cardSuit:'clubs', value:'king', color:'black'},
    {cardSuit:'heart', value:'6', color:'red'},
    {cardSuit:'heart', value:'7', color:'red'},
    {cardSuit:'heart', value:'8', color:'red'},
    {cardSuit:'heart', value:'9', color:'red'},
    {cardSuit:'heart', value:'10', color:'red'},
    {cardSuit:'heart', value:'ace', color:'red'},
    {cardSuit:'heart', value:'jack', color:'red'},
    {cardSuit:'heart', value:'queen', color:'red'},
    {cardSuit:'heart', value:'king', color:'red'},
    {cardSuit:'diamond', value:'6', color:'red'},
    {cardSuit:'diamond', value:'7', color:'red'},
    {cardSuit:'diamond', value:'8', color:'red'},
    {cardSuit:'diamond', value:'9', color:'red'},
    {cardSuit:'diamond', value:'10', color:'red'},
    {cardSuit:'diamond', value:'ace', color:'red'},
    {cardSuit:'diamond', value:'jack', color:'red'},
    {cardSuit:'diamond', value:'queen', color:'red'},
    {cardSuit:'diamond', value:'king', color:'red'},
]

// - знайти піковий туз
let ace=cards.find((card)=>card.value==='ace'&& card.cardSuit==='spade');
console.log(ace);
// - всі шістки
let s6=cards.filter((card)=>card.value==='6');
console.log(s6);
// - всі червоні карти
let RedCars=cards.filter((card)=>card.color==='red');
console.log(RedCars);

// - всі буби
let diamonds=cards.filter((card)=>card.cardSuit==='diamond');
console.log(diamonds);
// - всі трефи від 9 та більше
let eee=cards.filter((card)=>card.cardSuit==='clubs' && ['9','10','ace','jack','queen','king'].includes(card.value));
console.log(eee);

   let cardSuit= ['spade','diamond','heart','clubs'];
     let value=['6','7','8','9','10', 'ace','jack','queen','king','joker'];
//     color:'', // 'red','black'
//
// =========================
//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let cards4=cards.reduce((acc,cur)=> {
    switch (cur.cardSuit) {
        case 'spade':
            acc.spades.push(cur);
            break;
        case 'clubs':
            acc.clubs.push(cur);
            break;
        case 'heart':
            acc.heart.push(cur);
            break;
        case 'diamonds':
            acc.heart.push(cur);
            break;
    }
    return acc;
},{spade:[], clubs:[],heart:[],diamond:[]});


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass

console.log(coursesArray.filter((c)=>c.modules.includes('sass')));

// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter((c)=>c.modules.includes('docker')));