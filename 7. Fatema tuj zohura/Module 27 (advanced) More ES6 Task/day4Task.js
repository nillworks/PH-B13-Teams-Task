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

const numbers=[2, 3, 4, 5];
let result = numbers.map(number => number**3)
// console.log( result )


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
  { name: "Ali", mark: 45 },
  { name: "Babu", mark: 75 },
  { name: "Chotu", mark: 30 },
  { name: "Dipu", mark: 90 }
];

let findStudent=students.filter(student => student.mark<50)
// console.log( findStudent )

/* 
? Problem 3
সব numbers যোগ করো। 
const nums = [10, 20, 30, 40];
Expected Output: 100
*/
//* Ans:
const nums=[10, 20, 30, 40];

const plus=nums.reduce((total, num) => total + num, 0)
// console.log( plus )

/* 
? Problem 4
প্রথম student যার mark > 80 খুঁজে বের করো। 
const students2 = [
  { name: "Ali", mark: 45 },
  { name: "Babu", mark: 75 },
  { name: "Chotu", mark: 85 },
  { name: "Dipu", mark: 90 }
];
Expected Output: { name: "Chotu", mark: 85 }
*/
//* Ans:
const students2 = [
  { name: "Ali", mark: 45 },
  { name: "Babu", mark: 75 },
  { name: "Chotu", mark: 85 },
  { name: "Dipu", mark: 90 }
];

const firstStudent2 = students2.find(student => student.mark > 80 )
// console.log( firstStudent2 )
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

const fruits=["Mango", "Banana", "Apple", "Orange"];

// const index=fruits.forEach(( fruits , index) => console.log(  index, fruits ))


/* 
?Problem 6
mark > 50 student এর শুধু নাম বের করো। 
const students4 = [
  { name: "Ali", mark: 45 },
  { name: "Babu", mark: 75 },
  { name: "Chotu", mark: 85 },
  { name: "Dipu", mark: 30 }
];
Expected Output: ["Babu", "Chotu"]
*/
//* Ans:
const students4 = [
  { name: "Ali", mark: 45 },
  { name: "Babu", mark: 75 },
  { name: "Chotu", mark: 85 },
  { name: "Dipu", mark: 30 }
];


const name=students4.filter(student => student.mark>50).map(student => student.name)
// console.log( name )

/* 
?Problem 7
সব element multiply করো। 
const nums2 = [1, 2, 3, 4, 5];
Expected Output: 120
*/
//* Ans:
const nums2=[1, 2, 3, 4, 5];

const multiply=nums2.reduce((total, num3) => total*num3, 1)
// console.log( multiply )

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
  name1: "Rahim",
  email: "rahim@gmail.com",
  address: { city: "Dhaka", country: "Bangladesh" }
};

// const {name1}=user
// console.log(name1)

// const { email}=user
// console.log( email)

// const {city}=user.address
// console.log(city)

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


// console.log(aVar); //TODO:undefind 
var aVar = 50;

// console.log(bVar); //TODO:error
let bVar = 30;
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
    count++
    return count
  }
}
const myCounter = counter();

// console.log( myCounter())
// console.log( myCounter())
// console.log( myCounter())
// console.log( myCounter())

/* 
? Problem 11
even numbers এর square যোগ করো। 
const numbers5 = [1, 2, 3, 4, 5, 6];
Expected Output: 56
*/
//* Ans:

const numbers5=[1, 2, 3, 4, 5, 6];

const evenN=numbers5.filter(number => number%2===0).reduce((total, number ) => total + number**2, 0 )
// console.log( evenN )


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

const carts = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Pant", price: 800, quantity: 3 },
  { name: "Shoes", price: 1500, quantity: 1 },
  { name: "Cap", price: 300, quantity: 5 }
];


const filter3=carts.filter(cart => cart.price>500).reduce((total, cart) => total + cart.quantity  , 0 )
console.log( filter3 )


