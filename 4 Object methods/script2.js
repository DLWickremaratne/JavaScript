const admin = {

    name: "Dhanith Lakjaya",
    age: 23,

    results: {

        Java: "A+",
        ADMS: "A",
    },

    //funtion is inside an object it is called a method
    //property changing features inside objects
    semStart: false,
    semid: function (semStatus) {

        this.semStart = semStatus;
    },


};


console.log("before:", admin.semStart)

admin.semid(true)

console.log("after:", admin.semStart)



//pass value to a function inside the parenthesis
//refer to current object as "this"