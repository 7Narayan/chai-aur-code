// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function()   // { welcomeMessage: function() { ... } is similar to  const welcomeMessage = function() { ... };
//                                 // here "welcomemesssage " is a key in the object "user".
//     {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

// // user.welcomeMessage()
// // user.price = 0
// // user.welcomeMessage()

// console.log(this); //   o/p:
//                    //  {}   -> empty object becos In Node.js, the global this refers to {} (an empty object) because Node does not attach variables to global like in browsers.
//                     //   In a browser, this in the global scope refers to the "window object"  ****imp****.


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {        //Behavior of Arrow Functions:  '=>'

//     // Arrow functions do not bind their own this.
    
//     // Instead, they inherit this from their surrounding lexical scope (which, in this case, is the global scope).
    
//     // In Node.js, this in the global scope is module.exports, an empty object {}.
//     let username = "hitesh"
//     console.log(this);
//  } 
// chai()

// const addTwo1 = (num1, num2) => {  //standard arrow function (using {}):
// //     The function takes num1 and num2 as parameters.
// // It uses a block body {}, so you need to explicitly use return to return a value.
//     return num1 + num2
// }

// const addTwo2 = (num1, num2) =>  num1 + num2 // implict return arrow func
// // If the function body is a single expression, you can omit {} and the function automatically returns the expression result.
// // No need for the return keyword.

// const addTwo3 = (num1, num2) => ( num1 + num2 ) 
// // The parentheses () around num1 + num2 don't change anything.
// // The function still returns the sum.

// const addTwo4 = (num1, num2) => ({username: "hitesh"})
// // This time, the function returns an object { username: "hitesh" }.
// // The parentheses () around the object are necessary because:
// // If you use {} without parentheses, JavaScript thinks it's a function block, not an object.


// console.log(addTwo1(3, 4))
// console.log(addTwo2(3, 4))
// console.log(addTwo3(3, 4))
// console.log(addTwo4(3, 4))

const myArray = [2, 5, 3, 7, 8]

myArray.forEach((i)=>{ // "forEach " is a func, 'i' is a parameter, {} here i snot obj, but func block*.
    console.log(i);
});