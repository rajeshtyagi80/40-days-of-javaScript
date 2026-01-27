// 1. Traverse and Toggle Classes
// Build a navigation menu. On click of a list item:

// Traverse up to parent <ul>
// Remove .active class from all <li>
// Add .active only to the clicked <li>


document.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        const parentElem = e.target.parentElement;
        for (elem of parentElem.children) {
            elem.classList.remove("active");
        }
        e.target.classList.add("active");
    }
})


// 2. Highlight Text Using Range
// Use the Range API to highlight a portion of a paragraph by wrapping it with a <mark> tag.

function highlightText() {

    const p = document.getElementById("holi");
    const mark = document.querySelector("mark");
    if (mark) {
        const markText = mark.textContent;
        const length = p.firstChild.length;
        p.removeChild(mark);

        p.textContent = `${p.textContent.slice(0, length)}${markText}${p.textContent.slice(length)}`;
    }

    const startIndexElem = document.getElementById("start");
    const endIndexElem = document.getElementById("end");
    const startIndex = startIndexElem.value;
    const endIndex = endIndexElem.value;

    if (Number(endIndex) <= p.innerText.length && Number(endIndex) >= Number(startIndex)) {

        const markElem = document.createElement("mark");
        const range = document.createRange();
        const textNode1 = document.createTextNode(p.innerText);

        range.setStart(textNode1, startIndex); 
        range.setEnd(textNode1, endIndex);

        const content = range.cloneContents();

        markElem.appendChild(content);

        const firstPartNode = document.createTextNode(p.innerText.slice(0, startIndex));
        const lastPartNode = document.createTextNode(p.innerText.slice(endIndex));

        p.innerText = "";
        p.appendChild(firstPartNode);
        p.appendChild(markElem);
        p.appendChild(lastPartNode);

        startIndexElem.value = "";
        endIndexElem.value = "";

    } else {
        alert(`End Index must be greater than Start Index and less than ${p.innerText.length + 1}`)
        startIndexElem.value = "";
        endIndexElem.value = "";
    }
}


// 3. Use DocumentFragment for Performance
// Insert 100 list items into the DOM using:

// Plain DOM methods (one by one)
// DocumentFragment (all at once)

const divElem = document.querySelector(".wrapper-div");

function planeDOM() {

    divElem.lastElementChild.replaceChildren();

    for (let i = 1; i <= 100; i++) {
        const itemElem = document.createElement("li");
        itemElem.innerText = `Item ${i}, using Plane DOM`;
        divElem.lastElementChild.appendChild(itemElem);
    }
}

function docFragment() {

    divElem.lastElementChild.replaceChildren();

    const docFrag = document.createDocumentFragment();

    for (let i = 1; i <= 100; i++) {
        const itemElem = document.createElement("li");
        itemElem.innerText = `Item ${i}, using DocumentFragment`;
        docFrag.appendChild(itemElem);
    }

    divElem.lastElementChild.appendChild(docFrag);
}

// 4. Build a “Smart Cloner”
// Create a UI with an element and a “Clone” button. Use cloneNode(true) and cloneNode(false)
// and show the difference visually.


const template = document.querySelector(".card-template");
const cloneContainer = document.querySelectorAll(".wrapper-div2");
let count = 1;
function clone() {

    if (count <= 1) {

        // Deep cloning

        const deepClone = template.cloneNode(true);
        cloneContainer[1].appendChild(deepClone);

        // Shallow cloning

        const shallowClone = template.cloneNode(false);
        cloneContainer[2].appendChild(shallowClone);

        count++;
    };
};


// 5. MutationObserver Watcher
// Create a div and use MutationObserver to log whenever:
// A new child is added
// The class attribute changes
// Text is modified

const target = document.querySelector("#watcher");

const mutationObserver = new MutationObserver((mutationList, mutationObserver) => {

    for (mutation of mutationList) {
        if (mutation.type === "characterData") {
            console.log("Text is modified");
        }
        if (mutation.type === "childList") {
            console.log("Element is removed or added");
        }
        if (mutation.attributeName === "class") {
            console.log("Class attribute is changed from:", mutation.oldValue, "to", mutation.target.getAttribute("class"));
        }
    }
});

mutationObserver.observe(target, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeOldValue: true,
});

function mutateDiv() {
    const newPara = document.createElement("p");
    newPara.innerText = "Spring is a season of renewal, following winter's cold with warmer, pleasant weather, longer days, and vibrant new life as flowers bloom in bright colors and trees grow fresh green leaves"
    target.appendChild(newPara);
    target.children[0].childNodes[0].textContent = "The air fills with sweet scents and birdsong, encouraging outdoor activities like picnics and walks, making it a time of hope, fresh starts, and joy as nature awakens."
    target.classList.toggle("bisque");
}