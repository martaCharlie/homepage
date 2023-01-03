console.log("Cześć!");

let day = document.querySelector(".day").innerText;
let howMuch = document.querySelector(".howMuch");



switch (day) {
    case "poniedziałek":
    case "wtorek":
        howMuch.innerText = "dużo";
        break;

    case "środa":
    case "czwartek":
        howMuch.getBoundingClientRect = "trochę";
        break;

    default:
        howMuch.innerText = "mało ";

}
let changeBackground = document.querySelector(".js-changeBackground");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

changeBackground.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        themeName.innerText = "jasny"
    } else {
        themeName.innerText = "ciemny"
    }
})