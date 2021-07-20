/**
 * Create a class for the Backpack object type.
 */

 //this is hw we use a class to create a new object

 import User from "./user.js";
 const dhanith = new User(
   "Dhanith Lakjaya",
   23,
   "kadawatha",
   7,
   26,
   26,
   false
 );
 
 console.log("The everydayPack object:", dhanith);
 console.log("The pocketNum value:", dhanith.phoneNum);