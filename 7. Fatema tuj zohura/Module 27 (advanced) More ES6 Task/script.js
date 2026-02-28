// Your Task

/* 
? Qs: 1
Primitive আর Non-Primitive data type এর পার্থক্য example সহ দেখাও।
Primitive value copy করলে original change হয় না কিন্তু object copy করলে কেন change হয় — কোড লিখে প্রমাণ করো।
*/
// Ans:

// Primitive

// TODO: Primitive dile tar value alada copy hoye jay  tai ak jaygai change korle original bodlai na. 

let x=10;
let y=x;
y = 40
// console.log(x);
// console.log(y);


// Non-Primitive

//TODO: Object dile akoi jinishe reference jay. tai ak jaygai change korle sob jaygai change dekhai 

let obj={name: 'fatema', age: 21, lastName: 'Zohura'}

let obj2=obj;
obj2.name= 'Tuj'

// console.log( obj )
// console.log( obj2 )

/* 
? Qs: 2
নিচের কোডের output কী হবে? ব্যাখ্যা করো।

let a;
let b = null;

console.log(a);
console.log(b);
console.log(a == b);
console.log(a === b);


*/
// Ans:





                  // TODO: ans 
/** 
 
  
 let a;
let b=null;

console.log(a);  //undefined  // jkhn kono value assign kora hoi na tkhn undefind dekhai

console.log(b);  //null      // value null dile seita null dekhai . null mane khali.issekrito vabe value set na kora.  

console.log(a==b); true    // eder moddhe akta undefind mane khali, r akta isse kore null deoya hoyece . jeheto 2 tai khali mane 2tai somai tai true  

console.log(a === b); false   // akta undefind r akta null(object) so eita false karon typeof match korce na 

*/



/* 
? Qs: 3
undefined কেন হয়? নিচের কোডের output বের করো।

function test(x) {
  console.log(x);
}

let result = test();
console.log(result);
*/
//TODO: Ans: undefind tkhn hoi jkhn value set kora hoi na 
 
// TODO: ekhane x er value set kora hoinai tai undefind 

function test(x) {
  // console.log(x);
}

let result = test();
// console.log(result);



/* 
? Qs: 4
Falsy value কয়টা? নিচের কোডের output কী হবে?

if (0) {
  console.log("True");
} else {
  console.log("False");
}

if (" ") {
  console.log("Hello");
}
*/
// Ans:



//TODO: Falsy value 7 ta 

//TODO: 0 , empty-string , null , undefined, NaN, false, BigInt zero(0n) 



if (0) {
  // console.log("True");
} else {
  // console.log("False");
}

if (" ") {
  // console.log("Hello");
}

// else {
//   console.log( 'bye' )
// }

//TODO: output = Hello     //karon string ta hosse true tai if declare hobe


/*
? Qs: 5
Empty array এবং empty object truthy নাকি falsy?
নিচের কোডের output explain করো।

if ([]) {
  console.log("Array is truthy");
}

if ({}) {
  console.log("Object is truthy");
}
*/
// Ans:

if ([]) {
  // console.log("Array is truthy");
}

//TODO: output : truthy



if ({}) {
  // console.log("Object is truthy");
}

//TODO: output : truthy

                                                     //TODO: kno


//TODO: khali object ba array truthy, karon eigulo “memory-te ase, mane JS mone kore value ase.

/* 
? Qs: 6
Double equal (==) এবং Triple equal (===) এর পার্থক্য প্রমাণ করো।

console.log(10 == "10");
console.log(10 === "10");
console.log(false == 0);
console.log(false === 0);
*/
// Ans:

// Double equal (==)   Type convert kore compare kore ,  value check + type convert
// Triple equal (===)  value check + type must match


/* 
? Qs: 7
Block scope এবং Global scope বুঝাও নিচের কোড দিয়ে।

let x = 5;  

{
  let x = 10;
  console.log(x);
}

console.log(x);
*/
// Ans:
{

let x = 5;   //jekono jayga theke access kora jabe. 


{
  let x = 10;   //block scope er vetorei shudhu access kora jabe . {} er vetorei valid, baire er kono effect nei
  //  console.log(x); 
}
   
// console.log(x);
  
}
/* 
? Qs: 8
Hoisting কী? নিচের কোডের output explain করো।


console.log(a);
var a = 20;
y
*/
// Ans:

//TODO: Hoisting = JS variable & function declaration-ke execution-er age mone rakha.


console.log(a);  //variable declare korar agei variable ke execute kora hosse 
var a=20;


//: js eitake jevabe dekhe  :

var a;
// console.log(a);
a=20;   // r tai output undefind ase


/* 
? Qs: 9
let এবং var এর hoisting behaviour এর পার্থক্য দেখাও।

console.log(b);
let b = 30;
*/
// Ans:


//TODO: var =
// 1/ declaration memory-te  upore chole jay
// 2/undefind dey


  
//TODO: let=
// 1/ declaration memory-te  upore chole jay
// 2/ error dey 



// console.log(b);
let b = 30;

/* 
? Qs: 10
নিচের object থেকে name, email এবং city আলাদা করে বের করো (destructuring ব্যবহার করে)।

const user = {
  id: 101,
  name: "Rahim",
  email: "rahim@gmail.com",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
}
*/
// Ans:
// {email, name, city}

const user = {
  id: 101,
  name: "Rahim",
  email: "rahim@gmail.com",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
}

const {name}=user
console.log(name)

const { email}=user
console.log( email)

const {city}=user.address
console.log(city)
