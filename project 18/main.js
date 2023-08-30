"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Step 1
let favPlace = ["Makkah", "Belgium", "Madina", "Turkey", "Switzerland"];
// Step 2
console.log("Original Order:");
console.log(favPlace);
// Step 3
console.log("Alphabetical order:");
console.log([...favPlace].sort());
//Step 4
console.log("Original Order:");
console.log(favPlace);
// Step 5
let reversedFavPlace = favPlace.reverse();
console.log("Reversed Order");
console.log(reversedFavPlace);
//Step 6
favPlace.reverse();
console.log("Back to Original Order");
console.log(favPlace);
// Step 7
favPlace.sort();
console.log("Alphabetical Order");
console.log(favPlace);
// Step 8
favPlace.reverse();
console.log("Reverse Alphabetical Order");
console.log(favPlace);
