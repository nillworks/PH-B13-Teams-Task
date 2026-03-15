// Your Task

/* 
? Qs: 1
Primitive আর Non-Primitive data type এর পার্থক্য example সহ দেখাও।
Primitive value copy করলে original change হয় না কিন্তু object copy করলে কেন change হয় — কোড লিখে প্রমাণ করো।
*/
// Ans:

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

/* 
? Qs: 3
undefined কেন হয়? নিচের কোডের output বের করো।

function test(x) {
  console.log(x);
}

let result = test();
console.log(result);
*/
// Ans:

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

/* 
? Qs: 6
Double equal (==) এবং Triple equal (===) এর পার্থক্য প্রমাণ করো।

console.log(10 == "10");
console.log(10 === "10");
console.log(false == 0);
console.log(false === 0);
*/
// Ans:

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

/* 
? Qs: 8
Hoisting কী? নিচের কোডের output explain করো।

console.log(a);
var a = 20;
*/
// Ans:

/* 
? Qs: 9
let এবং var এর hoisting behaviour এর পার্থক্য দেখাও।

console.log(b);
let b = 30;
*/
// Ans:

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
