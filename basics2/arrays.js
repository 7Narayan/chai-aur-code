// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //unshift() - Adds elements to the beginning of an array
// myArr.shift()     //shift() - Removes the first element of an array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

//  const newArr = myArr.join()

// console.log(myArr);
//  console.log( newArr);
// console.log( typeof newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //splice() : end index is inclusive and it removes the elements for range(1,3) and modifies he array , the array changes to [0,4,5]
console.log("C ", myArr);
console.log(myn2);
console.log(myArr);