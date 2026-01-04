// 2. What is the problem here? Fix it to log the correct name and explain the fix

// const user = {
//   name: "tapaScript",
//   greet: () => {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// user.greet();

// solution:

const user = {
    name: "tapaScript",
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    }
};
user.greet();

// Explanation: this keyword is used inside a function used as method. On which object the method is executed "this" keywork
//              resolve to that object.






// 3. Can you explain what is the problem here and fix the issue to log the correct name?

// const obj = {
//   name: "Tom",
//   greet: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// const greetFn = obj.greet;
// greetFn();


// Explanation: When the value of obj.greet is assigned to greetFn, value is assigned as standalone function. After that 
//              greetFn has no connection to obj. Problem can be fixed by taking the console.log statement inside an arrow
//              function and returning that function.

const obj = {
    name: "Tom",
    greet: function () {
        return () => {
            console.log(`Hello, ${this.name}!`);
        }
    }
};
const greetFn = obj.greet();
greetFn();




// 4. What is the problem with the following code? Why isn't it logging the name correctly?

// const user = {
//   name: "Alex",
//   greet: function () {
//     function inner() {
//       console.log(`Hello, ${this.name}!`);
//     }
//     inner();
//   },
// };

// user.greet();

// Explanation: On execution of inner function this keywork will not resolve to "user" because inner function is nested inside
//              a function. We can solve it converting inner to an arrow function.

const user1 = {
    name: "Alex",
    greet: function () {
        const inner = () => {
            console.log(`Hello, ${this.name}!`);
        };
        inner();
    },
};

user1.greet();





// 5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this
//  keyword. Then, create two sports instances and log their details

function Sports (name, numberOfPlayers) {
    this.name = name,
    this.numberOfPlayers = numberOfPlayers
}

const cricket = new Sports("cricket", 11);
const volleyball = new Sports("volleyball", 6);
console.log(cricket, volleyball);




// 6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of

const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

car1.describe.call(car2); //solution one
car1.describe.apply(car2); //solution two
const carDescription = car1.describe.bind(car2); // solution three 
carDescription();




// 7. What will be the output of the following code and why?

const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();

// Output: "Charlie"
//          Undefined

// Explanation: this word in sayHello method resolve to the object containing sayHello method.
//              this word in arrow function resolve to its parent's scope. Arrow function's parent is person object 
//              and persons's scope is global.