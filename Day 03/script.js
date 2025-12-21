// 1. Odd or Even?
// Take a number and find if the number is an odd or even number.
// Print the number and result in the console.

let givenNumber = 5010;
console.log(givenNumber)
console.log("is a")
console.log(givenNumber % 2 ? "odd" : "even")
console.log("number")

// 2. Do you have a Driving License?
// Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.
//  Manage age as a variable.
//  Check if the age is elligible for a driving license and print it on the console accordingly.

let age = 20;
console.log(age >=18 ? "You're eligible to get a Driving License" : "You're not eligible to get a Driving License")

// 3. Calculate CTC with a Bonus
// Let's calculate how much you earn from your office.
//  You get 12,300 rupees as your monthly salary.
//  You get a 20% bonus on your annual salary.
//  How much money do you make per annum as a CTC?

let monthlySalary = 12300;
console.log("CTC")
console.log(monthlySalary * 12 + monthlySalary * 12 * .2)      // CTC = annual salary + 20% Bonus

// 4. Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!
//  Create a color variable.
//  Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

let signalColor = "red";
console.log(signalColor === "red" ? "STOP" : "GO")

// 5. Create an Electricity Bill Calculator
// Let's calculate how much you pay for electricity bills per month and annually.
//  Create a units variable. Based on this value you will calculate the total electricity bill for a months.
//  If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
//  If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

let unitsConsumedPerDay = 20;
let monthlyPayment = unitsConsumedPerDay * 150 * 30;    // unit consumed * unit price * days in month
console.log("Monthly Pyment in Rupees")
console.log(monthlyPayment) 
console.log("Total annual payment (20% discount applied)")
console.log(monthlyPayment * 12 - monthlyPayment * 12 * .2)      // annual payment = annual payment - 20% of annual payment


// 6. Leap Year Checker
// Is 2025 a Leap Year?
//  Take year as input.
//  Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

let year = 2024;
let isLeapYear = year % 4 ? "Not a Leap Year" : "Leap Year";
console.log(isLeapYear)

// 7. Max of Three Numbers
// Find the max number from the lot.
//  Take three numbers and assign them to variables p, q, and r.
//  Now find the maximum of these three numbers using the comparison operators.

let p = 100, q = 23, r = 30;
let maxFromPQ = p > q ? p : q;
let maxFromPQR = maxFromPQ > r ? maxFromPQ : r;
console.log("Maximum Number is")
console.log(maxFromPQR)

// 8. Bitwise Doubling
// A tricky one for you
//  Create a variable count and assign a value, say, 5.
//  Now use the Bitwise shift operator to make the number double.
//  Print it on the console.

let number = 5;
console.log("Double of the number is")
console.log(number << 1)          // left shift number by 1 to make it double