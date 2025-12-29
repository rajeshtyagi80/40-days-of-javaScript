// 1. What will be the output of the following code and why?

let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();

//output: Bob

// In the execution phase of inner() there is one statement to execute which uses "user" as a variable, programme will look 
// for "user" initialization in inner() function scope but it will not find it there. Then programme will look for "user" 
// initialization one level up i.e. outer() function scope. It will find there "user" is initialized as "Bob. Hence the result.



//2. What is the mistake in the code below?

let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);

// Declaration of "total" is in blobal scope and it is used in function scope. When we use that variable more
// then once in execution, it will have some residue value which will give unexpected result. So "total" variable 
// should be declared in function add() where it is used.



// 3. Create a function with a nested function and log a variable from the parent function.

function SomeOuter() {
    let name = "Anand";
    function SomeInner() {
        console.log(name);
    }
    SomeInner();
}
SomeOuter();



// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function loopFunc() {
    for ( let i = 1; i<=2; i++) {
        let holiday = "firstJan";
        var festival = "Holi"
        console.log(holiday);
    }
    console.log(festival);
}
loopFunc();

// Variable declared with "var" keyword can be accessed outside of loop.



// 5. Write a function that tries to access a variable declared inside another function.

function cricket() {
    let captain = "Sunil Gavaskar";
}

function football() {
    console.log("Our team's captain is ", captain);  // ReferenceError
}

football();



// 6. What will be the output and why?

console.log(a);   // ReferenceError Cann't access "a" before initialization
let a = 10;  




//7. Where is the age variable accessible?

//Options:
//A: In Global
//B: Only inside showAge
//C: It will cause an error
//D: None of the above


//B: Only inside showAge()

function showAge() {
    let age = 25;
    console.log(age);  // "age" is accessible here
}

console.log(age);  // ReferenceError because age is not defined in Global scope.



// 8. What will be the output and explain the output?

let message = "Hello";

function outerFunc() {
    let message = "Hi";

    function innerFunc() {
        console.log(message);
    }

    innerFunc();
}

outerFunc();

// Output will be "Hi"
// In the execution phase of innerFunc() there is one statement which accesses "message" , programme will look 
// for "message" initialization in innerFunc() function scope but it will not find it there. Then programme will look for "message" 
// initialization one level up i.e. outerFunc() function scope. It will find there "message" is initialized as "Hi". Hence the result.



// 9. What will be the output and why?

let x = "Global";

function outerFun() {
    let x = "Outer";

    function innerFun() {
        let x = "Inner";
        console.log(x);
    }

    innerFun();
}

outerFun();

// Output will be "Inner"
// In the execution phase of innerFun() there is one statement which accesses "x" , programme will look 
// for "x" initialization in innerFun() function scope and it will not find there "x is initialized as "Inner.
// Hence the result.




//10. What will be the output and why? 

function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();

// output: -1
//         -2 
// It happens because of closures. A closure allows a function to access a variable from its outer scope even 
// after the outer scope finished the execution.