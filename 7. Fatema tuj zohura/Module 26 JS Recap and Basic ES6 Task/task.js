/* 
? Qs: 1
একটি function লেখো।
এর ভিতরে var, let, const ব্যবহার করো।
if block এর ভিতরে console.log করে দেখাও কোনটা কাজ করে।
*/
// Ans:

function  add () {
    
  var num1=10;
  let num2=20;
  const num3=30;
  // console.log(num1)
  
  if(true) {
  //   var b1=50;
  // let b2=60;
  // const b3=70;

    console.log(num3)
    
  }

  // console.log( b2 )

}

add()



/* 
? Qs: 2
calculateTotal নামে একটি function বানাও।
price নিবে।
tax না দিলে 5 ধরবে।
tax দিলে সেই tax ব্যবহার করবে।
*/
// Ans:

function calculateTotal (price=5) {
  return price
}

let number=calculateTotal()
// console.log( number )


/* 
? Qs: 3
নিচের object থেকে একটি sentence বানাও (template string ব্যবহার করে)।
*/
const student = {
  name: "Shipon",
  age: 22,
  skill: "JavaScript"
}



// Ans:

const sentence=`My name is ${student.name}. i'am ${student.age} years old. i'am learning ${student.skill}.`
// console.log( sentence )

/* 
? Qs: 4
একটি arrow function লেখো।
৩টি সংখ্যা নিবে।
সবচেয়ে বড় সংখ্যা return করবে।
Math.max ব্যবহার করা যাবে না।
*/
// Ans:

let count = [6, 7, 8]

const maxNum=(a, b, c) => count 
let arr=Math.max(...count)
  // console.log( arr )




/* 
? Qs: 5
const numbers = [10, 25, 60, 5, 80];

1. সবচেয়ে বড় সংখ্যা বের করো (spread ব্যবহার করে)।
2. নতুন array বানাও এবং 100 যোগ করো।
*/
// Ans:

const numbers=[10, 25, 60, 5, 80];
let num=Math.max(...numbers)
// console.log(num)


let numbers2=[...numbers]
numbers2.push(100)
// console.log( numbers )
// console.log( numbers2 )

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
    country: "Bangladesh"
  }
}

// Ans:

const {id}=user
// console.log(id)

const {email}=user
// console.log(email)

const {city}=user.address
// console.log(city)

/* 
? Qs: 7
একটি product object বানাও।
1. keys বের করো।
2. values বের করো।
3. একটি property delete করো।
*/
// Ans:

/* 
? Qs: 8
একটি nested object বানাও।
optional chaining দিয়ে একটি property access করো।
*/
// Ans:

let car = {
  brand: 'tesla', 
  model: 'Model s Plaid', 
  year: 2024, 
  moreInformation: {
    color: "red",
    engineInfo: {
      engine: "Electric",
      // speedInfo: {
      //   speed:"200 mph"
      // }
    }
  }

}

// console.log( car.moreInformation.engineInfo?.speed )

/* 
? Qs: 9


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

//TODO: name print
/* 
let access1=company.employees[0].name
console.log( access1 )
let access2=company.employees[1].name
console.log( access2 )
let access3=company.employees[2].name
console.log(access3)
*/

//TODO: name print

company.employees.forEach((employ1) => {
  // console.log( employ1.name )
})


//TODO: total salary

let total = 0;

company.employees.forEach((employ) => {
  // console.log( employ )
  total+=employ.salary
  return total
})

// console.log( total )





/* 
? Qs: 10
Object.seal() এবং Object.freeze() এর পার্থক্য লিখো।
ছোট example দাও।
*/
// Ans:

//TODO: object.seal() & object.freeze() er moddhe parthokko:

//TODO: freeze korle sei object er (value modify) , (notun value add), ( value delete) kora jay na
//TODO: seal  korle sei object er (value delete)  , (notun value) add kora jay na but value modify kora jay

// example 
{

//TODO: object.freeze()

let func1={
  name: "fatema",
  age: 21
}

 Object.seal(func1)
//  console.log(func1)


func1.name='Zohura' //value modify
// console.log( func1 )

func1.address='joypurhat' //notun value add
// console.log( func1 )

delete func1.age //value delete
// console.log( func1 )

}


{

  //TODO: Object.seal()
  
  let func1={
  name: "fatema",
  age: 21
  }
  
    Object.seal(func1)
//  console.log(func1 )

func1.name='Zohura' //value modify
// console.log( func1 )

func1.address='joypurhat' //notun value add
// console.log( func1 )

delete func1.age //value delete
// console.log( func1 )


}