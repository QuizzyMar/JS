let users=[
    {id:1,name:'Maryna', age:30},
    {id:2,name:'Alex', age:33},
    {id:3,name:'Maria', age:5},
    {id:4,name:'Dasha', age:3},
    {id:5,name:'Anna', age:42},
    {id:6,name:'Olga', age:35},
    {id:7,name:'Natasha', age:59},
    {id:8,name:'Irina', age:19},
    {id:9,name:'Oleg', age:34},
    {id:10,name:'Valera', age:68},
    {id:11,name:'Tania', age:14}
];


aaa(users);                                            // не важливо де стоїть виклик

//aaa(users);                                            теж працює! але якщо стоїть зверху- добавити змінну
                                                      // let aaa=function (array) працювати не буде
function  aaa(array) {
    if(array.length){
        for (let item of array) {
           console.log(item);
        }
    }
}


aaa(users);
function  aaa(array) {
    if(array.length){
        for (let item of array) {
            console.log(item);
        }
    }
}

const foo1 = (array)=> {                        // стрілочна функція => замість слова function
    if (array.length){
        for (const item of array) {
            console.log(item)
        }
    }
}
foo1([]);

let foo3=(num1, num2) =>{
    return num1+num2;
}
console.log(foo3(1,3));

let foo4=(num1, num2) =>num1+num2;                       //скоротити- забираємо{} і return(все одно працює)
console.log(foo3(1,2));

// функції в функції  сb це колбек!
const foo5 = (arr, cb)=> {
    const newArr=[];
    for (const user of arr) {
        if(cb(user)){
            newArr.push(user);
        }
    }
    return newArr;
}
const conditionFoo1 = (user) => {
    return user.age>30
}
const conditionFoo2 = (user) => {
    return user.name.length > 4
}
const result1=foo5(users,conditionFoo1)
console.log(result1);
const result2=foo5(users,conditionFoo2)
console.log(result2);

let  user = {
    id: 1,
    name: `max`,
    age: 31,
    sayHello: () => {
        console.log(`HELLO`)
    }
}
user.sayHello()


let  user1 = {
    id: 1,
    name: `max`,
    age: 31,
    sayHello: (name) => {
        console.log(`HELLO!! ${name}`)
    }
}
user1.sayHello('Alex');


let  user2 = {
    id: 1,
    name: `max`,
    age: 31,
    sayHello1: (name) => {
        console.log(`HELLO!! ${name}`)
    },
    sayHello2: function (name) {
        console.log(`HELLO!! ${name}`)
    }
}
user2.sayHello1('Alex');
user2.sayHello2('Maryna');

//THIS посилання саме на себе!
let  user3 = {
    id: 1,
    name: `max`,
    age: 31,
    sayHello: function (name){
        console.log(`HELLO!! ${name}, ${this.name}`)        //чере =>немає функції this!
    }
}
user3.sayHello('Alex');
