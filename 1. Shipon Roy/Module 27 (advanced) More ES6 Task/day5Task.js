/* =========================================
        🚀 DAY 6 — LOOP ONLY (INTERVIEW MODE)
        (No map/filter/reduce/sort/Set)
========================================= */

/* 
? Problem 1
একটা array আছে। manually largest number বের করো।

const numbers = [12, 45, 2, 89, 32];
Expected Output: 89
*/
//* Ans:

const numbers = [12, 45, 2, 89, 32];
let largestNumber = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > numbers[i + 1]) {
    largestNumber = numbers[i];
  }
}
console.log(largestNumber);

/* 
? Problem 2
একটা string আছে। manually character frequency count করো।

const str = "programming";
Expected Output:
{
  p:1,
  r:2,
  o:1,
  g:2,
  a:1,
  m:2,
  i:1,
  n:1
}
*/
//* Ans:
const str = 'programming';
let output = {};
for (let i = 0; i < str.length; i++) {
  const char = str[i];
  if (output[char]) {
    output[char]++;
  } else {
    output[char] = 1;
  }
}

console.log(output);

/* 
? Problem 3
একটা array আছে। duplicate remove করো (Set ছাড়া)।

const numbers = [1, 2, 2, 3, 4, 4, 5, 1];
Expected Output: [1, 2, 3, 4, 5]
*/
//* Ans:

const numbers3 = [1, 2, 2, 3, 4, 4, 5, 1];
const newArr = [];

for (let i = 0; i < numbers3.length; i++) {
  if (!newArr.includes(numbers3[i])) {
    newArr.push(numbers3[i]);
  }
}
console.log(newArr);

/* 
? Problem 4
একটা array আছে। manually second largest number বের করো।

const numbers = [10, 5, 8, 20, 15];
Expected Output: 15
*/
//* Ans:
const numbers4 = [10, 5, 8, 20, 15];
let largestNumbers = -Infinity;
let largestSecondNumber = -Infinity;
for (let i = 0; i < numbers4.length; i++) {
  if (numbers4[i] > numbers4[i + 1]) {
    largestNumbers = numbers4[i];
  } else if (numbers4[i] > numbers4[i + 1] && numbers4[i] !== numbers4[i + 1]) {
    largestSecondNumber = numbers4[i];
  }
}
console.log(largestSecondNumber);

/* 
? Problem 5
একটা array আছে। palindrome number গুলো বের করো।

const numbers = [121, 345, 444, 98, 101];
Expected Output: [121, 444, 101]
*/
//* Ans:
// const numbers = [121, 345, 444, 98, 101];

const palindrome = [];

for (let num of numbers) {
  let str = num.toString();
  let reversed = str.split('').reverse().join('');

  if (str === reversed) {
    palindrome.push(num);
  }
}

console.log(palindrome);

/* 
? Problem 6
Nested object থেকে সব value print করো (recursion ছাড়া)।

const user = {
  name: "Rahim",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  },
  age: 25
};

Expected Output:
Rahim
Dhaka
Bangladesh
25
*/
//* Ans:

const user = {
  name: 'Rahim',
  address: {
    city: 'Dhaka',
    country: 'Bangladesh',
  },
  age: 25,
};

for (let key in user) {
  if (typeof user[key] === 'object') {
    for (let subKey in user[key]) {
      console.log(user[key][subKey]);
    }
  } else {
    console.log(user[key]);
  }
}

/* 
? Problem 7
একটা array আছে। manually reverse করো (reverse() ছাড়া)।

const numbers = [1, 2, 3, 4, 5];
Expected Output: [5, 4, 3, 2, 1]
*/
//* Ans:

// const numbers = [1, 2, 3, 4, 5];

const reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  reversed.push(numbers[i]);
}

console.log(reversed);

/* 
? Problem 8
একটা string আছে। longest word বের করো।

const sentence = "I love learning JavaScript deeply";
Expected Output: "JavaScript"
*/
//* Ans:

const sentence = 'I love learning JavaScript deeply';

const words = sentence.split(' ');

let longest = '';

for (let word of words) {
  if (word.length > longest.length) {
    longest = word;
  }
}

console.log(longest);

/* 
? Problem 9
একটা array আছে। manually ascending order এ sort করো (bubble sort বা যেকোনো logic)।

const numbers = [5, 2, 9, 1, 7];
Expected Output: [1, 2, 5, 7, 9]
*/
//* Ans:

// const numbers = [5, 2, 9, 1, 7];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log(numbers);

/* 
? Problem 10
একটা object array আছে। mark অনুযায়ী manually descending sort করো (sort() ছাড়া)।

const students = [
  { name: "Ali", mark: 45 },
  { name: "Babu", mark: 75 },
  { name: "Chotu", mark: 85 }
];

Expected Output:
[
  { name: "Chotu", mark: 85 },
  { name: "Babu", mark: 75 },
  { name: "Ali", mark: 45 }
]
*/
//* Ans:

const students = [
  { name: 'Ali', mark: 45 },
  { name: 'Babu', mark: 75 },
  { name: 'Chotu', mark: 85 },
];

for (let i = 0; i < students.length; i++) {
  for (let j = 0; j < students.length - 1; j++) {
    if (students[j].mark < students[j + 1].mark) {
      let temp = students[j];
      students[j] = students[j + 1];
      students[j + 1] = temp;
    }
  }
}

console.log(students);
