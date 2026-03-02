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
const qube = numbers.map(q => q * q * q)
// console.log(qube)


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

const less50 = students.filter(mark => mark.mark < 50)
// console.log(less50)


/* 
? Problem 3
সব numbers যোগ করো। 
const nums = [10, 20, 30, 40];
Expected Output: 100
*/
//* Ans:
const nums = [10, 20, 30, 40];

  let result = 0;
nums.forEach(sum => {
  result = sum + result;
})
  // console.log(result);


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
const students2 = [
  { name: 'Ali', mark: 45 },
  { name: 'Babu', mark: 75 },
  { name: 'Chotu', mark: 85 },
  { name: 'Dipu', mark: 90 },
];

const more80 = students2.find(marks => marks.mark > 80)
// console.log(more80)



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
const fruit = fruits.forEach((f, i) => {
  // console.log(i,'-', f);
})


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
const students3 = [
  { name: 'Ali', mark: 45 },
  { name: 'Babu', mark: 75 },
  { name: 'Chotu', mark: 85 },
  { name: 'Dipu', mark: 30 },
];
const lessThan50 = students3.filter(s => s.mark > 50).map(s => s.name);
// console.log(lessThan50)



/* 
?Problem 7
সব element multiply করো। 
const nums = [1, 2, 3, 4, 5];
Expected Output: 120
*/
//* Ans:
const nums2 = [1, 2, 3, 4, 5];
  let total = 1;
const multiply = nums2.forEach(n => {
  total = (n * total)
})
// console.log(total);

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
const { name, email, address: { city } } = user;
// console.log(name,email,city)


/* 
?Problem 9
Variable hoisting output কি হবে লিখে দেখো। 
console.log(aVar);
var aVar = 50;

console.log(bVar);
let bVar = 30;
Expected Output: ? 
*/
//* Ans:
// console.log(aVar);// undefind
// var aVar = 50;

// console.log(bVar);// error cz of tdz
// let bVar = 30;
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
  return function() {
    count = count + 1;
    return count;
  }
}
const myCounter = counter();
// console.log(myCounter()); // 1
// console.log(myCounter()); // 2
// console.log(myCounter()); // 3


/* 
? Problem 11
even numbers এর square যোগ করো। 
const numbers = [1, 2, 3, 4, 5, 6];
Expected Output: 56
*/
//* Ans:
const numbers4 = [1, 2, 3, 4, 5, 6];
const evenOdd = numbers4.filter(n => n % 2 === 0).map(n => n * n);
const sum = evenOdd.reduce((total, current) => {
  return total + current
}, 0)
// console.log(sum);



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

const more500 = cart.filter(p => p.price > 500)
const totalQuantity = more500.reduce((t, curr)=>{
  return t + (curr.quantity)
},0)
// console.log(totalQuantity);