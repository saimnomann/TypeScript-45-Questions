// // Pizzas: Think of at least three kinds of your favorite pizza.
//  Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// // • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
//  For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// // • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
// The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

// Step 1
console.log("I like this pizza:")
let favorite_pizza=["pepperoni pizza","malai boti pizza","chicken fajita pizza"];

// Step 2
for (let i=0;i<favorite_pizza.length;i++){
    console.log(favorite_pizza[i]);
}

// Step 3
console.log("\nMy favourite pizza are:")
for(let j=0;j<favorite_pizza.length;j++){
    console.log(`I like ${favorite_pizza[j]}`)
}
// Step 4
console.log("\nI really love pizza");