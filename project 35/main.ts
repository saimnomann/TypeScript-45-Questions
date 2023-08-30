 // Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//   • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// Step 1
let animals=["dog","cat","horse"]
console.log("List of animals:")
for(let animal of animals){
    console.log(animal);
};

// Step 2
for(let animal of animals){
if(animal==="dog"){
    console.log(`A ${animal} would be a great pet`);
}

else if(animal=== "cat"){
    console.log(`${animal} are very cute`);
}
else{
console.log(`A ${animal} can be a good friend`)};
}

// Step 3
console.log("What these pets have common in them: ")
console.log("Any of these animals are great pet")