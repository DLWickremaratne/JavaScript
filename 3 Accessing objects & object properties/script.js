const admin = {

    name: "Dhanith Lakjaya",
    age: 23,

    results: {

        Java: "A+",
        ADMS: "A",
    },

};

// accessing objects(output in console)

console.log("The admin object: ", admin);




//two ways of accessing object properties
//1 dot notation
//easy to read and understand


console.log("The Age value: ", admin.age);
console.log("Exam results ADMS:", admin.results.ADMS);


//2 bracket notation
//more control(Ex:variable as a property name )

//
console.log("The Age value: ", admin["age"]);

//
var query = "name";
console.log("The Age value: ", admin["name"]);










