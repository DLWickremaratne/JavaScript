/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

 var color = "purple";

 document.querySelector(".left").style.backgroundColor = color;
 document.querySelector(".left .color-value").innerHTML = color;
 

 color = "skyblue;"


 function headingColor() {
    let titlecolor = "blue";
    document.querySelector(".title").style.color = titlecolor;
    console.log("inside:",titlecolor);
  }

  headingColor();

console.log("outside:",titlecolor);

 document.querySelector(".right").style.backgroundColor = color;
 document.querySelector(".right .color-value").innerHTML = color;
 headingColor();

