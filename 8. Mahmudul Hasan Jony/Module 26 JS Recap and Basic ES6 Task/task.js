/* 
? Qs: 1
একটি function লেখো।
এর ভিতরে var, let, const ব্যবহার করো।
if block এর ভিতরে console.log করে দেখাও কোনটা কাজ করে।
*/
// Ans:
 function task(){
     var a = 10;
     let b = 20;
     const c = 30;

     if(true){
        //  console.log(a);
        //  console.log(b);
        //  console.log(c);
     }
 }
 task();
/* 
? Qs: 2
calculateTotal নামে একটি function বানাও।
price নিবে।
tax না দিলে 5 ধরবে।
tax দিলে সেই tax ব্যবহার করবে।
*/
// Ans:
function calculateTotal(price, tax=5){
    const total = price + tax;
    return total;
}
const price1 = calculateTotal(100);
const price2 = calculateTotal(100, 10);
console.log(price1, price2);


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
  // console.log(`My name is ${student.name}. I am ${student.age} years old. I am good at ${student.skill}.`);
/* 
? Qs: 4
একটি arrow function লেখো।
৩টি সংখ্যা নিবে।
সবচেয়ে বড় সংখ্যা return করবে।
Math.max ব্যবহার করা যাবে না।
*/
// Ans:

const findmax = (a, b, c) => {
  if(a > b && a > c){
    return a;
  }else if(b > a && b > c){
    return b;
  }else{
    return c;
  }
}
const maxNumbers =findmax(10, 20, 30);
// console.log(maxNumbers);


/* 
? Qs: 5
const numbers = [10, 25, 60, 5, 80];

1. সবচেয়ে বড় সংখ্যা বের করো (spread ব্যবহার করে)।
2. নতুন array বানাও এবং 100 যোগ করো।
*/
// Ans:
const numbers = [10, 25, 60, 5, 80];

const max = Math.max(...numbers);
// console.log(max);

const newNumbers = [...numbers, 100];
// console.log(newNumbers);


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
//  const {name, email, address:{city}} = user;
//  console.log(name, email, city);

/* 
? Qs: 7
একটি product object বানাও।
1. keys বের করো।
2. values বের করো।
3. একটি property delete করো।
*/
// Ans:
const product = {
    name: "Laptop",
    price: 15000,
    color: "Black"
}
// console.log(Object.keys(product));
// console.log(Object.values(product));
// delete product.price;
// console.log(product)

/* 
? Qs: 8
একটি nested object বানাও।
optional chaining দিয়ে একটি property access করো।
*/
// Ans:
const employee = {
    name: 'Habib',
    age: 32,
   profile: {
    scoial:{
      facebook: 'fb.com/habib',
    }
   }
}
// console.log(employee.profile?.scoial?.facebook);

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

for(let employee of company.employees){
  // console.log(employee.name);
}

let total = 0;
for(let employee of company.employees){
  total += employee.salary;
}
// console.log('Total Salary is:',total,'taka');

/* 
? Qs: 10
Object.seal() এবং Object.freeze() এর পার্থক্য লিখো।
ছোট example দাও।
*/
// Ans:

// Object.seal();--> Its lock sturcture object but updates allowed.
const player = {
    name: "Tahmid",
}
Object.seal(player);
player.name = 'Tahmidul';
player.age = 22;
player.height = 5.7;
// console.log(player);

// Object.freeze();--> Its fully lock sturcture object.
const player1 = {
    name: "Tahmid",
}
Object.freeze(player1);
player1.name = 'Tahmidul';
player1.age = 22;
player1.height = 5.7;
// console.log(player1);