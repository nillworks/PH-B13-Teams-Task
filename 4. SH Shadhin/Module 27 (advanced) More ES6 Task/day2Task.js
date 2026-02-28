/*
? Qs: 1
Primitive এবং Non-Primitive data type আলাদা করে চিহ্নিত করো।

const a = 10;
const b = "Hello";
const c = true;
const d = null;
const e = undefined;
const f = [1, 2, 3];
const g = { name: "Karim" };

 কোনগুলো primitive?
 কোনগুলো non-primitive?
*/
// Ans:
// Primitive = 1, 2, 3, 4, 5;
// Non Primitive = 6, 7;
/*
? Qs: 2
নিচের কোডের output কী হবে এবং কেন হবে?

let x;
console.log(x);

 undefined কেন আসে explain করো।
*/
// Ans:
// ভ্যারিয়েবলে কোনো মান এসাইন করা হয় নাই।

/*
? Qs: 3
নিচের মানগুলো থেকে কোনগুলো truthy আর কোনগুলো falsy?

0
1
""
"Hello"
null
undefined
[]
{}
false

 আলাদা করে লিখো।
*/

// Ans:
// 0 = falsy
// 1 = truthy
// "" = falsy
// "Hello"
// null = falsy
// undefined = falsy
// [] = truthy
// {} = truthy
// false = falsy
/*
? Qs: 4
নিচের কোডের output কী হবে?

console.log(5 == "5");
console.log(5 === "5");
console.log(false == 0);
console.log(false === 0);

 implicit conversion explain করো।
*/

// Ans:
// 1. true
// 2. false
// 3. true
// 4. false
/*
? Qs: 5
নিচের কোডে error হবে কিনা? হলে কেন?

{
  let a = 10;
}
console.log(a);

 block scope explain করো।
*/

// Ans:
// Error হবে কারন ব্লক স্কোপের বাইরে ভ্যালুকে পাওয়ার চেষ্টা করা হচ্ছে।
// ব্লক স্কোপের বাইরে ভ্যালু পাওয়া সম্ভব না।
/*
? Qs: 6
Closure কীভাবে কাজ করে নিচের উদাহরণ দিয়ে explain করো।

function counter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  }
}

const result = counter();
result();
result();

 Output কী হবে? কেন?
*/
// Ans:
// 1. 1
// 2. 2
/*
? Qs: 7
Callback function ব্যবহার করে এমন একটি function বানাও যেখানে একটি function আরেকটি function কে parameter হিসেবে নেয়।

 Example: greet("Rahim", callbackFunction)
*/

// Ans:

/*
? Qs: 8
Pass by value এবং pass by reference নিচের উদাহরণ দিয়ে explain করো।

let num = 10;
function changeValue(x) {
  x = 20;
}
changeValue(num);
console.log(num);

এবং

let obj = { name: "Rahim" };
function changeName(o) {
  o.name = "Karim";
}
changeName(obj);
console.log(obj.name);

 দুইটার output explain করো।
*/

// Ans:
//First er ta primitive data type = tai pass by value;
//Second ta Non Primitive data type = tai pass by reference
/*
? Qs: 9
map ব্যবহার করে নিচের array থেকে সব সংখ্যাকে double করো।

const numbers = [2, 4, 6, 8];

 Output হবে: [4, 8, 12, 16]
*/

// Ans:
// const numbers = [2, 4, 6, 8];
// const double = numbers.map(num => num * 2)
// console.log(double)
/*
? Qs: 10
filter, find এবং reduce ব্যবহার করে নিচের কাজগুলো করো।

const products = [
  { name: "Mobile", price: 20000 },
  { name: "Laptop", price: 50000 },
  { name: "Watch", price: 3000 }
];

 ১. ১০,০০০ টাকার বেশি product filter করো
 ২. price 3000 এমন product খুঁজে বের করো
 ৩. সব product এর total price বের করো
*/

// Ans:
// const products = [
//   { name: 'Mobile', price: 20000 },
//   { name: 'Laptop', price: 50000 },
//   { name: 'Watch', price: 3000 },
// ];
// const expensiveProducts = products.filter(product => product.price > 10000);
// console.log(expensiveProducts);

// const price3K = products.find(product => product.price === 3000);
// console.log(price3K);

// const totalPrice = products.reduce((total, product) => {
//   return total + product.price;
// }, 0);

// console.log(totalPrice);

