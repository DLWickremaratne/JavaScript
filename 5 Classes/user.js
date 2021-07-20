/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */


/*
Classes work as templates for an object type,
the object automatically gets all the properties,and methoad of that class,
that means we can change the properties of the class or the methoads of the class 
and those changes apply to every single instance of that class
*/

 class User {
    constructor(
      // Defines parameters:
      //constructor is a methad inside the class
      
      name,
      age,
      address,
      phoneNum,
      LengthL,
      LengthR,
      Online
    ) {
      // Define properties:
      this.name = name;
      this.age = age;
      this.address = address;
      this.phoneNum = phoneNum;
      this.Length = {
        left: LengthL,
        right: LengthR,
      };
      this.Online = Online;
    }
    // Add methods like normal functions:
    toggleLid(lidStatus) {
      this.Online = lidStatus;
    }
    newStrapLength(lengthLeft, lengthRight) {
      this.Length.left = lengthLeft;
      this.Length.right = lengthRight;
    }
  }
  
  export default User;
  