const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");


// --------------------------------------------------
// FORM VALIDATION
// --------------------------------------------------

form.addEventListener("submit", function (event) {

    // Stop the normal form submission
    event.preventDefault();

    // Clear old messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;


    // ----------------------------------------------
    // EMPTY FIELD VALIDATION
    // ----------------------------------------------

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }


    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email address.";
        isValid = false;
    }


    if (phoneInput.value.trim() === "") {
        phoneError.textContent = "Please enter your phone number.";
        isValid = false;
    }


    if (messageInput.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        isValid = false;
    }


    // ----------------------------------------------
    // EMAIL FORMAT VALIDATION
    // ----------------------------------------------

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        emailInput.value.trim() !== "" &&
        !emailPattern.test(emailInput.value.trim())
    ) {
        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;
    }


    // ----------------------------------------------
    // PHONE FORMAT VALIDATION
    // ----------------------------------------------

    const phonePattern =
        /^[0-9\s\-()+]{10,}$/;

    if (
        phoneInput.value.trim() !== "" &&
        !phonePattern.test(phoneInput.value.trim())
    ) {
        phoneError.textContent =
            "Please enter a valid phone number.";

        isValid = false;
    }


    // ----------------------------------------------
    // IF EVERYTHING IS VALID
    // ----------------------------------------------

    if (isValid) {

        successMessage.textContent =
            "Thank you! Your form was submitted successfully.";

        form.reset();

        // Run the bonus API request
        getFeaturedContact();
    }

});


// --------------------------------------------------
// CLEAR ERRORS WHEN USER STARTS CORRECTING A FIELD
// --------------------------------------------------

nameInput.addEventListener("input", function () {
    if (nameInput.value.trim() !== "") {
        nameError.textContent = "";
    }
});


emailInput.addEventListener("input", function () {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "";
    }
    else if (emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "";
    }
});


phoneInput.addEventListener("input", function () {

    const phonePattern =
        /^[0-9\s\-()+]{10,}$/;

    if (phoneInput.value.trim() === "") {
        phoneError.textContent = "";
    }
    else if (phonePattern.test(phoneInput.value.trim())) {
        phoneError.textContent = "";
    }
});


messageInput.addEventListener("input", function () {
    if (messageInput.value.trim() !== "") {
        messageError.textContent = "";
    }
});


// --------------------------------------------------
// API FETCH — BONUS
// --------------------------------------------------

function getFeaturedContact() {

    const apiResult = document.getElementById("apiResult");

    apiResult.textContent = "Loading contact information...";

    fetch("https://jsonplaceholder.typicode.com/users/1")

        .then(function (response) {

            // Check whether the request was successful
            if (!response.ok) {
                throw new Error("Network response was not successful.");
            }

            return response.json();
        })

        .then(function (data) {

            apiResult.innerHTML = `
                <strong>${data.name}</strong><br>
                Email: ${data.email}<br>
                Phone: ${data.phone}
            `;
        })

        .catch(function (error) {

            apiResult.textContent =
                "Sorry, the contact information could not be loaded.";

            console.error(error);
        });
}
