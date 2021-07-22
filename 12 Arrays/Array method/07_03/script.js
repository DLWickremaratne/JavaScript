/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

// backpackContents.push("pencil", 5)

// backpackContents.unshift("pencil", 5); //add to top of the array




//apply functions to each item within the array
// backpackContents.forEach(function (item) {
//   item = `<li>${item}</li>`;
//   console.log(item);
// });




//create new let and then backpackcontents to find first item that meets our parameters
//they defind inside a custom function
let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);


console.log(backpackContents);



