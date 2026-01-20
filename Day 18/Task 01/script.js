// 1. Create a form dynamically using JavaScript and manipulate its behavior
// Add input fields dynamically based on user selection e.g., text, email, number
// Add a submit button that logs all the input values as an object.
// Add a reset button that clears the form.
// Use createElement, appendChild, setAttribute, and addEventListener.

const nameBtn = document.createElement("button");
const emailBtn = document.createElement("button");
const phoneNumberBtn = document.createElement("button");
const submitBtn = document.createElement("button");
const resetBtn = document.createElement("button");
const formElem = document.createElement("form");
const divElem = document.getElementById("div");

nameBtn.setAttribute("onclick", "enterName()");
emailBtn.setAttribute("onclick", "enterEmail()");
phoneNumberBtn.setAttribute("onclick", "enterPhoneNumber()");
submitBtn.setAttribute("onclick", "submit()");
resetBtn.setAttribute("onclick", "clearForm()");

nameBtn.innerText = "Add Name";
emailBtn.innerText = "Add Email";
phoneNumberBtn.innerText = "Add Phone Number";
submitBtn.innerText = "Submit";
resetBtn.innerText = "Reset";

emailBtn.classList.add("style");
phoneNumberBtn.classList.add("style");
resetBtn.style.marginLeft = "5px";

submitBtn.style.display = "none";
resetBtn.style.display = "none";

divElem.appendChild(formElem);
document.body.appendChild(submitBtn);
document.body.appendChild(resetBtn);
document.body.insertBefore(nameBtn, divElem);
document.body.insertBefore(emailBtn, divElem);
document.body.insertBefore(phoneNumberBtn, divElem);

function enterName() {
    if (Object.hasOwn(formElem.children, "name")) return;
    const nameInputElem = document.createElement("input");
    const nameLabelElem = document.createElement("label");
    const brElem = document.createElement("br");
    const emailInputElem = document.getElementById("email");
    const phoneNumberInputElem = document.getElementById("phoneNumber");

    nameInputElem.setAttribute("id", "name");
    nameInputElem.setAttribute("placeholder", "Name");
    nameInputElem.classList.add("style-1");
    nameLabelElem.setAttribute("for", "name");
    nameLabelElem.classList.add("style");
    nameLabelElem.innerText = "Name";

    if (Object.hasOwn(formElem.children, "email")) {
        formElem.insertBefore(nameInputElem, emailInputElem);
        formElem.insertBefore(nameLabelElem, emailInputElem);
        formElem.insertBefore(brElem, emailInputElem);

    } else if (Object.hasOwn(formElem.children, "phoneNumber")) {
        formElem.insertBefore(nameInputElem, phoneNumberInputElem);
        formElem.insertBefore(nameLabelElem, phoneNumberInputElem);
        formElem.insertBefore(brElem, phoneNumberInputElem);
    } else {
        formElem.appendChild(nameInputElem);
        formElem.appendChild(nameLabelElem);
        formElem.appendChild(brElem);
    };

    submitBtn.style.display = "inline-block";
    resetBtn.style.display = "inline-block";

};

function enterEmail() {
    if (Object.hasOwn(formElem.children, "email")) return;
    const phoneNumberInputElem = document.getElementById("phoneNumber")
    const emailInputElem = document.createElement("input");
    const emailLabelElem = document.createElement("label");
    const brElem = document.createElement("br");
    emailInputElem.setAttribute("id", "email");
    emailInputElem.setAttribute("placeholder", "Email");
    emailInputElem.classList.add("style-1");
    emailLabelElem.setAttribute("for", "email");
    emailLabelElem.classList.add("style");
    emailLabelElem.innerText = "Email";

    if (Object.hasOwn(formElem.children, "phoneNumber")) {
        formElem.insertBefore(emailInputElem, phoneNumberInputElem);
        formElem.insertBefore(emailLabelElem, phoneNumberInputElem);
        formElem.insertBefore(brElem, phoneNumberInputElem);
    } else {
        formElem.appendChild(emailInputElem);
        formElem.appendChild(emailLabelElem);
        formElem.appendChild(brElem);
    };

    submitBtn.style.display = "inline-block";
    resetBtn.style.display = "inline-block";

};

function enterPhoneNumber() {
    if (Object.hasOwn(formElem.children, "phoneNumber")) return;
    const phoneNumberInputElem = document.createElement("input");
    const phoneNumberLabelElem = document.createElement("label");
    phoneNumberInputElem.setAttribute("id", "phoneNumber");
    phoneNumberInputElem.setAttribute("placeholder", "Phone Number");
    phoneNumberInputElem.classList.add("style-1");
    phoneNumberLabelElem.setAttribute("for", "phoneNumber");
    phoneNumberLabelElem.classList.add("style");
    phoneNumberLabelElem.innerText = "Phone Number";

    formElem.appendChild(phoneNumberInputElem);
    formElem.appendChild(phoneNumberLabelElem);

    submitBtn.style.display = "inline-block";
    resetBtn.style.display = "inline-block";
};

function submit() {
    const allInputElem = document.querySelectorAll("input");
    const allLabelElem = document.querySelectorAll("label");
    let counter = 0;
    const info = {};

    allLabelElem.forEach(elem => {
        info[elem.innerText] = allInputElem[counter].value;
        counter++;
    });
    console.log(info);
};

function clearForm() {
    const allInputElem = document.querySelectorAll("input");

    let counter = 0;
    allInputElem.forEach(elem => {
        allInputElem[counter].value = "";
        counter++;
    });
}