"use client ";
// simple array methods
const simpleArr = [1, 2, 3, 4, 5, 6];

// push()
simpleArr.push(60);

// pop ()
simpleArr.pop();

// shift();
simpleArr.shift();

// unshift()
simpleArr.unshift(100);

// at()
console.log(simpleArr.at(-6));

// indexOf()
console.log(simpleArr.indexOf(3));
console.log(simpleArr.indexOf(99));
console.log(simpleArr.indexOf(6));

// includes()
console.log(simpleArr.includes(100));
console.log(simpleArr.includes(5));
console.log(simpleArr.includes(1));

// slice ()
const sliceCheck = [3, 5, 7, 2, 89, 23, 12, 34];
const sliceResult = sliceCheck.slice(0, -5);
const sliceResult1 = sliceCheck.slice(3, 6);
const sliceResult2 = sliceCheck.slice(4, 6);
console.log(sliceResult2);

// splice ()
const spliceArr = [4, 5, 23, 45, 66, 34, 22, 3]; //delet kore element
const resultArry = spliceArr.splice(0, 5);
console.log(resultArry);
console.log(spliceArr);

// forEach
const nums = [1, 21, 34, 56, 64, 65];
let sum = 0;

nums.forEach((el, index, arr) => (sum += el));
console.log(sum);

let product = 1;

nums.forEach((el) => (product *= el));
console.log(product);

// map
const mapArr = [4, 3, 5, 2, 7, 8, 9]; //return by []
const mapArrResult = mapArr.map((el) => el * el);
console.log(mapArrResult);

// filter
const myArr = [1, 3, 4, 5, 23, 54, 22, 45];
const odds = myArr.filter((el) => el % 3 !== 0);
const evens = myArr.filter((el) => el % 3 == 0);
console.log(odds);
console.log(evens);

// find
const colors = ["red", "green", "blue", "pink", "orange"];
const color = colors.find((color) => color.startsWith("b"));
const findColor = colors.find((color) => color.endsWith("n"));

console.log(color);
console.log(findColor);

// findIndex
const colordIndex = colors.findIndex((el) => el.endsWith("k"));

console.log(colordIndex);

// some
const students = ["evana", "aysha", "arif", "al-amin"];

const someResult = students.some((student) => student.startsWith("a"));
const everyResult = students.every((student) => student.endsWith("a"));
console.log(everyResult);

// chainig
const newArr = [3, 5, 33, 56, 34, 5];
let sum2 = 0;

newArr
  .map((num) => num * 2)
  .filter((num) => num > 10)
  .forEach((num) => (sum2 += num));

console.log(sum2);

// reduce
const numsArr = [45, 65, 34, 23, 88, 43];

const sum3 = numsArr.reduce((sum, num, indx, arr) => (sum += num));

console.log(sum3);

//reduce right
const product4 = newArr.reduceRight((product4, num) => (product4 *= num));
console.log(product4);

// sort()
const foods = ["noodles", "burger", "pasta", "chiken"];
foods.sort();
console.log(foods);
