// ==========================================
// 1. BUTTON CHANGES CONTENT
// ==========================================

const changeButton = document.querySelector("#change-button");
const message = document.querySelector("#message");

changeButton.addEventListener("click", function () {
    message.textContent = "Thanks for visiting my About Me page!";
});


// ==========================================
// 2. STYLE CHANGES WHILE TYPING
// ==========================================

const nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", function () {
    if (nameInput.value.trim() !== "") {
        nameInput.style.backgroundColor = "#d9f3ff";
    } else {
        nameInput.style.backgroundColor = "white";
    }
});


// ==========================================
// 3. DYNAMIC PROJECT LIST
// ==========================================

const addButton = document.querySelector("#add-button");
const projectInput = document.querySelector("#project-input");
const projectList = document.querySelector("#project-list");

addButton.addEventListener("click", function () {
    const projectName = projectInput.value.trim();

    if (projectName !== "") {
        const newItem = document.createElement("li");

        newItem.textContent = projectName;

        projectList.appendChild(newItem);

        projectInput.value = "";
    }
});


// ==========================================
// 4. FORM VALIDATION
// ==========================================

const form = document.querySelector("#contact-form");

const formError = document.querySelector("#form-error");

const contactName = document.querySelector("#contact-name");

const email = document.querySelector("#email");

const phone = document.querySelector("#phone");

const formMessage = document.querySelector("#form-message");


// ==========================================
// 5. INTERCEPT FORM SUBMIT
// ==========================================

form.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Clear previous error
    formError.textContent = "";

    // ======================================
    // EMPTY FIELD VALIDATION
    // ======================================

    if (contactName.value.trim() === "") {
        formError.textContent = "Please enter your name.";
        contactName.focus();
        return;
    }

    if (email.value.trim() === "") {
        formError.textContent = "Please enter your email.";
        email.focus();
        return;
    }

    if (phone.value.trim() === "") {
        formError.textContent = "Please enter your phone number.";
        phone.focus();
        return;
    }

    if (formMessage.value.trim() === "") {
        formError.textContent = "Please enter a message.";
        formMessage.focus();
        return;
    }


    // ======================================
    // EMAIL FORMAT VALIDATION
    // ======================================

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        formError.textContent = "Please enter a valid email address.";
        email.focus();
        return;
    }


    // ======================================
    // SUCCESS MESSAGE
    // ======================================

    formError.textContent = "Form submitted successfully!";

});


// ==========================================
// 6. CLEAR ERROR WHEN USER STARTS CORRECTING
// ==========================================

contactName.addEventListener("input", function () {
    formError.textContent = "";
});

email.addEventListener("input", function () {
    formError.textContent = "";
});

phone.addEventListener("input", function () {
    formError.textContent = "";
});

formMessage.addEventListener("input", function () {
    formError.textContent = "";
});
