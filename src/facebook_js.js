const messageName = "Name is empty";
const messagePassword = "Password is invalid";

document.getElementById("faceForm").addEventListener("submit", function (e) {
    e.preventDefault();

    clearErrors();

    const nameField = document.getElementById("EmailOrPhone");
    const passwordField = document.getElementById("password");
    const errorField = document.getElementById("face__error");
    const errorFieldPassword = document.getElementById("error-password");

    let hasErrors = false;

    if (!nameField.value.trim()) {
        nameField.classList.add("error-input");
        if (errorField) {
            errorField.textContent = messageName;
        }
        hasErrors = true;
    }


    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (!passwordRegex.test(passwordField.value.trim())) {
        passwordField.classList.add("error-input");
        if (errorFieldPassword) {
            errorFieldPassword.textContent = messagePassword;
        }
        hasErrors = true;
    }

    if (!hasErrors) {
        alert("Data submitted successfully.");
    }
});

function clearErrors() {
    const errorMessages = document.querySelectorAll(".face__error-message");
    errorMessages.forEach((message) => {
        message.textContent = ""; // Clear error messages
    });

    const errorInputs = document.querySelectorAll(".error-input");
    errorInputs.forEach((input) => input.classList.remove("error-input"));
}
