"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let firstName = "muhammad saim noman";
let lowerCase = firstName.toLowerCase();
console.log(lowerCase);
let upperCase = firstName.toUpperCase();
console.log(upperCase);
let words = firstName.split(" ");
let titleCaseName = "";
for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titleCaseName);
