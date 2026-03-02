/* =========================================
        🚀 DAY 4 — JS Freestyle Problems
        (Method free — map/filter/reduce তুমি ঠিক করবে)
========================================= */

/* 
? Problem 1
একটা array আছে, সব element cube করো। 
const numbers = [2, 3, 4, 5];
Expected Output: [8, 27, 64, 125]
*/
//* Ans:
const numbers = [2, 3, 4, 5];
let cubeElementArr = [];
for (let i = 0; i < numbers.length; i++) {
  cubeElementArr.push(numbers[i] ** 3);
}
console.log(cubeElementArr);

/* 
? Problem 2
50 এর কম mark থাকা students বের করো। 
const students = [
  { name: "Ali", mark: 45 },
  { name: "Babu", mark: 75 },
  { name: "Chotu", mark: 30 },
  { name: "Dipu", mark: 90 }
];
Expected Output: [{ name: "Ali", mark: 45 }, { name: "Chotu", mark: 30 }]
*/
//* Ans:

const students = [
  { name: 'Ali', mark: 45 },
  { name: 'Babu', mark: 75 },
  { name: 'Chotu', mark: 30 },
  { name: 'Dipu', mark: 90 },
];

const lowMarkStudents = students.filter(stu => stu.mark < 50);
console.log(lowMarkStudents);

/* 
? Problem 3
সব numbers যোগ করো। 
const nums = [10, 20, 30, 40];
Expected Output: 100
*/
//* Ans:

const nums = [10, 20, 30, 40];
const sumNumber = nums.reduce((acc, num) => acc + num, 0);
console.log(sumNumber);
/* 
? Problem 4
প্রথম student যার mark > 80 খুঁজে বের করো। 
const students = [
  { name: "Ali", mark: 45 },
  { name: "Babu", mark: 75 },
  { name: "Chotu", mark: 85 },
  { name: "Dipu", mark: 90 }
];
Expected Output: { name: "Chotu", mark: 85 }
*/
//* Ans:
const students4 = [
  { name: 'Ali', mark: 45 },
  { name: 'Babu', mark: 75 },
  { name: 'Chotu', mark: 85 },
  { name: 'Dipu', mark: 90 },
];

const firstStudentMark = students4.find(item => item.mark > 80);
console.log(firstStudentMark);

/* 
Problem 5
index সহ fruits print করো। 
const fruits = ["Mango", "Banana", "Apple", "Orange"];
Expected Output:
0 - Mango
1 - Banana
2 - Apple
3 - Orange
*/
//* Ans:
const fruits = ['Mango', 'Banana', 'Apple', 'Orange'];
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i} - ${fruits[i]}`);
}

/* 
?Problem 6
mark > 50 student এর শুধু নাম বের করো। 
const students = [
  { name: "Ali", mark: 45 },
  { name: "Babu", mark: 75 },
  { name: "Chotu", mark: 85 },
  { name: "Dipu", mark: 30 }
];
Expected Output: ["Babu", "Chotu"]
*/
//* Ans:

const students6 = [
  { name: 'Ali', mark: 45 },
  { name: 'Babu', mark: 75 },
  { name: 'Chotu', mark: 85 },
  { name: 'Dipu', mark: 30 },
];

let studentArr = [];
for (let i = 0; i < students6.length; i++) {
  if (students6[i].mark > 50) {
    studentArr.push(students6[i].name);
  }
}
console.log(studentArr);

/* 
?Problem 7
সব element multiply করো। 
const nums = [1, 2, 3, 4, 5];
Expected Output: 120
*/
//* Ans:

const nums7 = [1, 2, 3, 4, 5];
let allElementMultiply = 1;
for (const number of nums7) {
  allElementMultiply = allElementMultiply * number;
}
console.log(allElementMultiply);

/* 
? 8
Object থেকে name, email, city বের করো। 
const user = {
  id: 101,
  name: "Rahim",
  email: "rahim@gmail.com",
  address: { city: "Dhaka", country: "Bangladesh" }
};
Expected Output: Rahim rahim@gmail.com Dhaka
*/
//* Ans:

const user = {
  id: 101,
  name: 'Rahim',
  email: 'rahim@gmail.com',
  address: { city: 'Dhaka', country: 'Bangladesh' },
};

const {
  name,
  email,
  address: { city },
} = user;
console.log(name, email, city);

/* 
?Problem 9
Variable hoisting output কি হবে লিখে দেখো। 
console.log(aVar);
var aVar = 50;

console.log(bVar);
let bVar = 30;
Expected Output: 
*/
//* Ans: Output: 1. undefined 2 .ReferenceError

/* 
?Problem 10
Closure counter তৈরি করো, প্রত্যেকবার call করলে +1 হবে। 
function counter() {
  let count = 0;
  return function() {
    // তোমার code এখানে
  }
}
const myCounter = counter();
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3
*/
//* Ans:

function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3

/* 
? Problem 11
even numbers এর square যোগ করো। 
const numbers = [1, 2, 3, 4, 5, 6];
Expected Output: 56
*/
//* Ans:
const numbers10 = [1, 2, 3, 4, 5, 6];
const squareNumberSum = numbers10
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((acc, item) => acc + item, 0);

console.log(squareNumberSum);

/* 
? Problem 12
price > 500 object এর total quantity বের করো। 
const cart = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Pant", price: 800, quantity: 3 },
  { name: "Shoes", price: 1500, quantity: 1 },
  { name: "Cap", price: 300, quantity: 5 }
];
Expected Output: 4
*/
//* Ans:

const cart = [
  { name: 'Shirt', price: 500, quantity: 2 },
  { name: 'Pant', price: 800, quantity: 3 },
  { name: 'Shoes', price: 1500, quantity: 1 },
  { name: 'Cap', price: 300, quantity: 5 },
];

const totalQuantity = cart
  .filter(item => item.price > 500)
  .reduce((acc, item) => acc + item.quantity, 0);

console.log(totalQuantity);
