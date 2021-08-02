A process is an algorithm, a list of steps and if we turn this algorithm into code we create a function.
For computers, we need to be very specific about each step of the logical chain for desired results.

The function will always have a name either variable that holds the function or function itself.
it will always have parameters.
There always be culy brackets wrapping around the function body.
And some functions may return data back where the function called.

#Arrow Function

Simpler way of writing anonymous functions
You can call the function before it is declared in JS
Arrow functions on the other hand can only be after they have been declared.
Cant use arrow function when declaring methods in an object.
if we want to return that data using return keyword.

// Traditional Function
function (a){
return a + 100;
}

keyword function then we give function name we pass parameters inside a parenthesis(and this can either nothing)
and then curly brackets wrapping aroung function body.
inside function body we perform actions on the data
if want to return that data using return keyword that data then sent back to whereever we declared the function originally.

//function expression
set up a variable we give that variable a name and then set the value equal to anonympus function(nirnamika) so its doesn't have its own name,

const doMoreMath = function (a = 3, b = 2) {
let c = a \* b;
return c;
};

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
return a + 100;
}

// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;

//pass data to function with parameters
//calculate weighted mark

const wMarkCalculater=(marks,credits,weightedMark) => {

    weightedMark=((marks/120)*credits)
    if(weightedMark>= 10){
        console.log(`
            weighted Mark:${weightedMark}
            Good result`
        )

    }
    else{
        console.log(`
            weighted Mark: =${weightedMark}
            bad result`
        )
    }

};
tipCal(45,10);

Using these parameters and arguments we can pass any data we want up into the function

using return keyword we can pass information back and forth between diffrent function and use functions again again

//call backfunction

sometimes we have two functions and we want to control the sequence at which they execute this typically happens
if one function relies on the output of another function data
or when one function has to wait for another function to complete before doing something
To handle call backfunction

So this format of throwing function into another function getting it executer
