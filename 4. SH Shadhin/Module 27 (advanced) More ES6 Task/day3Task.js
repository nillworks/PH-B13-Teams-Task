/* =========================================
        🚀 DAY 3 – Array Practice
   (map, filter, forEach, find, reduce)
========================================= */

/*
? Qs: 1
map ব্যবহার করে নিচের array এর সব সংখ্যার square বের করো।

const numbers = [1, 2, 3, 4, 5];

Expected Output:
[1, 4, 9, 16, 25]
*/

// Ans:
const numbers = [1, 2, 3, 4, 5];
const square = numbers.map(num => num * num);
// console.log(square)
/*
? Qs: 2
map ব্যবহার করে সব নাম uppercase করো।

const names = ["rahim", "karim", "jamal"];

Expected Output:
["RAHIM", "KARIM", "JAMAL"]
*/

// Ans:
const names = ['rahim', 'karim', 'jamal'];
const upperCase = names.map(big => big.toUpperCase());
// console.log(upperCase)



/*
? Qs: 3
filter ব্যবহার করে শুধু even number গুলো বের করো।

const nums = [10, 15, 20, 25, 30, 35];

Expected Output:
[10, 20, 30]
*/
// Ans:
const nums = [10, 15, 20, 25, 30, 35];
const evenNum = nums.filter(num => num % 2 === 0)
// console.log(evenNum)


/*
? Qs: 4
filter ব্যবহার করে শুধু active user গুলো বের করো।

const users = [
  { name: "Rahim", active: true },
  { name: "Karim", active: false },
  { name: "Jamal", active: true }
];

Expected Output:
[
  { name: "Rahim", active: true },
  { name: "Jamal", active: true }
]
*/
// Ans:
const users = [
  { name: 'Rahim', active: true },
  { name: 'Karim', active: false },
  { name: 'Jamal', active: true },
];

const active = users.filter(ac => ac.active === true)
// console.log(active)


/*
? Qs: 5
find ব্যবহার করে প্রথম যে product এর price 100 এর বেশি সেটা বের করো।

const products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 200 },
  { name: "Bag", price: 1500 }
];

Expected Output:
{ name: "Book", price: 200 }
*/
// Ans:
const products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 200 },
  { name: "Bag", price: 1500 }
];
const greater100 = products.find(product => product.price > 100)
// console.log(greater100)



/*
? Qs: 6
reduce ব্যবহার করে সব marks যোগ করে total বের করো।
const marks = [70, 80, 90, 60];
Expected Output:
300
*/

// Ans:
const marks = [70, 80, 90, 60];
const totalMarks = marks.reduce((t, curr) => {
  return total = t + curr;
}, 0)
// console.log(total)



/*
? Qs: 7
reduce ব্যবহার করে total user সংখ্যা বের করো।

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 30 }
];

Hint: accumulator + 1
Expected Output:
3
*/
// Ans:
const users2 = [
  { name: 'A', age: 20 },
  { name: 'B', age: 25 },
  { name: 'C', age: 30 },
];
const userCount = users2.reduce(count => {
  return count = count + 1;
}, 0) 
// console.log(userCount);

/*
? Qs: 8
forEach ব্যবহার করে index সহ print করো।
const fruits = ["Apple", "Banana", "Mango"];

Expected Console Output:
0 - Apple
1 - Banana
2 - Mango
*/

// Ans:
const fruits = ['Apple', 'Banana', 'Mango'];
fruits.forEach((fruit, index) => {
  // console.log(index, fruit)
})
/*
? Qs: 9
reduce ব্যবহার করে cart এর total price বের করো।
(price * quantity)

const cart = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Pant", price: 800, quantity: 1 },
  { name: "Shoes", price: 1500, quantity: 1 }
];

Expected Output:
3300
*/

// Ans:
const cart = [
  { name: 'Shirt', price: 500, quantity: 2 },
  { name: 'Pant', price: 800, quantity: 1 },
  { name: 'Shoes', price: 1500, quantity: 1 },
];

const totalPrice = cart.reduce((total, item) => {
  return total + (item.price * item.quantity)
}, 0)
// console.log(totalPrice)
/*
? Qs: 10
Step 1: 50 এর বেশি mark যারা পেয়েছে তাদের filter করো
Step 2: তারপর তাদের নামের array বানাও (map)

const students = [
  { name: "Rahim", mark: 45 },
  { name: "Karim", mark: 75 },
  { name: "Jamal", mark: 85 },
  { name: "Rafiq", mark: 30 }
];

Expected Output:
["Karim", "Jamal"]
*/

// Ans:
const students = [
  { name: 'Rahim', mark: 45 },
  { name: 'Karim', mark: 75 },
  { name: 'Jamal', mark: 85 },
  { name: 'Rafiq', mark: 30 },
];

const more50 = students.filter(name => name.mark > 50)
// console.log(more50)
const name2 = more50.map(n => n.name)
// console.log(name2)
/*
🔥 Bonus Challenge (Hard)

reduce ব্যবহার করে নিচের array এর সব সংখ্যা multiply করো।

const numbers = [1, 2, 3, 4];

Expected Output:
24
*/

// Ans:
const number3 = [1, 2, 3, 4];
const multiply = number3.reduce((total, curr) => {
  return total * curr;
}, 1)
// console.log(multiply)