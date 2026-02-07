// 1. Create Your First Promise
// Create a Promise that resolves with the string "Hello, Promises!" after 1 second.
// Log the result using .then().

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, Promises!");
  }, 1000);
});

promise1.then((resolve) => {
  console.log("Task 01:", resolve);
})

// 2. Reject a Promise
// Create a Promise that immediately rejects with the message "Something went wrong!".
// Handle the error using .catch().

const promise2 = new Promise((resolve, reject) => {

  reject("Something went wrong!");
});

promise2.catch((error) => {
  console.error("Task 02:", error);
})

// 3. Simulate Coin Toss
// Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second.

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let output = Math.floor(Math.random() * 2);
    output = output === 0 ? "Head" : "Tail";
    resolve(output);
  }, 1000);
});

promise3.then((output) => {
  console.log("Task 03:", output);
})

// 4. Promise with Condition
// Create a function checkAge(age) that returns a Promise.
// Resolve if age >= 18, reject otherwise.

function checkAge(age) {

  return new Promise((resolve, reject) => {

    if (age >= 18) resolve();
    reject();

  });
};

checkAge(17)
  .then(() => console.log("Task 04: Age is greater than or equal to 18"))
  .catch(() => console.log("Task 04: Age is smaller than 18"));

// 5. Chain Promises Sequentially
// Create three Promises that log:
// "Step 1 done"
// "Step 2 done"
// "Step 3 done"
// Chain them using .then().

const promise4 = new Promise((resolve, reject) => {
  resolve("Step 1 done");
});

const promise5 = new Promise((resolve, reject) => {
  resolve("Step 2 done");
});

const promis6 = new Promise((resolve, reject) => {
  resolve("Step 3 done");
});

promise4
  .then((resolve) => {
    console.log("Task 05:", resolve)
    return promise5;
  })
  .then((resolve) => {
    console.log("Task 05:", resolve);
    return promis6;
  })
  .then((resolve) => {
    console.log("Task 05:", resolve);
  });

// 6. Value Transformation in Chain
// Create a Promise that resolves with 5.
// Chain .then() handlers to double it, then square it.
// Final output should be 100.

const promise7 = new Promise((resolve, reject) => {
  resolve(5);
});

promise7
  .then((result) => {
    result = result * 2;
    return result;
  })
  .then((result) => {
    result = result * result;
    return result;
  })
  .then((result) => {
    console.log("Task 06:", result)
  })


// 7. Chain with Random Rejection
// First .then() resolves to "Start".
// Second .then() randomly throws an error or returns "Continue".
// Handle rejection gracefully.

const promise8 = new Promise((resolve, reject) => {
  resolve("Start");
});

promise8
  .then((result) => {
    console.log("Task 07", result);
    let random = Math.floor(Math.random() * 2);
    if (random === 1) {
      return "Continue";
    } else {
      throw new Error("Some error Occured");
    }
  })
  .then((result) => {
    console.log("Task 07:", result);
  })
  .catch((error) => {
    console.error("Task 07:", error);
  })


// 8. Multiple then() calls on same Promise
// Create a single resolved Promise.
// Attach two different .then() handlers to it.
// Explain that both run independently.


let promise9 = new Promise(function (resolve, reject) {
  resolve(10);
});

promise9
  .then(function (value) {
    value++;
    return value;
  })
promise9
  .then(function (value) {
    value = value + 10;
    return value;
  })

// Explanation: The above two .then() handlers are independent because second .then() handler does not depend on
// return value of first .then() handler, the second .then() handler is handling the original promise9.




// 9. Return New Promises in .then()
// Chain multiple .then() where each returns a new Promise with a delay and logs a step like:
// “First”
// “Second”
// “Third”

const promise10 = new Promise((resolve, reject) => {
  resolve("First");
});

promise10
  .then((result) => {
    console.log("Task 09:", result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Second");
      }, 1000);
    });
  })
  .then((result) => {
    console.log("Task 09:", result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Third");
      }, 1000);
    });
  })
  .then((result) => {
    console.log("Task 09:", result);
  });


// 10. Implement fakeDBQuery()
// Create a function that simulates a DB query with a random delay and returns data (like a user object).
// Chain multiple fake queries.


const randomTime = Math.floor(Math.random() * 1000 + 1)

function getShop() {

  const shop = {
    id: "02",
    name: "Royal Book Store",
    books: [{
      id: "01",
      name: "Miss Mary",
      price: "29"
    }, {
      id: "02",
      name: "Black Cobra",
      price: "19"
    }, {
      id: "03",
      name: "Mystic River",
      price: "17"
    }]
  }

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(shop);
    }, randomTime)
  });
}

function getBook(shop,bookName) {
  return new Promise((resolve, reject) => {

    const myBook = shop.books.find(book => book.name === bookName);

    if(!myBook) throw new Error("Book not found.")

    setTimeout(() => {

      resolve(myBook);

    }, randomTime)
  })
}


function myBook(bookName) {
  getShop()
    .then((shop) => { return getBook(shop,bookName) })
    .then((book) => { console.log("Task 10: Found the book with price", `${book.price}$`) })
    .catch((error) => { console.error(error) })
}

myBook("Mystic River");