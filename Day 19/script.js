// 1. Create a Dynamic Tabbed Interface
// Build a clean, accessible tab component where clicking on a tab header displays the corresponding tab content.
// It mimics real-world use like dashboards, profile settings, or pricing plans.

// Functional Requirements
// ✅ Clicking a tab title shows the corresponding content.
// ✅ Only one tab content is visible at a time.
// ✅ The active tab should have a visual highlight.
// ✅ Add a keyboard shortcut: pressing 1, 2, or 3 switches to that tab.

// Example:
// document.addEventListener("keydown", (e) => {
//     if (e.key === "1") switchToTab(1);
//     if (e.key === "2") switchToTab(2);
//     if (e.key === "3") switchToTab(3);
//     });
// ✅ Use event delegation to handle tab clicks.
// ✅ Use classList to manage active state.
// ✅ Use a custom event to broadcast when a tab is changed (log tab name to console).
// ✅ Use stopPropagation() if needed during advanced control.



const headingArray = ["Home", "About", "Contact"];
const allDescriptions = document.querySelectorAll(".content");
const allButtons = document.querySelectorAll(".tab");

for (i = 0; i <= headingArray.length - 1; i++) {
  const headingElem = document.createElement("h3");
  const heading = document.createTextNode(headingArray[i]);
  headingElem.appendChild(heading);
  allDescriptions[i].insertBefore(headingElem, allDescriptions[i].firstChild);
  allButtons[i].setAttribute("onclick", "changeTab(this)")
}

function changeTab(button) {

  const newEvent = new CustomEvent("tabChanged", {
    detail: {
      tab: button.innerText
    }
  });
  document.dispatchEvent(newEvent);
}

document.querySelector(".tabs").addEventListener("click", (e) => {

  e.stopPropagation();

  if (e.target.tagName == "BUTTON") {

    const tabValue = e.target.dataset.tab;

    allDescriptions.forEach((des) => {
      des.classList.remove("active");
    });

    allButtons.forEach(button => {
      button.classList.remove("active");
    });

    allButtons[tabValue - 1].classList.add("active");
    allDescriptions[tabValue - 1].classList.add("active");
  }
});

document.addEventListener("click", () => {
  allDescriptions.forEach((des) => {
    des.classList.remove("active");
  });

  allButtons.forEach(button => {
    button.classList.remove("active");
  });
})

document.addEventListener("keydown", (e) => {

  if (e.key === "1" || e.key === "2" || e.key === "3") {

    const newEvent = new CustomEvent("tabChanged", {
      detail: {
        tab: allButtons[e.key - 1].innerText
      }
    })

    document.dispatchEvent(newEvent);

    allDescriptions.forEach((des) => {
      des.classList.remove("active");
    });

    allButtons.forEach(button => {
      button.classList.remove("active");
    });
  }

  switch (e.key) {
    case "1": allButtons[0].classList.add("active");
      allDescriptions[0].classList.add("active");
      break;
    case "2": allButtons[1].classList.add("active");
      allDescriptions[1].classList.add("active");
      break;
    case "3": allButtons[2].classList.add("active");
      allDescriptions[2].classList.add("active");
  }
});

document.addEventListener("tabChanged", (e) => {

  let tabValue = "";
  allButtons.forEach(button => {
    if (button.classList.contains("active")) tabValue = button.innerText;
  })

  if (tabValue !== e.detail.tab) {
    console.log("Tab Changed To:", e.detail.tab)
  }
});
