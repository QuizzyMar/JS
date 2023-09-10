// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б  ( помножити два числа, повернути return )
let rectangle = (a,b) => a*b;
console.log(rectangle(10,20));
console.log(rectangle(4,8));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (r)  =>                         // число РІ = 3.14 або Math.PI
   3.14*r*r;                          // квардрат r*r (множимо один раз)

console.log(circle(r=12));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder= (h,r) =>(2*Math.PI*r*r) + (2*Math.PI*r*h) ;

console.log(circle(r=6, h=12));

// - створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false}]
let looper=(array) =>{
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}
looper(users);

let M=(array) =>{
    for (let arrayElement of array) {
        console.log(arrayElement)
    }
}
M([1, 5, `bla`, true, 30]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let T=(text) =>{
    document.write(`<p>${text}</p>`);
}
T(text=`bla bla bla`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let U=(text)=> {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`)
}
U(text=`one two three`)

let U1=(text)=> {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++)
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`)
}
U1(text=`one two three`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let UL=(text, number)=> {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++)
        document.write(`<li>${text}</li>`);
    document.write(`</ul>`)
}
UL(text=`four five`, number=2);
UL(text=`four five`, number=4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let element=(arr)=> {
    document.write(`<ul>`)
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}
element(arr=[`hello`, 29, true, false, 17]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let field=(arr)=> {
    for (let arrElement of arr) {
        document.write(`<div>${arrElement}</div>`);
    }
}
field(arr=[id=`qwe`,name=`Mary`,age=30]);


let users2 = [
    {name: 'vasya', age: 31, id:3},
    {name: 'petya', age: 30, id:5},
    {name: 'kolya', age: 29, id:8},
    {name: 'olya', age: 28, id:2} ]
let F=(arr)=> {
    for (let arrElement of arr) {
        document.write(`
         <div>
         <p>name: ${arrElement.name}</p>
         <p>age: ${arrElement.age}</p>
         <p>id: ${arrElement.id}</p>
         </div>`);
    }
}
F(users2);

// - створити функцію яка повертає найменьше число з масиву
let minNumber =(arrOfNums)=> {
    let min = arrOfNums[0];
    for (let i = 1; i < arrOfNums.length; i++) {
        if (arrOfNums[i] < min) {
            min = arrOfNums[i];
        }
    }
    return min;
}
console.log( `minNumber:`, minNumber([1,5,7,45,-4,-3,-24])) ;

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let sum= (arrOfNums)=> {
    let result=0;
    for (let i = 0; i < arrOfNums.length; i++) {
        result=result+arrOfNums[i];
    }
    return result;
}
console.log( `sum:`, sum([1,2,10])) ;

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap=(arr,index1,index2)=> {
    let numIndex1=arr[index1];
    let numIndex2=arr[index2];

    arr[index1]=numIndex2;
    arr[index2]=numIndex1;

    return arr;
}

console.log(swap([11,22,33,44],0,1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange=(sum, currencies, resultCurrency )=> {
    for (let cur of currencies) {
        if (cur.currency===resultCurrency){
            return sum/cur.value
        }
    }
}

let result = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');
console.log(`result :` , result);