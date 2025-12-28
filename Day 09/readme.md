## Temporal Dead Zone(TDZ)

//TDZ = an area where you can not access a variable until it is initialized

{

// === name, address, occupation variable's TDZ started here
//
console.log(name); // RerenceError
//
console.log(address); // RerenceError
let address = "Delhi"; // === address variable's TDZ ends here
//
let name = "Raghu" // === name variable's TDZ ends here
console.log(name);
//
//
//
console.log(occupation) // ReferenceError
//
let occupation = "Farming"; // === occupation variable's TDZ ends here
//
console.log(occupation);

}

## **Variable Hoisting**

//When a variable is used before declaration is called variable hoisting.

//Variable hoisting can only be done if we declare a variable with var key word.

console.log(”My name is “, name);

var name = Raman;

console.log(”My name is “, name);

## Function Hoisting

//Function hoisting: when function is invoked before it is declared.

// Invoke a function chase()

chase()

// declare the function chase()

function chase() {

console.log(”Raman chased a bus”);

// Invoke a function caught()

caught();

}

// declare the function caught()

function caught() {

console.log(”Raman caught the bus);

}
