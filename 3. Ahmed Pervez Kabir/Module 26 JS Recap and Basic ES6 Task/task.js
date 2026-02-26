/* 
? Qs: 1
একটি function লেখো।
এর ভিতরে var, let, const ব্যবহার করো।
if block এর ভিতরে console.log করে দেখাও কোনটা কাজ করে।
*/
// Ans:



function Add() {
  let number = 10;
}
// console.log(number);

Add();

/* 
? Qs: 2
calculateTotal নামে একটি function বানাও।
price নিবে।
tax না দিলে 5 ধরবে।
tax দিলে সেই tax ব্যবহার করবে।
*/
// Ans:
function calculateTotal(price = 5, price1 = 10) {
  console.log(price + price1);
}
calculateTotal()

/* 
? Qs: 3
নিচের object থেকে একটি sentence বানাও (template string ব্যবহার করে)।

const student = {
  name: "Shipon",
  age: 22,
  skill: "JavaScript"
}
*/
// Ans:
const student = {
  name: "Shipon",
  age: 22,
  skill: "JavaScript"
}
const studentInfo = `student name is ${student.name} and his age is ${student.age}. He is expert in ${student.skill}.`;
console.log(studentInfo);

/* 
? Qs: 4
একটি arrow function লেখো।
৩টি সংখ্যা নিবে।
সবচেয়ে বড় সংখ্যা return করবে।
Math.max ব্যবহার করা যাবে না।
*/
// Ans:
const bigNumber = (a, b, c) => {
  if (a > b) {
    return a;
  } else if (b > c) {
    return b
  } else {
    return c;
  }
}
console.log(bigNumber(22, 13, 4));
/* 
? Qs: 5
const numbers = [10, 25, 60, 5, 80];

1. সবচেয়ে বড় সংখ্যা বের করো (spread ব্যবহার করে)।
2. নতুন array বানাও এবং 100 যোগ করো।
*/
// Ans:
const numbers = [10, 25, 60, 5, 80];
const newNumbers = [...numbers];
const bigNumberWithSpread = Math.max(...newNumbers);
newNumbers.push(100);
console.log(bigNumberWithSpread);
console.log(numbers);
console.log(newNumbers);

/* 
? Qs: 6
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
const user = {
  id: 101,
  name: "Rahim",
  email: "rahim@gmail.com",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
}
const { name, email, address: { city } } = user; //nested destructuring 
console.log(name, email, city);

/* 
? Qs: 7
একটি product object বানাও।
1. keys বের করো।
2. values বের করো।
3. একটি property delete করো।
*/
// Ans:
const product = { productName: "phone", price: 20000, brand: "apple" };

const keys = Object.keys(product);
const values = Object.values(product);
delete product.brand;

console.log(product);
/* 
? Qs: 8
একটি nested object বানাও।
optional chaining দিয়ে একটি property access করো।
*/
// Ans:
const favorite = {
    food: "Biriyani",
    person: "Jankor Mahbub",
    game: {
      // internationally: "football",
      // locally: {
      //   localSport: "cricket",
      // }

    }
}
console.log(favorite.game?.locally?.localSport);

/* 
? Qs: 9
const company = {
  name: "Tech Corp",
  employees: [
    { name: "Rahim", salary: 20000 },
    { name: "Karim", salary: 30000 },
    { name: "Jamal", salary: 25000 }
  ]
}

1. সব নাম print করো।
2. total salary বের করো।
*/
// Ans:
const company = {
  name: "Tech Corp",
  employees: [
    { name: "Rahim", salary: 20000 },
    { name: "Karim", salary: 30000 },
    { name: "Jamal", salary: 25000 }
  ]
  
}
const comName = company.name;
const emplyNm1 = company.employees[0].name;
const emplyNm2 = company.employees[1].name;
const emplyNm3 = company.employees[2].name;

const emplykSlry1 = company.employees[0].salary;
const emplySlry2 = company.employees[1].salary;
const emplySlry3 = company.employees[2].salary;
const total = emplykSlry1 + emplySlry2 + emplySlry3;
const output = `Names: ${comName}, ${emplyNm1}, ${emplyNm2}, ${emplyNm3} and total: ${total}`

console.log(output);

/*
? Qs: 10
Object.seal() এবং Object.freeze() এর পার্থক্য লিখো।
ছোট example দাও।
*/
// Ans: 
// when seal used in a object it allows modify but not it doesn't allows add or delete.
const students = {
  top: "Abdur Rahman",
  mid: "Abdul Wazid",
  bad: "Abdur Rakib"
}
Object.seal(students);
students.top = "Abdul Khalek";
students.good = "Abdul Mojid";
console.log(students);
// ** freeze **
// when freeze used in a object it doesn't allows add, delete and modify.  
const sports = {cricket: '11 players', football: "11 players"};
Object.freeze(sports);
sports.badminton = "2 players";
sports.cricket = "15 players";
console.log(sports);

