/* 
? Qs: 1
একটি function লেখো।
এর ভিতরে var, let, const ব্যবহার করো।
if block এর ভিতরে console.log করে দেখাও কোনটা কাজ করে।
*/
// Ans: 
function sum() {
  var a = 10;
  if (true) {
    var a = 20;
    let b = 20;
    const c = 20;

    // inside the if block;
    // console.log(a);
  }
  // outside the if block;
  // console.log(c);
 
}
sum()

/* 
? Qs: 2
calculateTotal নামে একটি function বানাও।
price নিবে।
tax না দিলে 5 ধরবে।
tax দিলে সেই tax ব্যবহার করবে।
*/
// Ans:
function calculateTotal(price = 5, price2) {

  console.log(price+ price2)
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
  name: 'Shadhin',
  age: 27,
  skill: 'JavaScript',
};
const studentTemplate = `My name is ${student.name}.I am ${student.age} years old.I am learning ${student.skill}.`
// console.log(studentTemplate)

/* 
? Qs: 4
একটি arrow function লেখো।
৩টি সংখ্যা নিবে।
সবচেয়ে বড় সংখ্যা return করবে।
Math.max ব্যবহার করা যাবে না।
*/
// Ans:

const maxNum = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3
  }
}
// console.log(maxNum(7, 9, 5));
/* 
? Qs: 5
const numbers = [10, 25, 60, 5, 80];

1. সবচেয়ে বড় সংখ্যা বের করো (spread ব্যবহার করে)।
2. নতুন array বানাও এবং 100 যোগ করো।
*/
// Ans:
const numbers = [10, 25, 60, 5, 80];
// console.log(Math.max(...numbers))
const newArray = numbers
newArray.push(100)
// console.log(newArray)
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
const { name, email, address: { city } } = user;
// console.log(name,email,city)

/* 
? Qs: 7
একটি product object বানাও।
1. keys বের করো।
2. values বের করো।
3. একটি property delete করো।
*/
// Ans:
const product = {
  name: 'Mobile',
  brand: 'apple',
  model: 'iphone 16pro max',
  color: 'black'
}
const key = Object.keys(product)
const value = Object.values(product)
// console.log(key)
// console.log(value)

// delete product.color
// console.log(product)

/* 


? Qs: 8
একটি nested object বানাও।
optional chaining দিয়ে একটি property access করো।
*/
// Ans:

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
  name: 'Tech Corp',
  employees: [
    { name: 'Rahim', salary: 20000 },
    { name: 'Karim', salary: 30000 },
    { name: 'Jamal', salary: 25000 },
  ],
};

// const { employees } = company;
// for (let {name} of employees) {
//   console.log(name)
// }

const totalPrice = (company) => {
 
  let total = 0;
  for (const employee of company.employees) {
    console.log(employee.name)
    total += employee.salary;

  }
  console.log(total)
  return total;
}
totalPrice(company)
/* 
? Qs: 10
Object.seal() এবং Object.freeze() এর পার্থক্য লিখো।
ছোট example দাও।
*/
// Ans:

// ফ্রিজ করলে অবজেক্ট এর ভিতরের কোনোকিছু চেঞ্জ, এড, ডিলিট করা যায় না।
// আর সিল করলে এড, ডিলিট করা যায় না কিন্তু ভিতরের ভ্যালু পরিবর্তন করা যায়।
