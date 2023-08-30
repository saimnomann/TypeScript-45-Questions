"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.
let magician_name = ["David Copperfeild", "David Blaine", "Lance Bourton"];
function show_magicians(magician_name) {
    for (let magician of magician_name)
        console.log(magician);
}
;
function make_great(phrase) {
    for (let magician of magician_name)
        console.log(` ${phrase} ${magician} `);
}
console.log("The modified names:");
make_great("The great magician");
console.log("The orginal magician name:");
show_magicians(magician_name);
