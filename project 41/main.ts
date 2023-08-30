// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician_name=["David Copperfeild","David Blaine","Lance Bourton"]
function show_magicians(magician_name:string[]){
    for (let magician_names of magician_name){
           console.log(magician_names);
    }
}

show_magicians(magician_name);