/* 1. Write a Function to Convert Celsius to Fahrenheit
Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit */



function celsiusToFahrenheit(celsius) {
    let Fahrenheit = celsius * 9 / 5 + 32;
    console.log("Temperature in Fahrenheit", Fahrenheit)
}
celsiusToFahrenheit(37)



/* 2. Create a Function to Find the Maximum of Two Numbers
Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well. */



function findMax(num1, num2) {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}

let greaterNumber = findMax(-22, -33);
console.log("Greater number is", greaterNumber)


/* 3. Function to Check if a String is a Palindrome
Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far. */



function isPalindrome(str) {
    let strLength = str.length;
    for (i = strLength - 1, j = 0; i >= 0 && j <= strLength - 1; i--, j++) {

        if (str.charAt(i) !== str.charAt(j)) {
            return "Not a Palindrome string"
        }

    }
    return "Given string is a Palindrome string"
}
console.log(isPalindrome("sdracecards"))




/* 4. Write a Function to Find Factorial of a Number
Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1 */


function factorial(n) {
    let factNumber = 1;
    for (let i = n; i >= 1; i--) {
        factNumber *= i;
    }
    return factNumber;
}
console.log(factorial(7))



/* 5. Write a function to Count Vowels in a String
Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string. */


function countVowels(str) {
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str.charAt(i) === "a" || str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "u") {
            count += 1;
        }

    }
    return count;
}
let vowelsNumber = countVowels("Good day");
console.log("Number of vowels are: ", vowelsNumber)


/* 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase. */


function capitalizeWords(sentence) {
    let flag = false;
    let newChar = "";
    let newSentence = "";
    let firstChar = sentence.charAt(0).toUpperCase();
    newSentence += firstChar;
    for (i = 1; i <= sentence.length - 1; i++) {

        if (flag) {
            flag = false;
            continue;
        }

        if (sentence.charAt(i) === " ") {
            newSentence += sentence.charAt(i);
            newChar = sentence.charAt(i + 1).toUpperCase();
            newSentence += newChar;
            flag = true;
        } else {
            newSentence += sentence.charAt(i);
        }

    }
    console.log(newSentence);
}
capitalizeWords("i love my india.");



/* 7. Use an IIFE to Print “Hello, JavaScript!”
Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument. */


(function (someName) {
    console.log("Hello ", someName);
})("JavaScript");



/* 8. Create a Simple Callback Function
Write a function greet(name, callback), where callback prints a message using the name parameter. */




function greet(name, callback){
    callback(name);
}

function message(name2) {
    console.log("Hello ",name2)
}
greet("Rohan", message);




/* 9. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {
    f1();
}
f2();


//diagram in flowchart.png file.


10. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1(); */

//diagram in flowchart.png file.

