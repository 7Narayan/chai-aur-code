const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]//1st way

 console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//2nd way
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))

console.log(Array.from("Hitesh")) //Array.from() converts iterable objects (like strings) into arrays. 
//  "Hitesh" is a string, which is iterable.Each character becomes an element in the array.

console.log(Array.from({name: "hitesh"})) 
// { name: "hitesh" } is an object, which is not iterable.
//Array.from() only works with iterables (like strings, sets, maps) or objects with a length property (like array-like objects).

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));