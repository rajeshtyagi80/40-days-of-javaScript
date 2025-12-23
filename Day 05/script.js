console.log("Day 05")
/* 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
*
* *
* * *
* * * *
* * * * *   */


for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = i; j >= 1; j--) {
        star = star + "* "
    }
    console.log(star)
}


/* 2. Craete Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30 */


let N = "8";   // using quotes to convert number into string to avoid browser putting quotes in result in console window.
for (let i = 1; i <= 10; i++) {
    console.log(N, " x ", i, " = ", N * i)
}



/* 3. Find the summation of all odd numbers between 1 to 500 and print them on the console log. */

let sum = 0;
for (let i = 1; i < 500; i += 2) {
    sum = sum + i;
}
console.log("Sum of all odd number till 500 is ", sum)



/* 4. Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3. */



for (let i = 1; i <= 20; i++) {
    if (i % 3 !== 0) {
        console.log(i)
    }
}



/* 5. Reverse Digits of a Number (Using while loop)
Write a program to reverse the digits of a given number using a while loop.
Example:
Input: 6789
Output: 9876 */


let num = "24567869";
let numLength = num.length;
let newNumber = "";
while (numLength > 0) {
    newNumber = newNumber + num.charAt(numLength - 1)
    numLength--;
}
console.log(newNumber)


/* 6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts. */

/*
A for loop is best when we know exactly how many times we need to run a block of code.
we can initialize counter in "for" statement or before.

A while loop runs as long as a given condition is true. It’s best when we don’t know in advance how many iterations are needed.

A do-while loop ensures that the code executes at least once before checking the condition. 

flow chart is in flowchart.png file*/