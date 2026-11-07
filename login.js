const form = document.querySelector("form"),
    fnameInput = form.querySelector(".fname"),
    passInput = form.querySelector(".password"),
    eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input");
        if (pInput.type === "password") {
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return (pInput.tyep = "text")
        }
        eyeIcon.classList.replace("bx-show", "bx-hide")
        pInput.type = "password"
    });
});

function checkFname() {
    const savedFname = localStorage.getItem("savedFname")
    if (fnameInput.value.trim() !== savedFname) {
        return fnameInput.classList.add("invalid")
    }
    fnameInput.classList.remove("invalid")
}

function checkPassword() {
    const savedPass = localStorage.getItem("savedPassword")
    if (passInput.value.trim() !== savedPass) {
        return passInput.classList.add("invalid")
    }
    passInput.classList.remove("invalid")
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkFname();
    checkPassword();

    fnameInput.addEventListener("keyup", checkFname);
    passInput.addEventListener("keyup", checkPassword);

    if (
        !fnameInput.classList.contains("invalid") &&
        !passInput.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action");
    }

})