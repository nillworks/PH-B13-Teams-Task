/* 
? Qs: 1
একটি function লেখো।
এর ভিতরে var, let, const ব্যবহার করো।
if block এর ভিতরে console.log করে দেখাও কোনটা কাজ করে।
*/
// Ans:
function Sumaiya() {
  var a = "Sadu";
  let b = "Shila";
  const c = "I love you";

  if (true) {
    var a = "var inside block";
    let b = "Programable Alwys Change and re Assigin";
    const c = "Alwys Fixed";
    console.log("Inside block");
    console.log(a);
    console.log(b);
    console.log(c);
  }
  console.log("Outside Block");
  console.log(a);
  console.log(b);
  console.log(c);
}
Sumaiya();

/* 
? Qs: 2
calculateTotal নামে একটি function বানাও।
price নিবে।
tax না দিলে 5 ধরবে।
tax দিলে সেই tax ব্যবহার করবে।
*/
// Ans:
function calculateTotal(price, tex = 5) {
  const total = price + (price * tex) / 100;
  return total;
}
console.log(calculateTotal(100));
console.log(calculateTotal(100, 10));

/* 
? Qs: 3
নিচের object থেকে একটি sentence বানাও (template string ব্যবহার করে)।

*/
const student = {
  name: "Md Shakibul Islam",
  age: 19,
  skill: "Python",
};
// Ans:
const sentence = `My name is ${student.name} I am a ${student.age} My skil ${student.skill}`;
console.log(sentence);

/* 
? Qs: 4
একটি arrow function লেখো।
৩টি সংখ্যা নিবে।
সবচেয়ে বড় সংখ্যা return করবে।
Math.max ব্যবহার করা যাবে না।
*/
// Ans:
function largest(a, b, c) {
  if (a > b && a > c) {
    console.log("The largest Numebr is :", a);
  } else if (b > a && b > c) {
    console.log("The largest Numebr is :", b);
  } else {
    console.log("The largest Numebr is :", c);
  }
}
console.log(largest(200, 500, 800));
/* 
? Qs: 5
1. সবচেয়ে বড় সংখ্যা বের করো (spread ব্যবহার করে)।
2. নতুন array বানাও এবং 100 যোগ করো।
*/
// Ans:
const numbers = [10, 25, 60, 5, 80];
const maxNumber = Math.max(...numbers);
const newNumebr = [...numbers, 100];
console.log(newNumebr);

/* 
? Qs: 6
নিচের object থেকে name, email এবং city আলাদা করে বের করো (destructuring ব্যবহার করে)।

*/
const user = {
  id: 101,
  name: "Rahim",
  email: "rahim@gmail.com",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};
// Ans:
const {
  name,
  email,
  address: { city },
} = user;

console.log(name);
console.log(email);
console.log(city);
/* 
? Qs: 7
একটি product object বানাও।
1. keys বের করো।
2. values বের করো।
3. একটি property delete করো।
*/
// Ans:
const product = {
  name: "iPhone",
  color: "Black",
  price: "140k",
  rom: "64GB",
};

// Object thek key check
const keys = Object.keys(product);
// Object theke values check
const values = Object.values(product);

// item delete
delete product.rom;

console.log(keys);
console.log(values);
console.log(product);
/* 
? Qs: 8
একটি nested object বানাও।
optional chaining দিয়ে একটি property access করো।
*/
// Ans:
const studentInfo = {
  name: "Sumaiya",
  roll: "24",
  id: 20230,
  CGPA: 3.7,
  address: {
    city: "Manikgonj",
  },
};

console.log(studentInfo.name);
console.log(studentInfo.address?.city);
console.log(studentInfo.CGPA);

/* 
? Qs: 9

1. সব নাম print করো।
2. total salary বের করো।
*/
const company = {
  name: "Tech Corp",
  employees: [
    { name: "Rahim", salary: 20000 },
    { name: "Karim", salary: 30000 },
    { name: "Jamal", salary: 25000 },
  ],
};
// Ans:
company.employees.forEach((employeesName) => {
  console.log(employeesName.name);
});
const totalSalary = company.employees.reduce((total, employeesName) => {
  return total + employeesName.salary;
}, 0);

console.log("Total Selary:", totalSalary);
/* 
? Qs: 10
Object.seal() এবং Object.freeze() এর পার্থক্য লিখো।
ছোট example দাও।
*/
// Ans:
// selt modify kor jay ghorer vitor thek kint bahire thek modify kor jay na
// freeze total of look mane rum look and not changble
