// let a1;
// a1 = 'hello Maryna';

let a1='hello Maryna'   //''-string, імя з лапками
console.log(a1);

let e1 = 123;      // number 123, без лапок!
console.log(e1);
e1=123;

const d1='bla';
console.log(d1);
// c1 = 1111;

var v1='blabla';
console.log(v1);


//string//
let c1='hey';
let c2="Maryna";
let c3=`!!!`;

let result= c1+' '+ c2 + ' '+ c3 + ' ';
console.log(result);
// let result=`${c1} ${c2} ${c3}`;  -`${}` скорочено для+
// console.log(result);


//number//
let n1=10;
let n2=20;
let nRes=n1+n2;   //- + * / %-модуль,вказує кратність
console.log(nRes);


//boolean//
//               ( > < >= <= == !=(не=) === !== ) true false
let b1=10;
let b2=20;
let bRes=b1<b2;
console.log(bRes);
 console.log(typeof bRes);  //typeof -функція для перевірки типу(string,number,boolean)
                            //змінні s-string, n-number, b-boolean
                            // number+string=string- пожерає, все що зєднується з string!
console.log(+'123');        // console.log(+'123'); - +'123' конвертація string в number! тільки числа!
console.log(+'xxx');         // NaN - помилка!



