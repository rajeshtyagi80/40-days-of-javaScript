function highlightText() {
  let paraElem = document.querySelectorAll("p.info");
  paraElem.forEach((para) => {
    para.style.backgroundColor = "yellow";
  })
}

function filterList() {
  const inputElem = document.getElementById("searchInput");
  const input = inputElem.value;

  const items = document.querySelectorAll("#itemList li");
  items.forEach(item => {
    item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
  })
}


// 1. Find the Most Frequent Word in a Paragraph
// Consider the follwoing HTML:

// <div id="text">This is a test. This test is only a test.</div>
// Now, find and display the most frequently occurring word. Also put a count of occurance beside it.

// Hints:

// Use document.querySelector() or getElementById() to select the paragraph.
// Convert the text into an array of words.
// Use querySelector() to display the most frequent word along with the count inside another <div>.

let length = 0;
const mostFrequentWord = [];
const textArray = document.getElementById("text").innerText.toLocaleLowerCase().split(" ");

const textArray1 = textArray.map(word => {
  if (word.includes(".")) {
    word = word.slice(0, -1);
  }
  return word;
})

const uniqueWords = textArray1.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

uniqueWords.forEach(word => {
  const oneWordArray = textArray1.filter(word2 => {
    return word === word2;
  })

  if (oneWordArray.length > length) {
    mostFrequentWord.length = 0;
    length = oneWordArray.length;
    mostFrequentWord.push(word);
  }

});

document.querySelector("div.frequency").innerText = `Most frequent word: ${mostFrequentWord[0]} | Count: ${length}`;


// 2. Create a zebra pattern
// Consider the following HTML:

// <ul id="cars">
//     <li>BMW</li>
//     <li>Mahindra</li>
//     <li>Audi</li>
//     <li>Toyota</li>
//     <li>Honda</li>
//     <li>Hundai</li>
//     <li>Tata</li>
//     <li>Suzuki</li>
// </ul>
// Now put alternate colors and background colors to each of the list tags. for example,

// If tne BMW is in white color text, the background should be in black color.
// Then for the next car it will be reversed, the color is black and the background is white.
// Then again the next one is white color and background black
// So on.

const carsListElem = document.querySelectorAll("#cars li");
carsListElem.forEach((car , index) => {
  car.style.backgroundColor = index % 2 ? "white" : "black";
  car.style.color = index % 2 ? "black" : "white";
  
});


// 3. Write different ways we can access DOM and what they returns

// Answer:  1. getElementById(id)  it returns a element node.
//          2. getElementsByClassName(className) it returns html collection.
//          3. getElementsByTagName(tagName) it returns html collection.
//          4. querySelector(cssSelector) it returns a element node.
//          5. querySelectorAll(cssSelector) it returns a node list.


// 4. Find and Replace Text Inside a Page
// Write a script that finds all occurrences of a word inside a <p> tag and replaces them with another word dynamically.

const textElem = document.querySelector("p#text2");
const wordsArray = textElem.innerText.split("test");
textElem.innerText =wordsArray.join("habit");

// 5. Extract and Count Unique Links from a Page
// Count all the unique hyperlinks (<a>) in a page and display their count.

const aTags = document.querySelectorAll("a");
document.querySelector("#lastDiv").innerText = `Total number of "a" tags = ${aTags.length}`