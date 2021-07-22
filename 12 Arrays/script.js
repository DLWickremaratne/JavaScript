/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];



console.log(collection[1]);//call for index number one

//add a different value to the third slot
collection[2]="camera;"

//add new iteam

collection[collection.length]= "new item"


collection[9]="at the end";
console.log(collection[8]); //undefind

console.log(collection);