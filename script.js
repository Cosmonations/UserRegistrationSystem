const form = document.querySelector("form");
const eyeIcons = document.querySelectorAll(".show-hide"),
    fnameInput = form.querySelector(".fname"),
    lnameInput = form.querySelector(".lname"),
    ageInput = form.querySelector(".age"),
    genderInput = form.querySelector(".gender"),
    countryInput = form.querySelector(".country"),
    emailInput = form.querySelector(".email"),
    passInput = form.querySelector(".password"),
    cPassInput = form.querySelector(".cPassword");

// First Name Validation
function checkFname() {
    if (fnameInput.value.trim() === "") {
        return fnameInput.classList.add("invalid");
    }
    fnameInput.classList.remove("invalid");
}

// Last Name Validation
function checkLname() {
    if (lnameInput.value.trim() === "") {
        return lnameInput.classList.add("invalid");
    }
    lnameInput.classList.remove("invalid");
}

// Age Validation
function checkAge() {
    if (ageInput.value.trim() === "" || ageInput <= 0) {
        return ageInput.classList.add("invalid");
    }
    ageInput.classList.remove("invalid")
}

// Gender Validation
function checkGender() {
    if (genderInput.value === "") {
        return genderInput.classList.add("invalid");
    }
    genderInput.classList.remove("invalid")
}

// Country Validation

function checkCountry() {
    if (countryInput.value.trim() === "") {
        return countryInput.classList.add("invalid")
    }
    countryInput.classList.remove("invalid")
}

// Email Validation
function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        return emailInput.classList.add("invalid")
    }
    emailInput.classList.remove("invalid")
}



// Hide and Show Password
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

// Password Validation
function createPass() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!*?&]{8,}$/;
    if (!passInput.value.match(passPattern)) {
        return passInput.classList.add("invalid")
    }
    passInput.classList.remove("invalid");
}

// Confirm Password Validation
function confirmPass() {
    if (passInput.value !== cPassInput.value || cPassInput.value === "") {
        return cPassInput.classList.add("invalid");
    }
    cPassInput.classList.remove("invalid")
}

// Calling Functions on Form Submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Preventing form submission


    // Run all validation checks
    checkFname();
    checkLname();
    checkAge();
    checkGender();
    checkCountry();
    checkEmail();
    createPass();
    confirmPass();


    // Attach live validation events
    fnameInput.addEventListener("keyup", checkFname);
    lnameInput.addEventListener("keyup", checkLname);
    ageInput.addEventListener("keyup", checkAge);
    genderInput.addEventListener("keyup", checkGender);
    countryInput.addEventListener("keyup", checkCountry);
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createPass);
    cPassInput.addEventListener("keyup", confirmPass);

    // Check if ant input contains the 'invalid' class
    if (
        !fnameInput.classList.contains("invalid") &&
        !lnameInput.classList.contains("invalid") &&
        !ageInput.classList.contains("invalid") &&
        !genderInput.classList.contains("invalid") &&
        !countryInput.classList.contains("invalid") &&
        !emailInput.classList.contains("invalid") &&
        !passInput.classList.contains("invalid") &&
        !cPassInput.classList.contains("invalid")
    ) {
        localStorage.setItem("savedFname", fnameInput.value.trim())
        localStorage.setItem("savedPassword", passInput.value.trim())
        location.href = form.getAttribute("action")
    }
});