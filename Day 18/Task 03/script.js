// 3. Theme Switcher with Persistence
// Toggle theme using a button or switch.
// Persist the theme in localStorage and apply on page load.
// Change background and text color based on the theme.

const themeBth = document.querySelector("button");

const darkMode = localStorage.getItem("darkMode") ?? "false";

    document.body.style.backgroundColor = darkMode === "false" ? "white" : "black";
    document.body.style.color = darkMode === "false" ? "black" : "white";

themeBth.onclick = function () {
    const darkMode2 = localStorage.getItem("darkMode");

    document.body.style.backgroundColor = darkMode2 === "false" ? "black" : "white";
    document.body.style.color = darkMode2 === "false" ? "white" : "black";
    localStorage.setItem("darkMode", darkMode2 === "false" ? "true" : "false");
}
