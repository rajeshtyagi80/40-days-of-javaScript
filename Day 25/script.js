// 1. Use fetch() to retrieve a list of users from https://jsonplaceholder.typicode.com/users and log the names to the console

async function users() {
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usersData = await response.json();

        usersData.forEach(user => {
            console.log("Task 01:", user.name);
        });

    } catch (err) {
        console.log(err)
    }
}

users()


// 2. Fetch all posts by userId=1 from https://jsonplaceholder.typicode.com/posts?userId=1 and display the titles in the DOM


async function postsByUserIdOne() {
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
        const data = await response.json();

        data.forEach(post => {
            const postEl = document.createElement("p");
            postEl.textContent = `Title: ${post.title}`;
            document.body.appendChild(postEl);
        })

    } catch (error) {
        console.log(error);
    }
}

postsByUserIdOne();


// 3. Send a POST request to https://jsonplaceholder.typicode.com/posts with a new post (title, body, userId). Show the response in console


async function newPost() {
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                userId: 11,
                title: "How to fry Gulab Jamun",
                body: "Fry on low heat; high heat makes them raw inside",
            })
        });
        console.log("Task 03:", response);
    } catch (error) {
        console.log(error);
    }
};

newPost();



// 4. Update the post with ID = 1 by sending a PUT request with a new title and body. Use the same endpoint


async function updatePostWithIdOne() {
    try {

        const response = fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            body: JSON.stringify({
                title: "Is JavaScript Easy?",
                body: "Its neither easy nor difficult, you need to learn concept fundamentally."
            })
        });
    } catch (error) {
        console.log(error);
    }
};

updatePostWithIdOne();


// 5. Send a PATCH request to update just the title of post ID = 1


async function patchPostWithIdOne() {
    try {

        fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PATCH",
            body: JSON.stringify({
                title: "How to learn coding easily?",
            })
        });
    } catch (error) {
        console.log(error);
    }
};

patchPostWithIdOne();


//6. Send a DELETE request to remove post with ID = 1. Log the status of the response

async function deletePostWithIdOne() {
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE"
        })
        console.log("Task 06, Status:", response.status);
    }
    catch (error) {
        console.log(error);
    }
};

deletePostWithIdOne();


// 7. Send a POST request to https://jsonplaceholder.typicode.com/posts with Content-Type: application/json in headers. Log the response

async function postRequest() {
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: 12,
                title: "Learning new language",
                body: "Learning new language is not easy, but you can make it interisting.",
            })
        });
        console.log("Task 07:", response);
    } catch (error) {
        console.log(error);
    }
};

postRequest();


// 8. Create a custom function request(url, options) that wraps fetch. Use it to GET users and POST a new post

async function request(url, options) {
    try {

        const response = await fetch(url, options);

        if (!response.ok) throw new Error("Targer URL not found.")
        const data = await response.json();
        console.log("Task 08: ", data);
    } catch (err) {
        console.error(err);
    }
}

const newPostObject = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        userId: 13,
        title: "Best Time to Visit Japan",
        body: "Spring (cherry blossoms) and Autumn (foliage) are ideal, offering pleasant weather and stunning scenery.",
    })
}

request("https://jsonplaceholder.typicode.com/users");
request("https://jsonplaceholder.typicode.com/posts", newPostObject);


// 9. Make a fetch call to a broken URL and use .catch() or try...catch to show a user-friendly error message

async function fetchUsingBrokenUrl() {
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/user");

        if (!response.ok) throw new Error("Targer URL not found.")
        const data = await response.json();
        console.log("Task 09: ", data);
    } catch (err) {
        console.error("Task 09: ", err);
    }
}

fetchUsingBrokenUrl();


// 10. Use AbortController to cancel a long-running fetch request (you can delay the response using a mock server or setTimeout)

let controller;

async function download() {
    controller = new AbortController();
    const signal = controller.signal;

    console.log("Task 10: ", "Downloading...");

    setTimeout(async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal });

            const data = await response.json();
            console.log("Task 10: ", "Download Complete.");
        } catch (err) {
            console.error("Task 10: ", err);

        }
    }, 2000)

}

function abortDownload() {

    if (controller) {

        controller.abort("User Aborted the download");
    }
}


