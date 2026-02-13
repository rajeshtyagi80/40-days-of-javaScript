const buttonEl = document.getElementById("searchBtn");
const searchInputEl = document.getElementById("searchInput");

const container = document.getElementById("cards-container");
const template = document.getElementById("card-template");

let isExecuting = false;

buttonEl.addEventListener("click", () => {
  moviesDisplay()
})

searchInputEl.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    moviesDisplay();
  }
})

async function moviesDisplay() {

  if (isExecuting) {
    return; // Exit if already running
  }
  isExecuting = true;

  setTimeout(() => {   // preventing displaying results if user press enter twice or thrice quickly
    isExecuting = false;
  }, 1000);

  try {

    container.innerHTML = "";

    const moreResultsEl = document.getElementById("moreResults")

    if (moreResultsEl) moreResultsEl.remove();

    const search = searchInputEl.value;
    if (search) {

      let url = "https://www.omdbapi.com/?i=tt3896198&apikey=ecee3d6f&s=";
      url = url.concat(search);
      let response = await fetch(url);
      let data = await response.json();

      if (data.Response === "False") {
        const message = document.createElement("h2");
        message.textContent = data.Error;
        container.appendChild(message);
        return;
      };

      for (let i = 1; i <= 3; i++) {  // looping to get more pages.

        if (data.totalResults > i * 10 - 10) {  // have more results to show, go inside else return

          if (i > 1) { // blocking iteration for first page, which we get above

            await waitForClick();  // waiting for user to click on "More Results" element

            url = "https://www.omdbapi.com/?i=tt3896198&apikey=ecee3d6f&s=";
            url = url.concat(search).concat(`&page=${i}`);
            response = await fetch(url);
            data = await response.json();

          };

        } else return;

        const moviesArray = data.Search;

        moviesArray.forEach(async (element) => {

          const url = `https://www.omdbapi.com/?i=${element.imdbID}&apikey=ecee3d6f`; //  fetch call to get detais of movie using imdb ID.
          const response = await fetch(url);
          const data = await response.json();
          const clone = template.content.cloneNode(true);
          const imgEl = clone.querySelector('img');

          imgEl.setAttribute("src", element.Poster);
          clone.querySelector('#title').innerHTML = `<span>Title: </span>${data.Title}`;
          clone.querySelector('#year').innerHTML = `<span>Year: </span>${data.Year}`;
          clone.querySelector('#type').innerHTML = `<span>Type: </span>${data.Type}`;
          clone.querySelector('#genre').innerHTML = `<span>Genre: </span>${data.Genre}`;
          clone.querySelector('#director').innerHTML = `<span>Director: </span>${data.Director}`;
          clone.querySelector('#writer').innerHTML = `<span>Writer: </span>${data.Writer}`;
          clone.querySelector('#language').innerHTML = `<span>Language: </span>${data.Language}`;
          clone.querySelector('#country').innerHTML = `<span>Country: </span>${data.Country}`;

          container.appendChild(clone);
        });
      };
    };
  } catch (error) {
    console.log(error);
  } finally {
    isExecuting = false;
  }
};

function waitForClick() {
  return new Promise(resolve => {
    const h2 = document.createElement("h2");
    h2.id = "moreResults";
    h2.textContent = "More Results";
    document.body.appendChild(h2);
    h2.addEventListener("click", () => {
      document.getElementById("moreResults").remove();
      resolve();
    });
  });
};

