document.getElementById("faceForm").addEventListener("submit", function(e) {
    e.preventDefault();

    clearErrors();

    const nameField = document.getElementById("face__label")
    const passwordField = document.getElementById("face__password")

    let hasErros = false;

    if (nameField.value.trim() === "") {
        showErrors(nameField, "Name or password is empty");
        hasErros = true;
    }

    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if(!passwordRegex.test(passwordField.value.trim())){
        showErrors(passwordField, "Password is invalid");
        hasErros = true;
    }

    if(!hasErros){
        alert("Data submitted successfully.");
    }
})

function showErrors(inputField, message) {
    inputField.classList.add("error-input");

    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error-message");
    errorDiv.innerText = message;

    inputField.parentNode.appendChild(errorDiv);

}

function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((message) => message.remove())

    const errorInputs = document.querySelectorAll(".error-input");
    errorInputs.forEach((input) => input.classList.remove("error-input"));
}