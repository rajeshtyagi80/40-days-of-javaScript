// 1. Pass a function to greet a user and then thank them

function greet(name, sayHi) {

    console.log(`Hi ${name}.`);
    sayHi();
};

greet("John", function () {
    console.log("Thank you.")
});


// 2. Implement a calculator function that accepts two numbers and a callback to perform operations like add, subtract
// function calculator(a, b, operationCallback) {
//   // Complete this function
// }

// function add(x, y) {
//   return x + y;
// }

// // Test calculator(5, 3, add);
// Also test it with subtract, multiply, divide functions.

function calculator(a, b, operationCallback) {
    const result = operationCallback(a, b);
    console.log(result);
};

function add(x, y) {
    console.log("Addition of two numbers is");
    return x + y;
};

function subtract(x, y) {
    console.log("Subtraction of two numbers is");
    return x - y;
};

function multiply(x, y) {
    console.log("Multiplication of two numbers is");
    return x * y;
};

function divide(x, y) {
    console.log("Division of two numbers is");
    return x / y;
};

calculator(3, 5, multiply);



// 3. Create a delayedMessage function that prints a message after a delay using setTimeout
// function delayedMessage(message, delay, callback) {
//   // Your code here
// }

// // delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"))

function delayedMessage(message, delay, callback) {

    console.log(message);

    setTimeout(() => {
        callback();
    }, delay);
}

delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"));


//4. Implement a function that filters numbers in an array based on a condition provided via callback

// function filterNumbers(arr, conditionCallback) {
//   // Use loop and callback to return filtered array
// }

// // Example: filterNumbers([1, 2, 3, 4], n => n > 2) // should return [3, 4]


function filterNumbers(arr, conditionCallback) {

    const filteredArray = [];

    arr.forEach(element => {

        if (conditionCallback(element)) {
            filteredArray.push(element);
        };

    });

    console.log(filteredArray);
};

function condition(n) {
    return n > 2;
};

filterNumbers([1, 2, 3, 4], condition);


// 5. Execute a sequence of tasks one after another using callbacks
// function task1(callback) {
//   console.log("Task 1 done");
//   callback();
// }

// function task2(callback) {
//   console.log("Task 2 done");
//   callback();
// }

// function task3() {
//   console.log("Task 3 done");
// }

// Call them in sequence using nested callbacks


function task1(callback) {
    console.log("Task 1 done");
    callback();
};

function task2(callback) {
    console.log("Task 2 done");
    callback();
};

function task3() {
    console.log("Task 3 done");
};

task1(() => {
    task2(() => {
        task3();
    });
});

