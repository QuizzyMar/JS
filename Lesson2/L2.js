let books=[
    'romans', //0
    'action',  //1
    'triller'  //2
]
console.log(books);
console.log(books[0]); //romans
console.log(books.length);
console.log(books[books.length-1]);//triller

books[3]='poems' //3
console.log(books); //['romans', 'action', 'triller', 'poems']

books.push('crimanal'); //4
console.log(books); //['romans', 'action', 'triller', 'poems', 'crimanal']
//size5  index4
books[1]=null;
console.log(books);//['romans', null, 'triller', 'poems', 'crimanal']


let musicList=[
      //00     01    02       [3] 030   031    032                       (індекс []+індекс що всередені[])
    ['one', 'two', 'three',   [  'vb','bn','ghhhn']], //0
    //0(10)  1(11)   2 (12)
    ['four', 'five', 'six' ], //1
     //20    21      22
    ['qwe', 'asd', 'zxc']    //2
]
console.log(musicList);
console.log(musicList.length); //3
console.log(musicList[0] [1]); //two
console.log(musicList[0]); //  ['one', 'two', 'three', Array(3)]
console.log(musicList[0] [3]); // ['vb', 'bn', 'ghhhn']
console.log(musicList[0] [3] [2]); // ghhhn
//---------------------------------------------------------------------------------------------//

let user={
    id: 1,
    name: "Maryna",
    age: 30,
    status: true
};
console.log(user);        //{id: 1, name: 'Maryna', age: 30, status: true}
console.log(user.status); //true
console.log(user["age"]);  // 30

let users=[
    {id: 1, name: 'Maryna', age: 30, status: true },
    {id: 2, name: 'Alex', age: 33, status: true},
    {id: 3, name: 'Maria', age: 5, status: false},
    {id: 4, name: 'Daria', age: 3, status: false}
]
console.log(users);      //[{…}, {…}, {…}, {…}]
console.log(users[3]);   //{id: 4, name: 'Daria', age: 3, status: false}
console.log(users[3].age); //3


