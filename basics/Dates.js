// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());//Formats the date and time based on the user's locale (system settings).
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)        //   1/23/2023, 12:00:00 AM
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)     //   1/23/2023, 5:03:00 AM
let myCreatedDate = new Date("2023-01-14")             //  1/14/2023, 12:00:00 AM
// let myCreatedDate = new Date("01-14-2023")      //    1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()// dates in javascript are stored as time stamps (milliseconds)

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
