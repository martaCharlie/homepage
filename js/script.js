{
    const welcome = () => {
        console.log("Cześć!");
    }
    welcome();

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            themeName.innerText = "jasny"
        } else {
            themeName.innerText = "ciemny"
        }
    }

    const init = () => {
        const changeBackground = document.querySelector(".js-changeBackground");
        changeBackground.addEventListener("click", toggleBackground);
    }

    init();

    const howMuchTime = () => {
    const day = document.querySelector(".day").innerText;
    const howMuch = document.querySelector(".howMuch");


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
}}
