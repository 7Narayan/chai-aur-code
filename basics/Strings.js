const name = "hitesh"
const repoCount = 50

//  console.log(name + repoCount + " Value");

//  console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//backticks

 const gameName = new String('hitesh-hc-com')

//  console.log(gameName[0]);
// console.log(gameName.__proto__);

// __proto__ gives access to the prototype of the String object.
// Since gameName is an instance of String, gameName.__proto__ points to String.prototype, which contains all built-in string methods like .toUpperCase(), .charAt(), etc.


//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

//  const newString = gameName.substring(0, 4)
// console.log(newString);

 const anotherString = gameName.slice(-1, 4) //.slice(start, end) works left to right. If start is after end, it returns an empty string.
 console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));//imp*
