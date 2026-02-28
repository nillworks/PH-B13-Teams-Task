// Your Task

/* 
? Qs: 1
Primitive আর Non-Primitive data type এর পার্থক্য example সহ দেখাও।
Primitive value copy করলে original change হয় না কিন্তু object copy করলে কেন change হয় — কোড লিখে প্রমাণ করো।
*/
// Ans:
// Primitive = Pass By value;
// Non Primitive = Pass by Reference;
// Non Primitive চেঞ্জ হয় কারন প্রতিবার আলাদা লোকেশন ক্রিয়েট হচ্ছে ডাটা কল করার ক্ষেত্রে।
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
// let a;
// let b = null;
// console.log(a); // undefined কারন কোনো ভ্যালু দেওয়া হয়নি।
// console.log(b); // null দেখাবে কারণ null স্টোর করা আছে ভ্যালু হিসেবে।
// console.log(a == b); // ট্রু দেখাবে কারন এইটা জাভাস্ক্রিপ্ট এর একটা স্পেশাল রুল।
// console.log(a === b); // false কারণ এইখানে ২ টার টাইপ আলাদা। নাল এর টাইপ হচ্ছে অবজেক্ট।
/* 
? Qs: 3
undefined কেন হয়? নিচের কোডের output বের করো।

function test(x) {
  console.log(x);
}

let result = test();
console.log(result);
*/
// // Ans:
// এইখানে ২ বার undefined আসবে । প্রথমে ফাংশনে প্যারামিটার হিসেবে কোনো কিছু না দেওয়ার কারনে আর পরের টায় ফাশনের ভিতরে কোনো কিছু রিটার্ন না করায়।
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
// 1. False কারন ০ হচ্ছে একটা ফলসি ভ্যালু।
// 2. Hello প্রিন্ট হবে কারন স্ট্রিং এর মাঝে ফাকা স্পেস আছে ।
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
// Ans: Truthy কারন এইগুলা আলাদা রেফারেন্স ক্রিয়েট করে।

/* 
? Qs: 6
Double equal (==) এবং Triple equal (===) এর পার্থক্য প্রমাণ করো।

console.log(10 == "10");
console.log(10 === "10");
console.log(false == 0);
console.log(false === 0);
*/
// Ans:
// console.log(10 == '10'); // ট্রু
// console.log(10 === '10'); // ফলস
// console.log(false == 0); // ট্রু
// console.log(false === 0); // ফলস
// (==) হচ্ছে একটা ডাটাকে কনভার্ট করে তারপর চেক করে। আর (===) হচ্ছে আগে ডাটা টাইপ চেক করে।
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
//  Ans:
// { let x = 10 } হচ্ছে ব্লক স্কোপ কারণ এইটা ব্র্যাকেট এর ভিতরে আছে। ব্র্যাকেট বাইরে এইটা এক্সেস করা যাবে না।
// let x = 5;  হচ্ছে গ্লোবাল স্কোপ।
/* 
? Qs: 8
Hoisting কী? নিচের কোডের output explain করো।

console.log(a);
var a = 20;
*/
// Ans:
// Hoisting হচ্ছে ভ্যারিয়েবল ডিক্লেয়ার করার আগে জাভাস্ক্রিপ্ট আগে থেকেই সেটা উপরে হোস্ট করে নেয়।কিন্তু ভ্যালু নেয় না যার কারনে undefined আসে।
/* 
? Qs: 9
let এবং var এর hoisting behaviour এর পার্থক্য দেখাও।

console.log(b);
let b = 30;
*/
// Ans:
// let হোস্টেড হয় মেমোরিতে। এটার একটা টেম্পোরাল ডেডজোন থাকে। এই জন্য ভ্যালু এসাইন হওয়ার আগেই এক্সেস করতে গেলে রেফারেন্স এরর দেয়।
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
// const user = {
//   id: 101,
//   name: 'Rahim',
//   email: 'rahim@gmail.com',
//   address: {
//     city: 'Dhaka',
//     country: 'Bangladesh',
//   },
// };
// const { name, email, address: { city } } = user;
// console.log(name,email,city)