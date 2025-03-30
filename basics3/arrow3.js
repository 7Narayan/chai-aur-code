const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function()   // { welcomeMessage: function() { ... } is similar to  const welcomeMessage = function() { ... };
                                // here "welcomemesssage " is a key in the object "user".
    {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.price = 0
// user.welcomeMessage()

console.log(this); //   o/p:
                   //  {}   -> empty object becos In Node.js, the global this refers to {} (an empty object) because Node does not attach variables to global like in browsers.
                    //   In a browser, this in the global scope refers to the "window object"  ****imp****.


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()