const vegetables = ["carrot", "cabbage", "potato", "tomato", "beans", "radius"];

console.log(vegetables[3]);

//push le last element add grdinxa
vegetables.push("onion");
console.log(vegetables);

//pop le last element remove gardinx
vegetables.pop();
console.log(vegetables);

//shift le first element hatyedinxa
vegetables.shift();
console.log(vegetables);

//unshift le 1st element add  grdinxa
vegetables.unshift("brocauli");
console.log(vegetables);

//foreach le sabai element ma kaam grxa
const names = ["sabita", "regina"];
names.forEach(function (name) {
  console.log("hello " + name);
});

//map sabai  element ma kaam garer naya element banauxa
const doubled = vegetables.map((vegetable) => vegetable + "s");
console.log(doubled);

//filter kunei pani condition lai satisfied garer naya array banyedinx
const filtered = vegetables.filter((vegetable) => vegetable.startsWith("b"));
console.log(filtered);

//find
const numbers = [10, 20, 30, 40];
const result = numbers.find((number) => number > 20);
console.log(result);

const users = [
  { id: 1, name: "Ram" },
  { id: 2, name: "shyam" },
  { id: 3, name: "hari" },
];
const user = users.find((user) => user.id == 2);

console.log(user);

//reduce sabai output lai combine garer final output liyaux
const values = [0, 1, 2, 3, 4];

// values.forEach((value) => {
//   if (value % 2 == 0) {
//     console.log(value + "is even number");
//   } else {
//     console.log(value + "is odd number");
//   }
// });

const total = values.reduce((sum, value) => {
  console.log(sum);
  return sum + value;
}, 0);
console.log(total);

//syn-serially kaam garxa
//asy-multiple  kaam ekaichoti grxa

// Rule of Array
// array start with index 0
// When trying to access any element of array write its index just like values[1]
