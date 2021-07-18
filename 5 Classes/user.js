/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

 class User {
    constructor(
      // Defines parameters:
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
  