// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// Step 1
let firstName="Saim";
console.log("Test for equality and inequality:");
console.log(firstName==="Saim");
console.log(firstName !="Saim");

//Step 2
console.log("Test using the lower case function:");
console.log(firstName=="saim");
console.log(firstName!="saim");

// Step 3
let age=16;
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:");
console.log(age==16);
console.log(age!=16);
console.log(age<=16);
console.log(age>=16);
console.log(age<16);
console.log(age>16);

// Step 4
let userName="Saim";
let pass=1234;
console.log("Tests using and and or operators");
console.log(userName==="Ali" && pass===1234);
console.log(userName==="ALi" || pass===1234);

// Step 5
let fruits=["apple","mango","banana","pineapple"];
console.log("Test whether an item is in a array or not in an array");
console.log(fruits.includes("banana"));
console.log(fruits.includes("grapes"));