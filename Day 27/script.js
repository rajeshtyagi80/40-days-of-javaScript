// 1. What's the output of the code below?

// function f1() {
//     console.log('f1');
// }

// function f2() {
//     console.log('f2');
// }

// function f3() {
//     console.log('f3');
// }

// function f4() {
//     console.log('f4');
// }

// console.log("Let's do it!");

// setTimeout(function() {f1();}, 0);

// f4();

// setTimeout(function() {f2();}, 5000);

// setTimeout(function() {f3();}, 3000);

// Options are,

// Let's do it!, f4, f1, f3, f2
// Let's do it!, f1, f3, f2, f4
// Let's do it!, f1, f2, f3, f4
// Let's do it!, f1, f4, f2, f3

// Example Answer: Let's do it!, f4, f1, f3, f2
// Explanation:

// "Let's do it!" is executed by Execution Stack
// f1() calls browser API, so gets added to Callback Queue
// f4() gets added to Execution Stack and is executed
// Event loop finds a callback function f1() in callback queue & executes it
// f2() calls browser API and gets added to Callback Queue. Similarly f3() is added to callback queue
// Now there is nothing in Execution Stack, so event loop checks & finds f2() & - f3() callback functions in callback queue
// f3() goes back into the stack after timeout, and gets executed
// f2() too goes back into the stack after timeout, and gets executed


// 2. What's the output of the code below?

// function f1() {
//     console.log('f1');
// }

// console.log("Let's do it!");

// setTimeout(function() {console.log('in settimeout');}, 0);

// f1();
// f1();
// f1();
// f1();

// Options are,

// Let's do it!, in settimeout, f1, f1, f1, f1
// Let's do it!, f1, f1, f1, f1, in settimeout
// Let's do it!, f1, , in settimeout, f1, f1, f1

//Answer: Let's do it!, f1, f1, f1, f1, in settimeout

// Explanation:
// "Let's do it!" is executed by Execution Stack
// setTimeout's callback function calls browser API, so gets added to Callback Queue
// f1() gets added to Execution Stack and is executed
// f1() gets added to Execution Stack and is executed
// f1() gets added to Execution Stack and is executed
// f1() gets added to Execution Stack and is executed
// Event loop finds a callback function in callback queue & executes it


// 3. Which statements are true? Select multiple

//  JavaScript is single-threaded
//  By default, JavaScript is synchronous
//  Only promises make JavaScript asynchronous
//  All function callbacks are asynchronous

// Answer: 
//  JavaScript is single-threaded
//  By default, JavaScript is synchronous
//  All function callbacks are asynchronous



// 4. Which statement is true? Select Only one

// (_) JavaScript Function Execution Stack(Call Stack) never gets empty.
// (_) The job queue gets higher priority than the callback queue.
// (_) The only job of Event Loop is to manage the Call Stack
// (_) The StackOverflow exception is random.

// Answer: 
// (_) The job queue gets higher priority than the callback queue.



// 5. Guess the output

// const tom = () => console.log('Tom');

// const jerry = () => console.log('Jerry');

// const cartoon = () => {
//   console.log('Cartoon');

//   setTimeout(tom, 5000);

//   new Promise((resolve, reject) =>
//     resolve('should it be right after Tom, before Jerry?')
//   ).then(resolve => console.log(resolve))

//   jerry();
// }

// cartoon();
// Options are,

// Cartoon, Jerry, should it be right after Tom, before Jerry?, tom
// Cartoon, Tom, Jerry, should it be right after Tom, before Jerry?,
// Cartoon, Tom, should it be right after Tom, before Jerry?, Jerry
// Error

// Answer: 
// Cartoon, Jerry, should it be right after Tom, before Jerry?, tom

// Explanation:
// cartoon() gets added to Execution Stack and its execution is started.
// "Cartoon" is executed by Execution Stack
// tom() calls browser API, so gets added to Callback Queue
// Promise is added to Job Queue
// jerry() is added to Execution Stack and executed.
// "Jerry" is executed in Execution Stack 
// Event loop finds a callback function in Job Queue & executes it ("should it be right after Tom, before Jerry")
// tom() goes back into the stack after timeout, and gets executed
// cartoon() execution is completed



// 6. Guess the output

// const tom = () => console.log('Tom');
// const jerry = () => console.log('Jerry');
// const doggy = () => console.log('Doggy');

// const cartoon = () => {
//   console.log('Cartoon');

//   setTimeout(tom, 50);
//   setTimeout(doggy, 30);

