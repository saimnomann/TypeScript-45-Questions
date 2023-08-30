"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.
function makeSandwich(...items) {
    console.log("Sandwich Summary:");
    if(items===0){
        console.log("You have ordered an empty sandwich.Please add someitem");
    }
    else{
        items.forEach((item,i)=>{
           console.log( `${i +1}.${item}`)});
        }
    }

makeSandwich("tomato ketchup","garlic sauce","Beef","mustard");
makeSandwich("chicken","ketchup","mayo");
makeSandwich("sausage","turkey","ketchup");