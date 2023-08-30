// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


// Step1

let magician_name=["David Copperfeild","David Blaine","Lance Bourton"]


function show_magicians(magicians:string[]){
 for (let magician of magicians){
 console.log(magician)};
}
function make_great(magicians:string[]){
    let great_magicians=magicians.map(magician=>`The great ${magician}`);
    return great_magicians;
}
let greatMagicianName=make_great(magician_name);
console.log("The great magician name:")
show_magicians(greatMagicianName);

console.log("The orginal magician name:")
show_magicians(magician_name);