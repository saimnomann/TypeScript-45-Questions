 // Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name.
//  It should then accept an arbitrary number of keyword arguments. 
//  Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
//  Print the Object that’s returned to make sure all the information was stored correctly.
interface car{
  manufacturer:string;
  modelName:string;
 [key:string]:any
}
function createCar(manufacturer:string,modelName:string,...args:[string,any][]):car
{
let car:car={manufacturer,modelName}
;
args.forEach(([key,value])=> {
      car[key]=value;
});
return car;
}

let myCar=createCar("Honda","Civic",["color","black"],["Optional Feature","Electric Car"]);
console.log(myCar);