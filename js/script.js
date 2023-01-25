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
}

const init = () => {
    const day = document.querySelector(".day").innerText;
    const howMuch = document.querySelector(".howMuch");
    if (day === "poniedziałek" || day === "wtorek") {
        howMuch.innerText = "dużo "
    } else if (day === "środa" || day === "czwartek") {
        howMuch.innerText = "trochę "
    } else {
        howMuch.innerText = "mało "
    }
}

init();