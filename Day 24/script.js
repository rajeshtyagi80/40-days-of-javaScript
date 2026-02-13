// 1. Create a function wait(ms) that returns a promise which resolves after ms milliseconds. Use async/await to log messages before and after the delay

async function wait(ms) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Task 01: After Delay");
        }, ms)
    });
};

async function tacklePromise(ms) {
    console.log("Task 01: Before delay.");
    const message = await wait(ms);
    console.log(message);
}

tacklePromise(1000);


// 2. Using async/await, log "One", then after 1 second log "Two", then "Three" after another 2 seconds. No setTimeout outside of promises

async function logOne() {
    return "Task 02: One";
}

async function logTwo() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Task 02: Two");
        }, 1000)
    })
}

async function logThree() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Task 02: Three");
        }, 2000)
    })
}

(async function () {
    const result1 = await logOne();
    console.log(result1);
    const result2 = await logTwo();
    console.log(result2);
    const result3 = await logThree();
    console.log(result3);
})();


// 3. Use fetch() with async/await to load a local JSON file (data.json) and display its contents in the console

(async function () {
    
    const response = await fetch("data.json");
    const data = await response.json();

    console.log("Task 03:", data);

}());


// 4. Use the public API https://jsonplaceholder.typicode.com/users/1 to fetch and display the user’s name, email, and address on the page

(async function () {

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error("User not found.")
        }

        const data = await response.json();

        const user = document.getElementById("user");
        user.innerHTML = `<h3>Task 04:</h3><h4>Name: ${data.name}</h4><h4>Email: ${data.email}</h4><h4>Address: Street ${data.address.street},
                       Suite ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}</h4>`;

    } catch (error) {
        user.innerHTML = "<h4>User not Found</h4>";
    }


})();
// 5. Modify the previous task to handle errors (e.g., wrong URL) and display a user-friendly error message in the DOM

// 6. Refactor then/catch to async/await
// fetch('/api/data')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));


(async function () {

    try {
        const response = await fetch("data.json");

        if (!response.ok) throw new Error("Data not found.");

        const data = await response.json();

        console.log("Task 06:", data);

    } catch (error) {

        console.error(error);
    }
})();


// Project Task

// Let's Build a “Movie Explorer” App

// Build an app that lets users search movies using the OMDB API: http://www.omdbapi.com/?apikey=yourkey&s=movieName

// Hints:

// Input box for search term
// Display movie title, poster, and year
// Show “No results found” if search fails
// Use async/await, DOM manipulation, and try/catch


// Solution: In Movie Explorer Folder.