document.getElementById("faceForm").addEventListener("submit", function(e) {
    e.preventDefault();

    clearErrors();

    const nameField = document.getElementById("face__label")
    const passwordField = document.getElementById("face__password")
    const errorField = document.getElementById("face__error")
    const errorFieldPassword = document.getElementById("face__error__password")

    let hasErros = false;

    if (nameField.value.trim() === "") {
        // showErrors(nameField, "Name or password is empty");
        nameField.classList.add("error-input");
        errorField.textContent = "Name  is empty"
        hasErros = true;
    }

    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if(!passwordRegex.test(passwordField.value.trim())){
        // showErrors(passwordField, "Password is invalid");
        passwordField.classList.add("error-input");
        errorFieldPassword.textContent = "Password is invalid"
        hasErros = true;
    }

    if(!hasErros){
        alert("Data submitted successfully.");
    }
})

function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((message) => message.remove())

    const errorInputs = document.querySelectorAll(".error-input");
    errorInputs.forEach((input) => input.classList.remove("error-input"));
}