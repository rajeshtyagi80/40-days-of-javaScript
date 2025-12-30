//1. What will be the output of the following code and why?

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();

// output: 1
//         2 
// This is example of closure. A closure allows a function to access a variable from its outer scope even 
// after the outer scope finished the execution.



// 2. What will be the output and why?

function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());

// output: 100 
// In last statement testClosure() is returning a function, which is then executed in the statement.
// upon execution that function returns "x * x". Hence the answer.



//3. Create a button dynamically and attach a click event handler using a closure. The handler should count 
// and log how many times the button was clicked.

function setupButton() {
    let clickCount = 0;

    document.getElementById("myButton").addEventListener("click", function() {
        clickCount++;
        console.log("Button clicked ",clickCount," times")
    });
}
setupButton();



// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier) {
        return function(number) {
        console.log(multiplier * number);
    }
}

let result = createMultiplier(5);
result(10);



// 5. What happens if a closure references an object?
// (i) The object is garbage collected immediately
// (ii) The object remains in memory as long as the closure exists
// (iii) The object is automatically cloned
// (iv) None of the Above.

// Answer: (ii) The object remains in memory as long as the closure exists.





// 6. Write a function factory of counter to increment, decrement, and reset a counter.
// Use closure to refer the count value across the functuions.

function counterFactory() {
    let counter = 0;
    return {
        increment: () => {
            counter++; console.log("Incremented counter, it's value is", counter)},
        decrement: () => {
            counter--; console.log("Decremented counter, it's value is", counter)},
        reset: () => {
            counter = 0; console.log("Reseted counter, it's value is", counter)}
    }
}
let check = counterFactory();
check.increment();
check.increment();
check.increment();
check.decrement();
check.reset();
check.increment();