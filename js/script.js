const welcome = () => {
console.log("Cześć!");
}

const toggleBackground = () => {
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".themeName");

    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        themeName.innerText = "jasny"
    } else {
        themeName.innerText = "ciemny"
    }
};

const dayEqualHowMuchTime = () => {
let day = document.querySelector(".day").innerText;
let howMuch = document.querySelector(".howMuch");
};



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

const init = () => {
const changeBackground = document.querySelector(".js-changeBackground");
changeBackground.addEventListener("click", toggleBackground);

welcome();
};

init();
