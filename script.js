// 1. Button changes content
const changeButton = document.querySelector("#change-button");
const message = document.querySelector("#message");

changeButton.addEventListener("click", function () {
    message.textContent = "Thanks for visiting my About Me page!";
});

// 2. Style changes while typing
const nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", function () {
    if (nameInput.value.trim() !== "") {
        nameInput.style.backgroundColor = "#d9f3f0";
    } else {
        nameInput.style.backgroundColor = "white";
    }
});

// 3. Dynamic list
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