//   new Promise((resolve, reject) =>
//     resolve('I am a Promise, right after tom and doggy! Really?')
//   ).then(resolve => console.log(resolve));
//   new Promise((resolve, reject) =>
//     resolve('I am a Promise after Promise!')
//   ).then(resolve => console.log(resolve));

//   jerry();
// }

// cartoon();

// Options are,

// Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, , Tom, Doggy
// Cartoon, Jerry, I am a Promise after Promise!, I am a Promise, right after tom and doggy! Really?, Doggy, Tom
// Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom
// Cartoon, Tom, Doggy, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Jerry
// None of the above.

// Answer: 
// Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom

// Explanation:
// cartoon() goes to Execution Stack and its execution is started
// "Cartoon" is executed by Execution Stack
// tom() calls browser API, so gets added to Callback Queue
// doggy() calls browser API, so gets added to Callback Queue
// First Promise is added to Job Queue
// Second Promise is added to Job Queue
// jerry() goes to Execution Stack and Executed ("Jerry")
// Event loop finds a callback function in Job Queue & executes it ("I am a Promise, right after tom and doggy! Really?")
// Event loop finds a callback function in Job Queue & executes it ("I am a Promise after Promise!")
// doggy() goes back into the stack after timeout, and gets executed ("Doggy")
// tom() goes back into the stack after timeout, and gets executed ("Tom")
// cartoon() execution is completed



// 7. Guess the output

// const f1 = () => console.log('f1');
// const f2 = () => console.log('f2');
// const f3 = () => console.log('f3');
// const f4 = () => console.log('f4');

// f4();

// setTimeout(f1, 0);

// new Promise((resolve, reject) => {
//     resolve('Boom');
// }).then(result => console.log(result));

// setTimeout(f2, 2000);

// new Promise((resolve, reject) => {
//     resolve('Sonic');
// }).then(result => console.log(result));

// setTimeout(f3, 0);

// new Promise((resolve, reject) => {
//     resolve('Albert');
// }).then(result => console.log(result));

// Options are,

// f4, Boom, Sonic, Albert, f1, f3, f2
// f4, f1, Boom, f2, Sonic, f3, Albert
// f4, Boom, Sonic, Albert, f3, f1, f2
// f4, Boom, Sonic, Albert, f1, f2, f3

// Answer: 
// f4, Boom, Sonic, Albert, f1, f3, f2

// Explanation:
// f4() goes to Execution Stack and executed ("f4")
// f1() calls browser API, so gets added to Callback Queue
// First Promise is added to Job Queue
// f2() calls browser API, so gets added to Callback Queue
// Second Promise is added to Job Queue
// f3() calls browser API, so gets added to Callback Queue
// Third Promise is added to Job Queue
// Event loop finds a callback function in Job Queue & executes it ("Boom")
// Event loop finds a callback function in Job Queue & executes it ("Sonic")
// Event loop finds a callback function in Job Queue & executes it ("Albert")
// f1() goes back into the stack, and gets executed ("f1")
// f3() goes back into the stack, and gets executed ("f3")
// f2() goes back into the stack after timeout, and gets executed ("f2")



// 8. Guess the output

// const f1 = () => {
//     console.log('f1');
//     f2();
// }
// const f2 = () => console.log('f2');
// const f3 = () => console.log('f3');
// const f4 = () => console.log('f4');

// f4();

// setTimeout(f1, 0);

// new Promise((resolve, reject) => {
//     resolve('Sonic');
// }).then(result => console.log(result));

// setTimeout(f3, 0);

// new Promise((resolve, reject) => {
//     resolve('Albert');
// }).then(result => console.log(result));

// Options are,

// f4, f1, f2, Sonic, f3, Albert
// f4, Sonic, Albert, f3, f1, f2
// f4, Sonic, Albert, f1, f2, f3
// f4, Albert, Sonic, f1, f2, f3

// Answer: 
// f4, Sonic, Albert, f1, f2, f3

// Explanation:
// f4() goes to Execution Stack and executed ("f4")
// f1() calls browser API, so gets added to Callback Queue
// First Promise is added to Job Queue
// f3() calls browser API, so gets added to Callback Queue
// Second Promise is added to Job Queue
// Event loop finds a callback function in Job Queue & executes it ("Sonic")
// Event loop finds a callback function in Job Queue & executes it ("Albert")
// f1() goes back into the stack, and gets executed ("f1"), execution continue..
// f2() goes back into the stack, and gets executed ("f2")
// f1() execution complete
// f3() goes back into the stack, and gets executed ("f3")







