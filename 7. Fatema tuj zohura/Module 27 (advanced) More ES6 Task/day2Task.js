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
{


//TODO: primitive
const a = 10;
const b = "Hello";
const c = true;
const d = null;
const e = undefined;

  //TODO: kno primitive 

  // primitive hoilo sorasori man . eigulo immutable (oporibortito). & sorasori variable e rakha jay  

//TODO: non-primitive
const f = [1, 2, 3];
  const g={name: "Karim"};
  
  // non-primitive man jotil hoi . eigulo mutable and reference dhore rakhe 


}
/*
? Qs: 2
নিচের কোডের output কী হবে এবং কেন হবে?

let x;
console.log(x);

 undefined কেন আসে explain করো।
*/

// Ans:
let x;
// console.log(x);


//TODO: ans: code er man undefined ase . karon  ekhane kono value assign kora hoinai

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
{

  // 0=falsy
  
  // 1=truthy
  
  // ""=falsy
  
  // "Hello"=truthy
  
  // null=falsy
  
  // undefined=falsy
  
  // []=truthy

  // {}= truthy
  

  
}

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


// console.log(5 == "5"); true
// console.log(5==="5"); false

// console.log(false==0); true   //TODO: false ke number e convert kora hoyece {false(0)== 0 } = true
//TODO: == type cheack kore na kintu kisu khetre type convert kore tulona korar jonno.

// console.log(false===0); false  //TODO: kono vabe kisu convert korbe ba. ja value ase ta dekhei output dibe 

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
{
  let a = 10;
}

// console.log(a);

// TODO: ans: error asbe . let block scope follow kore tai eita block er baire execute hoi na .

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

function counter() {
  let count = 0;
  return function() {
    count++;
    // console.log(count);
  }
}

// const result = counter();
// result();
// result();


//TODO: Ans: ekhane conter er moddher akta variable declare kora ase . vetor er function ti laxical scope er maddhome counter function er moddher variable ta ke access korce . count barasse seitake memory te rekhe disse . akbr call korle seita show korce . tarpor abr jotobr call korbo totobar ager man er sathe +1 hobe 

/*
? Qs: 7
Callback function ব্যবহার করে এমন একটি function বানাও যেখানে একটি function আরেকটি function কে parameter হিসেবে নেয়।

 Example: greet("Rahim", callbackFunction)
*/

// Ans:


function outer (name, callback, age) {
  // console.log('name:', name )
  callback(age)
}

  function inner(age) {
    // console.log('age:', age )
}
  
outer("fatema", inner, 21)


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

                                              //TODO: 1 
let num = 10;
function changeValue(x) {
  x=20;
  // console.log( x )
}
// changeValue(num);
// console.log(num);

//TODO: ans: ekhane num er copy banano hosse. kintu num er copy != num. tai num er value change hosse na.


                                              //TODO: 2 

let obj = { name: "Rahim" };
function changeName(o) {
  o.name = "Karim";
}
changeName(obj);
// console.log(obj.name);

//TODO: ans: ekhane object er value ('Rahim') ke change kora hosse. copy kora hosse na .

/*
? Qs: 9
map ব্যবহার করে নিচের array থেকে সব সংখ্যাকে double করো।

const numbers = [2, 4, 6, 8];

 Output হবে: [4, 8, 12, 16]
*/

// Ans:
const numbers = [2, 4, 6, 8];

let doubleNumber=numbers.map(num => num*2);
// console.log( doubleNumber )
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

{
  const products=[
    {name: "Mobile", price: 20000},
    {name: "Laptop", price: 50000},
    {name: "Watch", price: 3000}
  ];

  const x=products.filter(pr => pr.price>10000)
  console.log(x)

  const y=products.find(pr2 => pr2.price===3000)
  console.log(y)
  

  const total=products.reduce((z, product) => {
    return z+product.price; 
  },0)
    
    console.log( total )
}