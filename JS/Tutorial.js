// JS datatypes
// number, string, bool
// arrays, objects

const number = 10;
// console.log(number);

const string = "This is a string";
// console.log(string);

const bool = true; // Or false
// console.log(`bool:${bool} & !bool:${!bool}`);

const array = ["blah", 12, "dksdfj", true, { isAnArray: true }]; // Array need not have same type elements
// console.log(array);
const position = 3;
// console.log(`Element at position ${position}: ${array[position]}`);

const object = {
  key: "value",
  name: "new object",
  notUseful: true,
  someRandomNumber: 19,
  nestedObject: {
    name: "nested object",
    something: "something",
    anotherNestedObject: {
      name: "another nested object",
    },
  },
};
// console.log(object);
// console.log(object.name);
// console.log(object.nestedObject);

// Scope in JS
// var    global        can be changed
// let    block-level   can be changed
// const  block-level   cannot be changed; Exception: Adding an element to an array.
if (true) {
  var v = "This is a global variable";
  let l = "This is a block level let";
  const c = "This is a block level const";

  // console.log(v);
  // console.log(`let: ${l}`);
  // console.log(`const: ${c}`);
}

// console.log(`var: ${v}`);
// console.log(`let: ${l}`);
// console.log(`const: ${c}`);

// Some useful functions
const numberConvertedToString = String(number);
// console.log(numberConvertedToString, number);
const boolConvertedToString = String(bool);
// console.log(boolConvertedToString, bool);
const stringConvertedToNumber = Number("10");
// console.log(stringConvertedToNumber);

// Conditionals
//
// 1. Plain if
// if (0 === 0) {
//   console.log("0 is equal to 0");
// }
// if (0 !== 1) {
//   console.log("0 is not equal to 1");
// }
//
// 2. If else
// if (0 === 1) {
//   console.log("0 is equal to 1");
// } else {
//   console.log("0 is not equal to 1");
// }
//
// 3. If else-if
// if (0 === 1) {
//   console.log("0 is equal to 1");
// } else if (0 === 2) {
//   console.log("0 is equal to 2");
// } else {
//   console.log("0 is not equal to 1 and not equal to 2");
// }
//
// 4. while
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// 5. for
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// Array functions
// 1. push()
// array.push({ newArrayItem: "NewArrayItem" });
// console.log(array);
//
// 2. pop()
// const lastElement = array.pop();
// console.log(array);
//
// 3. forEach(element, position)
// array.forEach((element, position) => {
//   console.log(`Element: ${element} `, ` Position: ${position}`);
// });
//
// 4. map(element, id)
const newArray = array.map((element, position) => {
  return { e: element, p: position };
});
console.log(newArray);

// function add(a, b) {
//   return a + b;
// }

// const add = (a, b) => {
//   return a + b;
// };
