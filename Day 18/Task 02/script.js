// 2. Add, delete, and search rows in a dynamic table
// A form to add rows (Name, Age, Role).
// Each row should have a “Delete” button to remove it.
// Add a search input that filters the rows by name.
// Use insertRow, deleteRow, and textContent/innerText.

const formElem = document.createElement("form");
const tableElem = document.createElement("table");
const nameInputElem = document.createElement("input");
const ageInputElem = document.createElement("input");
const rollInputElem = document.createElement("input");
const filterInputElem = document.createElement("input");
const addRowBtnElem = document.createElement("button");
const tableHeadingElem = document.createElement("thead");
const tableBodyElem = document.createElement("tbody");
const divElem = document.createElement("div");
const lineBreakElem = document.createElement("br");

ageInputElem.setAttribute("class", "style");
rollInputElem.setAttribute("class", "style");
addRowBtnElem.setAttribute("class", "style");
nameInputElem.setAttribute("placeholder", "Name");
ageInputElem.setAttribute("placeholder", "Age");
rollInputElem.setAttribute("placeholder", "Roll No");
filterInputElem.setAttribute("placeholder", "Search Name")
filterInputElem.setAttribute("onkeyup", "filterName()")

divElem.style.display = "inline-block";
divElem.appendChild(nameInputElem);
divElem.appendChild(ageInputElem);
divElem.appendChild(rollInputElem);

document.body.appendChild(divElem);

addRowBtnElem.innerText = "Add Row";

document.body.appendChild(addRowBtnElem);
document.body.appendChild(lineBreakElem);

filterInputElem.style.marginBottom = "15px";

document.body.appendChild(filterInputElem);

const headRow = tableHeadingElem.insertRow();
let headCell = headRow.insertCell();
headCell.setAttribute("class", "style-2");
headCell.innerText = "Name";
headCell = headRow.insertCell();
headCell.setAttribute("class", "style-1");
headCell.innerText = "Age";
headCell = headRow.insertCell();
headCell.setAttribute("class", "style-1");
headCell.innerText = "Roll No";

tableElem.appendChild(tableHeadingElem);
tableElem.appendChild(tableBodyElem);

formElem.appendChild(tableElem);

document.body.appendChild(formElem);

addRowBtnElem.onclick = function () {

    const inputElems = document.querySelectorAll("div input");
    const delBtnElem = document.createElement("button");

    delBtnElem.setAttribute("type", "button")
    delBtnElem.setAttribute("onclick", "delRow(this)")
    delBtnElem.innerText = "✕";

    let rowRef = tableBodyElem.insertRow(-1);

    inputElems.forEach(elem => {
        let cellRef = rowRef.insertCell(-1);
        cellRef.innerText = elem.value;
        elem.value = "";
    });

    let cellRef = rowRef.insertCell(-1);

    cellRef.appendChild(delBtnElem)

}

function delRow(elem) {
        const rowIndex = elem.parentNode.parentNode.rowIndex - 1;
        tableBodyElem.deleteRow(rowIndex);
    }

    function filterName() {
        const allRows = document.querySelectorAll("tbody tr");

        allRows.forEach(row => {
            row.style.display = row.firstElementChild.textContent.toLocaleLowerCase().includes(filterInputElem.value.toLocaleLowerCase()) ? "" : "none";
        })
    }
