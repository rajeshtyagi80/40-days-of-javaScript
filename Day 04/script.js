console.log("Day 04")

/* 1. What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}*/


// Answer: The output will be "It's a normal day." Because value matching in switch-case statement is 
//         case sensitive.




/* 2. Build an ATM Cash Withdrawal System
Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100.
Print “Withdrawal successful” if valid, otherwise print “Invalid amount”. */


let amount = 4010;
console.log(amount % 100 ? "Invalid amount" : "Withdrawal successful")



/*3. Build a Calculator with switch-case Write a simple calculator that takes an operator (+, -, , /, %) as input,
and performs the operation on two numbers. Print the output on the console. */



let firstNumber = 109, secondNumber = 51, operation = "%";
switch (operation) {
    case "+": console.log("Sum of two numbers is")
        console.log(firstNumber + secondNumber)
        break;
    case "-": console.log("Difference of two numbers is")
        console.log(firstNumber - secondNumber)
        break;
    case "*": console.log("Product of two numbers is")
        console.log(firstNumber * secondNumber)
        break;
    case "/": console.log("Result of division of two numbers is")
        console.log(firstNumber / secondNumber)
        break;
    case "%": console.log("Remainder of division of two numbers is")
        console.log(firstNumber % secondNumber)
        break;
    default: console.log('Not a valid case')
}



/* 4. Pay for your movie ticket
Imagine, the INOX charges ticket prices based on age:
Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age. */



let age = 52;
if (age > 60) {
    console.log("Ticket price is $8")
} else if (age >= 18 && age <= 60) {
    console.log("Ticket price is $10")
} else {
    console.log("Ticket price is $3")
}


/* 5. Horoscope Sign Checker
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based.
Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else. */


let birthMonth = "June and July";

switch (birthMonth) {
    case "March and April": console.log("Your Zodiac Sign is Aries")
        break;
    case "April and May": console.log("Your Zodiac Sign is Taurus")
        break;
    case "May and June": console.log("Your Zodiac Sign is Gemini")
        break;
    case "June and July": console.log("Your Zodiac Sign is Cancer")
        break;
    case "July and August": console.log("Your Zodiac Sign is Leo")
        break;
    case "August and September": console.log("Your Zodiac Sign is Virgo")
        break;
    case "September and October": console.log("Your Zodiac Sign is Libra")
        break;
    case "October and November": console.log("Your Zodiac Sign is Scorpio")
        break;
    case "November and December": console.log("Your Zodiac Sign is Sagittarius")
        break;
    case "December and January": console.log("Your Zodiac Sign is Capricon")
        break;
    case "January and February": console.log("Your Zodiac Sign is Aquarius")
        break;
    case "Febuary and March": console.log("Your Zodiac Sign is Pisces")
        break;
    default: console.log("Put month in correct format: 'March and April'")
}



/* 6. Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:

All sides equal is called, Equilateral Triangle.
Two sides equal is called, Isosceles Triangle.
All sides different is called, Scalene Triangle.
Take the sides of a triangle as input and write a program to determine the triangle type.
Change the inputs everytime manually to see if the output changes correctly.*/

let sideA = 23, sideB = 23, sideC = 23;

if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) {
    console.log("Triangle is valid")

    if (sideA === sideB && sideB === sideC) {
        console.log("Triangle is Equilateral")
    } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
        console.log("Triangle is Isoceles")
    } else {
        console.log("Triangle is Scalene")
    }
    
} else {
    console.log("Triangle is not valid")
}
