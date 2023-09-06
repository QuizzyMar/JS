// let users1 = [
// {name: 'vasya', age: 31, status: false},
// {name: 'petya', age: 30, status: true},
// {name: 'kolya', age: 29, status: true},
// {name: 'olya', age: 28, status: false},
// {name: 'max', age: 30, status: true},
// {name: 'anya', age: 31, status: false},
// {name: 'oleg', age: 28, status: false},
// {name: 'andrey', age: 29, status: true},
// {name: 'masha', age: 30, status: true},
// {name: 'olya', age: 31, status: false},
// {name: 'max', age: 31, status: true}
// ];
// let users2=[
//     {name:'Maryna', username:'MaryBE',password:'qwe10'},
//     {name:'Alex', username:'coolAl',password:'asd5r'},
//     {name:'Maria', username:'MyPonny',password:'789lpo'},
//     {name:'Dasha', username:'Limbo',password:'zxc4bo'},
//     {name:'Anna', username:'Dybik',password:'tgb8rfd'},
//     {name:'Olga', username:'Urtaka',password:'35Urt'},
//     {name:'Natasha', username:'Bulava',password:'bhu59'},
//     {name:'Irina', username:'Mylia',password:'304ever'},
//     {name:'Oleg', username:'Levchek',password:'kym305k'},
//     {name:'Valera', username:'Kyrkyma',password:'cvb58ljb'}
// ]
// function looper(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// looper(users1);
// looper(users2);


// function oyy(a,b,c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// oyy(12, `ase`, true)


// function calc(a,b,c=100) {
//     console.log(a+b+c);
// }
// calc(10,20)

function foo2() {
    console.log(arguments)
    let arr=Array.from(arguments);
    let result=0;
    for (const numder of arr) {
        result=result+numder;{
            console.log(`result:`, result)
        }
    }
}
foo2(2,4,5,9,5,6,7)
foo2(5,4,2)