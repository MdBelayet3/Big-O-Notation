// const set = new Set();
// set.add("apple")
// set.add("mango")
// set.add("banana")
// console.log(set);       //output: Set(3) { 'apple', 'mango', 'banana' }
// console.log(set.size);

// const belayet = {userName : "belayet"}
// const niloy = {userName : "niloy"}
// const tuku = {userName : "tuku"}
// set.add(belayet);
// set.add(niloy);
// set.add(tuku);
// set.add(belayet);

// console.log(set)         //output: { userName: 'belayet' },{ userName: 'niloy' },{ userName: 'tuku' }

const array = ["apple", "banana", "mango", "apple"];
const set = new Set(array);
set.add("tomato")
set.add("malta")
set.add("mango")
// console.log(set);   // output: Set(5) { 'apple', 'banana', 'mango', 'tomato', 'malta' }

// const test = set.forEach(element => console.log(element)); 
// console.log(test)       //output: undefined

const test = Array.from(set);
test.push("malta", "banana")
console.log(test)     //output:  ['apple',  'banana', 'mango',  'tomato', 'malta',  'malta', 'banana']

console.log(set.has("apple"))  //output: true
console.log(set.has("kurma"))   //output: false
console.log(set.delete("apple"))   //output: true
// console.log(set)       //output: Set(4) { 'banana', 'mango', 'tomato', 'malta' }

set.delete("mango")
console.log(set)      //output:   Set(3) { 'banana', 'tomato', 'malta' }
