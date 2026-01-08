// 1. What will be the output of the following code?

try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name);
}

// Output: An error occured: ReferenceError.





// 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance.
// If any condition fails, throw appropriate errors

function processPayment(amount) {
  let = balance = 1000;

  try {
    if (amount < 0) throw new Error("Enter positive amount.");
    if (amount > balance) throw new Error("Amount exceed balance");

  } catch (error) {
    console.error("Cannot Proceed:", error.message);
  }
}
processPayment(1500);





// 3. Implement a custom error handling system for an e-commerce website that categorizes errors as
// UserError
// PaymentError
// ServerError
// EmailError

function UserError(message) {
  this.name = "User Error:",
  this.message = message
}

function PaymentError(message) {
  this.name = "Payment Error:",
  this.message = message
}

function ServerError(message) {
  this.name = "Server Error:",
  this.message = message
}

function EmailError(message) {
  this.name = "Email Error:",
  this.message = message
}

const userName = "Rohan";
const amount = 100;
const data = "";
const email = "some@somewhere.com";

  try {
    if (!userName) throw new UserError("User name required.")
    if (amount>100) throw new PaymentError("Insufficent balance")
    if (!data) throw new ServerError("Unabel to fetch data")
    if (!email) throw new EmailError("Email required.")
  }
  catch (error) {
    console.error(error.name, error.message)
  }








// 4. Simulate an API call function fetchData(url).
//  If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

function fetchData(url) {
  try {
    if (!url.includes("https")) throw new Error("Invalid URL: URL must contain 'https'");
  }
  catch (error) {
    console.error("URL Error:", error.message);
  }
}
fetchData("htts:/goname.com")




// 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors

const userInput = { username: "", age: 2 };

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number

function ValidationError(message) {
  this.name = "ValidationError:",
    this.message = message
}

function validateUser(userInput) {

  if (!userInput.username) throw new ValidationError("Provide user name");
  if (userInput.age < 0) throw new ValidationError("Age must be a positive number.");
  return "New user created."

}

try {
  const message = validateUser(userInput);
  console.log(message);
}
catch (error) {
  console.error(error.name, error.message);
}




// 6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition),
//  throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources.  

function readFile(filePath) {
  try {
    if (!filePath) throw new Error("File not found");
    console.log("Reading file...");
    console.log("File read complete.");
  }
  catch (error) {
    console.log(error.message);
  }
  finally {
    console.log("Releasing the IO resources.");
  }
}

readFile("c:newFolder/file.doc")





// 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse().
// If parsing fails, catch the error and return "Invalid JSON"

function parseJson(str) {
  try {
    const obj = JSON.parse(str);
  }
  catch (error) {
    return "Invalid JSON"

  }
}
const message = parseJson('{"name":"John", "age":30, "city":"New York"}');
if (message) console.log(message);




// 8. What is the purpose of throw in JavaScript?
// It catches an error.
// It stops the execution of a program.
// It creates a new error manually.
// It prints an error message.

// Answer: It creates a new error manually.





// 9. What does the finally block do in a try...catch statement?
// Runs only if an error occurs.
// Runs only if no error occurs.
// Runs regardless of whether an error occurs or not.
// Stops the execution of the script.



// 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object

// Answer: Table is in readme.md file.